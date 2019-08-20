import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import '../styles/Login.scss';

class Login extends React.Component {
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
                            <input type="text"/>
                        </p>
                        <p>
                            <label>비밀번호</label>
                            <input type="password"/>
                        </p>
                        <p className="login-button-wrapper">
                            <button className="button login-button">로그인</button>
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

export default connect(mapStateToProps)(Login);