import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/SubmitWrite.scss';
import Axios from 'axios';
import URL from '../config/URL';

class SubmitWrite extends React.Component {
    state = {
        proposal: null,
        childrenCount: 1,
        contents: ""
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

    async handleSubmit() {
        const {seq} = this.props.match.params;
        const { token } = this.props.user;
        const {childrenCount, contents} = this.state;

        try {
            await Axios.post(`${URL}/proposals/${seq}/applications`, {
                childrenCount, contents
            }, { headers: {token}});

            alert("접수 되었습니다.");
            this.props.history.push("/");
        } catch(e) {
            alert("잠시 후 다시 시도해주세요!");
        }
    }

    render() {
        const { proposal } = this.state;
        if(!proposal) return (<></>);

        return (
            <section className="submit-write-section">
                <div className="position-wrapper">
                    <div className="background">
                        <p className="main-slogan">당신과 아이가 쉴 수 있는 곳</p>
                        <p className="main-p">공고 신청</p>
                    </div>
                </div>
                <article>
                    <div className="header">
                        <h1>공고 신청</h1>
                    </div>
                    <div className="body">
                        <h1>1. 모집 공고</h1>
                        <div className="input-group">
                            <p>
                                <Link to={`/detail/${proposal.seq}`}>{proposal.title}</Link>
                            </p>
                        </div>
                        <h1>2. 요청 사항</h1>
                        <div className="input-group">
                            <label>아이 수</label>
                            <div className="form-control">
                                <input type="number" min={1} value={this.state.childrenCount} 
                                onChange={(e)=>{this.setState({childrenCount: e.target.value})}}/>
                                <span>명</span>
                            </div>
                        </div>
                        <div className="input-group">
                            <label>요청사항</label>
                            <div className="form-control">
                                <textarea rows={5} 
                                onChange={(e)=>{this.setState({contents: e.target.value})}}></textarea>
                            </div>
                        </div>
                        <div className="btns-wrapper">
                            <button className="btn-submit" type="button" onClick={this.handleSubmit.bind(this)}>신청하기</button>
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

export default connect(mapStateToProps)(SubmitWrite);