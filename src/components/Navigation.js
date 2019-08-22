import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Navigation.scss';
import Axios from 'axios';
import URL from '../config/URL';
import { setToken, setSeq, setName } from '../actions';

class Navigation extends React.Component {
    componentDidMount() {
      this.getUserInfo();
    }
  
    async getUserInfo() {
      const token =  await localStorage.getItem("token");
      if(!token) return;
      try {
        const {data: user} = await Axios.get(`${URL}/auth`, {
            headers: { token }
        });
  
        this.props.setToken(token);
        this.props.setSeq(user.seq);
        this.props.setName(user.name);
      } catch(e) {
        console.log(e);
      }
    }

    renderDefault() {
        return (
            <ul>
                <li>
                    <Link to={"/signin"}>로그인</Link>
                </li>
                <li>
                    <Link to={"/signout"}>로그아웃</Link>
                </li>
            </ul>
        );
    }

    renderLogin() {
        if(this.props.user.seq) {
            return this.renderDefault();
        }

        return (
            <ul>
                <li>
                    <Link to={"/signin"}>로그인</Link>
                </li>
                <li>
                    <Link to={"/signup"}>회원가입</Link>
                </li>
            </ul>
        );
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="logo">
                        <Link to="/">아이케어</Link>
                    </div> 
                    <div className="nav-items">
                        {this.renderLogin()}
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps (state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        setToken: (token) => {
            dispatch(setToken(token));
        },
        setSeq: (seq) => {
            dispatch(setSeq(seq));
        },
        setName: (name) => {
            dispatch(setName(name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);