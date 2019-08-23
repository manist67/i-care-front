import React from 'react';
import '../styles/Signup.scss';
import Axios from 'axios';
import URL from '../config/URL';
import DaumPostcode from 'react-daum-postcode';


class Signup extends React.Component {
    state = {
        userID: "",
        nickname: "",
        phone: "",
        password: "",
        password_check: "",
        email: "",
        address1: "",
        address2: "",
        location: "",
        /* valid server check */
        duplicate_id: false,
        duplicate_nickname: false,
        duplicate_phone: false,
        duplicate_email: false,
        /* for alert validations */
        error_id: "",
        error_nickname: "",
        error_phone: "",
        error_password: "",
        error_password_check: "",
        error_email: "",
        error_address1: "",
        error_address2: ""
    }

    async handleIDDuplication() {
        const { userID } = this.state;
        if(userID.length < 6) {
            this.setState({error_id: "아이디는 6자 이상으로 만들어주세요!"});
            return;
        }

        try {
            const response = await Axios.get(`${URL}/auth/validator`, {
                params: {
                    flag: "id",
                    value: userID
                }
            });

            if(!response.data) {
                this.setState({error_id: "중복된 아이디입니다."});
                return;
            }

            this.setState({duplicate_id: true});
        } catch(e) {

        }
        this.setState({error_id: null});
    }

    async handleNicknameDuplication() {
        const { nickname } = this.state;
        if(nickname.length < 3) {
            this.setState({error_nickname: "닉네임은 3자 이상으로 만들어주세요"});
            return;
        }
        
        if(nickname.length > 10) {
            this.setState({error_nickname: "닉네임은 10자 이하로 만들어주세요"});
            return;
        }

        try {
            const response = await Axios.get(`${URL}/auth/validator`, {
                params: {
                    flag: "nickname",
                    value: nickname
                }
            });

            if(!response.data) {
                this.setState({error_nickname: "중복된 닉네임입니다."});
                return;
            }

            this.setState({duplicate_nickname: true});
        } catch(e) {

        }

        this.setState({error_nickname: null});
    }

    async handlePhoneDuplication() {
        const { phone } = this.state;
        const phoneRegex = new RegExp("[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}");
        //TODO: valid phone
        if(!phoneRegex.test(phone)) {
            this.setState({error_phone: "정확한 휴대폰 번호를 입력해주세요."});
            return;
        }

        try {
            const response = await Axios.get(`${URL}/auth/validator`, {
                params: {
                    flag: "phone",
                    value: phone
                }
            });

            if(!response.data) {
                this.setState({error_phone: "중복된 번호입니다."});
                return;
            }

            this.setState({duplicate_phone: true});
        } catch(e) {

        }

        this.setState({error_phone: null});
    }

    async handleSignUp() {
        const { userID, password, email, address1, address2, phone, nickname, location} = this.state;
        try {
            await Axios.post(`${URL}/users`, {
                userID, password, email, address1, address2, phone, nickname, location
            });

            alert("회원가입을 축하합니다!");
            this.props.history.push("/signin");
        } catch(e) {
            console.log(e);
        }
    }

    /**
     * valid functions
     */
    validPassword(e) {
        const { value } = e.target
        const passwordRegex = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}");
        
        if(value.length < 8) {
            this.setState({error_password: "8자 이상의 암호를 입력해주세요."});
            return;
        }

        //TODO: valid passwrod
        if(false && !passwordRegex.test(value)) {
            console.log(passwordRegex, value);
            this.setState({error_password: "한 개 이상의 숫자/소문자/대문자가 포함 되어야합니다."});
            return;
        }

        this.setState({error_password: null});
    }

    validPassworCheck(e) {
        const { value } = e.target;
        const { password } = this.state;
        if(value != password) {
            this.setState({error_password_check: "비밀번호가 동일하지 않습니다."});
            return;
        }

        //TODO: password valid

        this.setState({error_password_check: null});
    }

    validEmail(e) {
        const { value } = e.target;

        //TODO: email valid
        
        this.setState({error_password_check: null});
    }

    openDaum() {
        this.setState({modal: true})
    }
    
    render() {
        return (
            <>
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
                        <div className="inputWrapper">
                            <p className="label-wrapper">
                                <label>아이디</label>
                                <span>{this.state.error_id}</span>
                            </p>
                            <div className="input-form">
                                <input type="text" 
                                    onChange={(e)=> {this.setState({userID: e.target.value})}}
                                    disabled={this.state.duplicate_id}/>
                                {!this.state.duplicate_id ? 
                                    <button type="button" onClick={this.handleIDDuplication.bind(this)}
                                        className="btn-duplicate">
                                        중복확인
                                    </button>
                                    :
                                    <button type="button"
                                        className="btn-duplicate">
                                        사용가능
                                    </button>
                                }
                            </div>
                        </div>
                        <div className="inputWrapper">
                            <p className="label-wrapper">
                                <label>닉네임</label>
                                <span>{this.state.error_nickname}</span>
                            </p>
                            <div className="input-form">
                                <input type="text" 
                                    onChange={(e)=> {this.setState({nickname: e.target.value})}}
                                    disabled={this.state.duplicate_nickname}/>
                                {!this.state.duplicate_nickname ? 
                                    <button type="button" onClick={this.handleNicknameDuplication.bind(this)}
                                        className="btn-duplicate">
                                        중복확인
                                    </button>
                                    :
                                    <button type="button"
                                        className="btn-duplicate">
                                        사용가능
                                    </button>
                                }
                            </div>
                        </div>
                        <div className="inputWrapper">
                            <p className="label-wrapper">
                                <label>휴대폰</label>
                                <span>{this.state.error_phone}</span>
                            </p>
                            <div className="input-form">
                                <input type="text" 
                                    placeholder="010-0000-0000"
                                    onChange={(e)=> {this.setState({phone: e.target.value})}}
                                    disabled={this.state.duplicate_phone}/>
                                {!this.state.duplicate_phone ? 
                                    <button type="button" onClick={this.handlePhoneDuplication.bind(this)}
                                        className="btn-duplicate">
                                        중복확인
                                    </button>
                                    :
                                    <button type="button"
                                        className="btn-duplicate">
                                        사용가능
                                    </button>
                                }
                            </div>
                        </div>
                        <div className="inputWrapper">
                            <p className="label-wrapper">
                                <label>비밀번호</label>
                                <span>{this.state.error_password}</span>
                            </p>
                            <input type="password" 
                                onBlur={this.validPassword.bind(this)}
                                onChange={(e)=> {this.setState({password: e.target.value})}}/>
                        </div>
                        <div className="inputWrapper">
                            <p className="label-wrapper">
                                <label>비밀번호 확인</label>
                                <span>{this.state.error_password_check}</span>
                            </p>
                            <input type="password" 
                                onBlur={this.validPassworCheck.bind(this)}
                                onChange={(e)=> {this.setState({password_check: e.target.value})}}/>
                        </div>
                        <div className="inputWrapper">
                            <label>이메일</label>
                            <input type="email" 
                                onBlur={this.validEmail.bind(this)}
                                onChange={(e)=> {this.setState({email: e.target.value})}}/>
                        </div>
                        <div className="inputWrapper">
                            <label>주소</label>
                            <div className="input-form">
                                <input type="text" value={this.state.address1} readOnly={true}/>
                                <button type="button" onClick={this.openDaum.bind(this)}
                                    className="btn-duplicate" >
                                    주소검사
                                </button>
                            </div>
                        </div>
                        <div className="inputWrapper">
                            <label>상세주소</label>
                            <input type="text" value={this.state.address2} onChange={ e=>{ this.setState({address2: e.target.value}) }}/>
                        </div>
                        <p className="signup-button-wrapper">
                            <button className="button signup-button" onClick={this.handleSignUp.bind(this)}>회원가입</button>
                        </p>
                    </div>
                </article>
            </section>
            {this.state.modal && <div className="modal" onClick={(e)=>{this.setState({modal: false})}}>
                <div className="modal-wrapper" onClick={(e) => {e.stopPropagation()}}>
                    <DaumPostcode onComplete={(data) => {
                        console.log(data);
                        this.setState({address1: data.address, location: data.zonecode, modal: false});
                    }}/>
                </div>
            </div>}
            </>
        );
    }
}

export default Signup;