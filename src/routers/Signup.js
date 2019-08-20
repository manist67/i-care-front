import React from 'react';
import '../styles/Signup.scss';


class Signup extends React.Component {
    render() {
        return (
            <section className="signup-section">
                <div className="position-wrapper">
                    <div className="background">
                        <p className="main-slogan">당신과 아이가 쉴수 있는 곳</p>
                        <p className="main-p">회원가입</p>
                    </div>
                </div>
                <article>
                    <div className="signup-contents">
                        <div className="signup-slogan">
                            <h1>회원가입</h1>
                            <h2>
                                아이케어에 오신걸 환영합니다!<br/>
                                회원가입 후 아이케어 활동을 진행할 수 있습니다.
                            </h2>
                        </div>
                        <p>
                            <label>아이디</label>
                            <div className="input-form">
                                <input type="text"/>
                                <button type="button" className="btn-duplicate">
                                    중복확인
                                </button>
                            </div>
                        </p>
                        <p>
                            <label>닉네임</label>
                            <div className="input-form">
                                <input type="text"/>
                                <button type="button" className="btn-duplicate">
                                    중복확인
                                </button>
                            </div>
                        </p>
                        <p>
                            <label>비밀번호</label>
                            <input type="password"/>
                        </p>
                        <p>
                            <label>비밀번호 확인</label>
                            <input type="password"/>
                        </p>
                        <p>
                            <label>이메일</label>
                            <input type="email"/>
                        </p>
                        <p>
                            <label>주소</label>
                            <input type="text"/>
                        </p>
                        <p>
                            <label>상세주소</label>
                            <input type="password"/>
                        </p>
                        <p className="signup-button-wrapper">
                            <button className="button signup-button">회원가입</button>
                        </p>
                    </div>
                </article>
            </section>
        );
    }
}

export default Signup;