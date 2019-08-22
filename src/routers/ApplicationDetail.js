import React from 'react';
import { connect } from 'react-redux';
import '../styles/ApplicationDetail.scss';
import Axios from 'axios';
import URL from '../config/URL';

class ApplicationDetail extends React.Component {
    state = {
        proposal: null
    }
    async componentDidMount() {
        const {seq} = this.props.match.params;
        const { token } = this.props.user;
        try {
            const {data: proposal} = await Axios.get(`${URL}/proposals/${seq}`,{
                headers: { token }
            });

            this.setState({proposal});
            console.log(proposal);
        } catch (e) {
            console.log(e.response);
            alert("잠시 후 다시 시도해주세요!");
        }
    }

    renderRequirements(requirements) {
        if(!requirements) return;
        return (
            <div className="input-wrapper requirements-wrapper">
                <label>준비물</label>
                <p>
                    {requirements}
                </p>
            </div>
        )
    }

    redirectToSubmit() {
        const {seq} = this.props.match.params;
        this.props.history.push(`/detail/${seq}/submit`);
    }

    render() {
        if(!this.state.proposal) {
            return (<></>)
        }

        const { proposal } = this.state;

        return (
            <section className="application-read-section">
                <div className="position-wrapper">
                    <div className="background">
                        <p className="main-slogan">아이케어</p>
                        <p className="main-p"> {proposal.title} </p>
                    </div>
                </div>
                <article>
                    <div className="header">
                        <h1>모집 공고</h1>
                    </div>
                    <div className="body">
                        <div className="form-group">
                            <h2>1. 모임 내용</h2>
                            <div className="row">
                                <div className="input-wrapper">
                                    <label>제목</label>
                                    <p>
                                        {proposal.title}
                                    </p>
                                </div>
                                <div className="input-wrapper">
                                    <label>카테고리</label>
                                    <p>
                                        {proposal.category}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-wrapper">
                                    <label>나이</label>
                                    <p>
                                        {proposal.minAge}살 부터 {proposal.maxAge}살 까지
                                    </p>
                                </div>
                                <div className="input-wrapper">
                                    <label>대상 성별</label>
                                    <p>
                                        {proposal.targetGender}
                                    </p>
                                </div>
                            </div>
                            <div className="input-wrapper address-wrapper">
                                <label>장소</label>
                                <p>{proposal.address1} {proposal.address2}</p>
                            </div>
                            <div className="row">
                                <div className="input-wrapper">
                                    <label>시간</label>
                                    <p>
                                        {proposal.date}
                                    </p>
                                </div>
                                <div className="input-wrapper">
                                    <label>참가비</label>
                                    <p>
                                        참가비
                                    </p>
                                </div>
                            </div>
                            <div className="input-wrapper participants-wrapper">
                                <label>인원수</label>
                                <p>
                                    최소인원: {proposal.minParticipants}명
                                </p>
                                <p>
                                    최대인원: {proposal.maxParticipants}명
                                </p>
                            </div>
                        </div>
                        <div className="form-group">
                            <h2>2. 모임장 정보</h2>
                            <div className="input-wrapper">
                                <div className="row">
                                    <div className="input-wrapper">
                                        <label>이름</label>
                                        <p>{proposal.user.nickname}</p>
                                    </div>
                                    <div className="input-wrapper">
                                        <label>이메일</label>
                                        <p>{proposal.user.email}</p>
                                    </div>
                                    <div className="input-wrapper">
                                        <label>전화</label>
                                        <p>{proposal.user.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <h2>3. 모임 상세 내용</h2>
                            {this.renderRequirements(proposal.requirements)}
                            <div className="input-wrapper contents-wrapper">
                                <label>내용</label>
                                <p>
                                    {proposal.contents}
                                </p>
                            </div>
                        </div>
                        <div className="btns-wrapper">
                            <button className="btn-submit" type="button" onClick={this.redirectToSubmit.bind(this)}>신청하기</button>
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ApplicationDetail);