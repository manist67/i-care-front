import React from 'react';
import { connect } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';

import '../styles/Login.scss';
import Axios from 'axios';
import URL from '../config/URL';
import { TOKEN_STORAGE } from '../config/Storage';
import { setToken, setSeq, setName } from '../actions';

class Login extends React.Component {
    state = {
        id: "", password: ""
    }
    componentDidMount() {
        if(this.props.user.seq) {
            //TODO: out
        }
    }

    async handlerLogin() {
        const { id, password } = this.state;
        if(!this.validation(id, password)) return;

        try {
            const response = await Axios.post(`${URL}/auth/login`, { id, password });
            const { token } = response.data;
            localStorage.setItem(TOKEN_STORAGE, token);

            const {data: user} = await Axios.get(`${URL}/auth`, {
                headers: { token }
            });

            this.props.setToken(token);
            this.props.setSeq(user.seq);
            this.props.setName(user.name);
            //TODO: out
        } catch(e) {
            alert("아이디와 비밀번호를 확인하세요.");
            console.log(e);
        }
    }

    validation(id, password) {
        return true;
    }

    render () {
        return (
            <section className="login-section">
                <div className="position-wrapper">
                    <div className="background">
                        <p className="main-slogan">당신과 아이가 쉴수 있는 곳</p>
                        <p className="main-p">로그인</p>
                    </div>
                </div>
                <div className="login-wrapper">
                    <div className="login-contents">
                        <h1>로그인</h1>
                        <p>
                            <label>아이디</label>
                            <input type="text" onChange={(e)=> {this.setState({id: e.target.value})}}/>
                        </p>
                        <p>
                            <label>비밀번호</label>
                            <input type="password" onChange={(e)=> {this.setState({password: e.target.value})}}/>
                        </p>
                        <p className="login-button-wrapper">
                            <button className="button login-button" onClick={this.handlerLogin.bind(this)}>로그인</button>
                        </p>
                        <p>
                            <Link to="/signup" className="button signup-button">회원가입</Link>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return state
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);