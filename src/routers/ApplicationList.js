import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/ApplicationList.scss';
import Pagination from '../components/Pagination';
import Axios from 'axios';

import URL from '../config/URL';

class ActivityList extends React.Component {
    state = {
        proposals: []
    }

    componentDidMount() {
        this.getProposalsData();
    }

    async getProposalsData() {
        const { token } = this.props.user;

        try {
            const {data: proposals} = await Axios.get(`${URL}/proposals`, {
                headers: { token }
            });
            this.setState({proposals});
        } catch(e) {
            alert("잠시 후 다시 시도해주세요!");
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
                                    <th width="150px">대상</th>
                                    <th width="150px">인원</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.proposals.map((ele, idx)  => (
                                <tr key={`idx${idx}`} onClick={()=>{
                                    this.props.history.push(`/detail/${ele.seq}`)
                                }}>
                                    <td>{ele.seq}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.category}</td>
                                    <td>{ele.minAge} ~ {ele.maxAge}</td>
                                    <td> / {ele.maxParticipants}</td>
                                </tr>
                                ))}
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                        <div className="tools-wrapper">
                            <Link to="/write">신청서 작성</Link>
                        </div>
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

export default connect(mapStateToProps)(ActivityList);