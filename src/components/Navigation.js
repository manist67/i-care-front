import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Navigation.scss';
import { setToken, setSeq, setName } from '../actions';

class Navigation extends React.Component {
    renderAdminTab() {
        if(this.props.user.auth === "ADMIN" || this.props.user.auth === "MASTER") {
            return (
                <li>
                    <Link to={"/admin"}>관리자</Link>
                </li>
            )
        }
    }

    renderDefault() {
        return (
            <ul>
                {this.renderAdminTab()}
                <li>
                    <Link to={"/list"}>신청리스트</Link>
                </li>
                <li>
                    <Link to={"/mypage"}>마이페이지</Link>
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


export default connect(mapStateToProps)(Navigation);