import React from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import { Link } from 'react-router-dom';
import '../styles/ApplicationWrite.scss';
import 'react-datetime/css/react-datetime.css';
import Axios from 'axios';
import URL from '../config/URL';
import moment from 'moment';

class ApplicationWrite extends React.Component {
    state = {
        title: "",
        category: null,
        minAge: 10,
        maxAge: 16,
        targetGender: "A",
        address1: "",
        address2: "",
        date: new moment(),
        fee: 0,
        minParticipants: 0,
        maxParticipants: 10,
        requirements: "",
        contents: ""
    }

    componentDidMount() {
        // TODO: token 체크
    }

    async submitApplication() {
        const { title, category, minAge, maxAge, targetGender, address1,
            address2, date, fee, minParticipants, maxParticipants, requirements, contents} = this.state;
        const token = this.props.user.token;

        if(!title || !category || !minAge || !maxAge || !targetGender || !address1 ||
            !address2 || !date || !contents) {
            alert("입력값을 확인하세요");
            return;
        }

        try {
            const response = await Axios.post(`${URL}/proposals`, {
                title, maxAge, minAge, targetGender, category, address1, address2, date: date.format("YYYY-MM-DD HH:mm:ss"), 
                fee, minParticipants, maxParticipants, requirements, contents
            }, {
                headers: { token }
            });

            alert("주민회장 / 관리자 검토 후 모집이 시작됩니다.");
            //TODO: 이동
        } catch(e) {
            console.log(e.response)
            alert("서버 오류입니다. 잠시 후 다시 시도해주세요");
        }
    }

    render() {
        return (
            <section className="application-write-section">
                <div className="position-wrapper">
                    <div className="background">
                        <p className="main-slogan">당신과 아이가 쉴수 있는 곳</p>
                        <p className="main-p">모집 신청</p>
                    </div>
                </div>
                <article>
                    <div className="header">
                        <h1>신청하기</h1>
                        <h2>*은 필수</h2>
                    </div>
                    <div className="body">
                        <div className="form-group">
                            <h2>1. 모임 요약</h2>
                            <div className="input-wrapper">
                                <label>제목 <i className="star">*</i></label>
                                <div className="form-control">
                                    <input type="text" 
                                        placeholder="제목을 입력하세요."
                                        onChange={(e)=>{this.setState({title: e.target.value})}}/>
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <label>카테고리 <i className="star">*</i></label>
                                <div className="form-control">
                                    <select onChange={(e)=>{this.setState({category: e.target.value})}}>
                                        <option>-----------</option>
                                        <option value={1}>잠실</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <h2>2. 모임 자격 조건</h2>
                            <div className="input-wrapper">
                                <label>나이 <i className="star">*</i></label>
                                <div className="form-control age-wrapper">
                                    <input type="number" min="0" max="20"
                                        onChange={(e)=>{this.setState({minAge: parseInt(e.target.value)})}}
                                        defaultValue={this.state.minAge}/>
                                    <span>살 ~ </span> 
                                    <input type="number" min="0" max="20" 
                                        onChange={(e)=>{this.setState({maxAge: parseInt(e.target.value)})}}
                                        defaultValue={this.state.maxAge}/> 
                                    <span>살</span>
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <label>성별 <i className="star">*</i></label>
                                <div className="form-control">
                                    <input type="radio" name="gender" id="both" 
                                        defaultChecked={true} onChange={(e)=>{
                                            this.setState({targetGender: "A"})
                                        }}/>
                                    <label htmlFor="both">혼성</label>

                                    <input type="radio" name="gender" id="boy" 
                                        onChange={(e)=>{
                                            this.setState({targetGender: "M"})
                                        }}/> 
                                    <label htmlFor="boy">남자</label>

                                    <input type="radio" name="gender" id="girl"
                                        onChange={(e)=>{
                                            this.setState({targetGender: "F"})
                                        }}/>  
                                    <label htmlFor="girl">여자</label>
                                </div>
                            </div>
                            <div className="input-wrapper address-wrapper">
                                <label>장소 <i className="star">*</i></label>
                                <div className="form-control">
                                    <input type="text" onChange={(e)=> {
                                        this.setState({address1: e.target.value})
                                    }}/>
                                    <input type="text" onChange={(e)=> {
                                        this.setState({address2: e.target.value})
                                    }}/>
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <label>시간 <i className="star">*</i></label>
                                <div className="form-control">
                                    <Datetime defaultValue={this.state.date}
                                    onChange={(date)=> {
                                        this.setState({date})
                                    }}/>
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <label>참가비 <i className="star">*</i></label>
                                <div className="form-control">
                                    <input type="number" min="0"
                                        value={this.state.fee} 
                                        onChange={(e)=> {
                                            this.setState({fee: e.target.value})
                                        }}/>
                                </div>
                            </div>
                            <div className="input-wrapper participants-wrapper">
                                <label>인원수 <i className="star">*</i></label>
                                <div className="form-control">
                                    <input type="number" onChange={(e)=> {
                                            this.setState({minParticipants: e.target.value})
                                        }} defaultValue={this.state.minParticipants}/> 
                                    <span>명 ~</span> 
                                    <input type="number" onChange={(e)=> {
                                            this.setState({maxParticipants: e.target.value})
                                    }} defaultValue={this.state.maxParticipants}/> 
                                    <span>명</span> 
                                    <span className="notify">0명일 경우 제한 없음</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <h2>3. 모임 상세 내용</h2>
                            <div className="input-wrapper requirements-wrapper">
                                <label>준비물</label>
                                <div className="form-control">
                                    <textarea rows="5" onChange={(e) => {
                                        this.setState({requirements: e.target.value})
                                    }}></textarea>
                                </div>
                            </div>
                            <div className="input-wrapper contents-wrapper">
                                <label>내용 <i className="star">*</i></label>
                                <div className="form-control">
                                    <textarea rows="8" onChange={(e) => {
                                        this.setState({contents: e.target.value})
                                    }}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="btns-wrapper">
                            <button className="btn-submit" type="button" onClick={this.submitApplication.bind(this)}>제출하기</button>
                            <button className="btn-cancle" type="button">삭제하기</button>
                        </div>
                    </div>
                </article>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ApplicationWrite);