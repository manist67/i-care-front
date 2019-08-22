import React from 'react';
import { connect } from 'react-redux';
import '../styles/MyPage.scss';
import Axios from 'axios';
import URL from '../config/URL';

class MyPage extends React.Component {
    state = {
        user: null,
        proposals: [],
        applications: []
    }

    componentDidMount() {
        this.getUserInfo();
        this.getProposals();
        this.getApplications();
    }

    async getUserInfo() {
        try {
            const { token } = this.props.user;
    
            const {data: user} = await Axios.get(`${URL}/auth`, {
                headers: { token }
            });

            this.setState({user});
        } catch(e) {
            console.log(e);
        }
    }

    async getProposals() {
        try {
            const { token } = this.props.user;
    
            const {data: proposals} = await Axios.get(`${URL}/users/${this.props.user.seq}/proposals`, {
                headers: { token }
            });

            this.setState({proposals});
        } catch(e) {
            console.log(e);
        }
    }

    async getApplications() {
        try {
            const { token } = this.props.user;
    
            const {data: applications} = await Axios.get(`${URL}/applications`, {
                headers: { token }
            });

            this.setState({applications});
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        const { user, proposals, applications } = this.state;

        if(!user) return (<></>);

        return (
            <section className="myinfo-section">
                <div className="position-wrapper">
                    <div className="background">
                        <p className="main-slogan">당신과 아이가 쉴 수 있는 곳</p>
                        <p className="main-p">내 정보</p>
                    </div>
                </div>
                <article>
                    <div className="header">
                        <h1>MY INFO</h1>
                    </div>
                    <div className="body">
                        <div className="table-style">
                            <h1>유저정보</h1>
                            <div className="info-wrapper">
                                <p>
                                    <label>아이디</label>
                                    <span>{user.userID}</span>
                                </p>
                                <p>
                                    <label>전화번호</label>
                                    <span>{user.phone}</span>
                                </p>
                                <p>
                                    <label>이메일</label>
                                    <span>{user.email}</span>
                                </p>
                                <p>
                                    <label>주소</label>
                                    <span>{user.address1} {user.address2}</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="table-style">
                                <h1>접수목록</h1>
                                <div className="info-wrapper">
                                {
                                    proposals.map((proposal, idx) => {
                                        return (
                                            <p key={`idx-prop-${idx}`}>
                                                <label>{proposal.title}</label>
                                            </p>
                                        )
                                    })
                                }
                                </div>
                            </div>
                            <div className="table-style">
                                <h1>탁아목록</h1>
                                <div className="info-wrapper">
                                {
                                    applications.map((application, idx) => {
                                        return (
                                            <p key={`idx${idx}`}>
                                                <label>{application.proposal.title}</label>
                                            </p>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}


function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(MyPage);