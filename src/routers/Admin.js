import React from 'react';
import { connect } from 'react-redux';
import '../styles/Admin.scss';
import Axios from 'axios';
import URL from '../config/URL';
import Pagination from '../components/Pagination';

class Admin extends React.Component {
    state = {
        proposals: [],
        pagination: {
            page: 0,
            total: 0,
            unit: 0
        }
    }

    componentDidMount() {
        this.getProposalsData();
    }

    async getProposalsData() {
        const { token } = this.props.user;

        try {
            const {data: proposals, headers } = await Axios.get(`${URL}/proposals`, {
                headers: { token }
            });

            /* const pagination = {
                page: headers.get("X-PAGE"), total: headers.get("X-TOTAL"), unit: headers.get("X-UNIT")
            } */
            
            console.log(headers);

            this.setState({proposals});
        } catch(e) {
            alert("잠시 후 다시 시도해주세요!");
        }
    }
    
    handleAgree(idx) {
        return async () => {
            const { token } = this.props.user;
            const proposals = Object.assign([], this.state.proposals);
            proposals[idx].status = 1;
            this.setState({proposals});

            try {
                await Axios.patch(`${URL}/proposals/${proposals[idx].seq}`, {
                    status: true
                }, {
                    headers: { token }
                })
            } catch (e) {
                console.log(e);
            }
        }
    }


    handleDenied(idx) {
        return async () => {
            const { token } = this.props.user;
            const proposals = Object.assign([], this.state.proposals);
            proposals[idx].status = 0;
            this.setState({proposals});

            try {
                await Axios.patch(`${URL}/proposals/${proposals[idx].seq}`, {
                    status: false
                }, {
                    headers: { token }
                })
            } catch (e) {
                console.log(e);
            }
        }
    }

    render() {
        return (
            <section className="list-section">
                <div className="position-wrapper">
                    <div className="background">
                        <p className="main-slogan">당신과 아이가 쉴수 있는 곳</p>
                        <p className="main-p">모집 리스트</p>
                    </div>
                </div>
                <article>
                    <div className="header">
                        <h1>서울특별시 송파구</h1>
                    </div>
                    <div className="body">
                        <table>
                            <thead>
                                <tr>
                                    <th width="75px"></th>
                                    <th>제목</th>
                                    <th width="150px">카테고리</th>
                                    <th width="150px">인가여부</th>
                                    <th width="150px">인가하기</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.proposals.map((ele, idx)  => (
                                <tr key={`idx${idx}`}>
                                    <td>{ele.seq}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.category}</td>
                                    <td>{ele.status ? "허가" : "대기"}</td>
                                    <td>
                                        {!ele.status ? 
                                        <button type="button" onClick={this.handleAgree(idx)}
                                            className="btn btn-agree">인가</button>
                                            :
                                        <button type="button" onClick={this.handleDenied(idx)}
                                            className="btn btn-denied">대기</button>}
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                        <Pagination totalPage={1} current={0}/>
                    </div>
                </article>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Admin);