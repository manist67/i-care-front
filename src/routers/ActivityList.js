import React from 'react';
import '../styles/ActivityList.scss';

class ActivityList extends React.Component {
    state = {
        data: [1, 2, 3, 4, 5]
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
                        <h1>모집리스트</h1>
                    </div>
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
                            {this.state.data.map(ele  => (
                            <tr>
                                <td>{ele}</td>
                                <td>Hello world! myname <span className="label">label</span></td>
                                <td>Regde</td>
                                <td>10 ~ 20</td>
                                <td>6 / 10</td>
                            </tr>
                            ))}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </article>
            </section>
        )
    }
}

export default ActivityList;