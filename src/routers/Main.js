import React from 'react';

import '../styles/Main.scss';


class Main extends React.Component {
    render() {
        return (
            <section className="main-section">
                <div className="main-wrapper">
                    <div className="background">
                        <p className="main-slogan">당신과 아이가 쉴수 있는 곳</p>
                        <p className="main-p">아이케어</p>
                    </div>
                </div>
                {/*<article>
                    <div className="row">
                        <div className="column">
                            <h2>금주의 활동</h2>
                            <div className="wrapper">
                                <ul>
                                </ul>
                            </div>
                        </div>
                        <div className="column">
                            <h2>이 달의 사진</h2>
                            <div className="wrapper">
                                
                            </div>
                        </div>
                    </div>
                    <div className="when-i-care">
                        <h2>아이케어 후기</h2>
                        <div className="contents-wrapper">
                            <div className="review">
                                <h3>"집을 나간 아빠가 돌아왔습니다"</h3>
                                <h4>서현정 회원 </h4>
                                <p>
                                    재작년 12월, 집에서 기르던 아이아빠가 육아가 싫다고 집을 뛰쳐 나갔습니다.<br/>
                                    하지만 아이케어를 만난 후에 아이 아빠가 돌아왔습니다. 할렐루야!
                                </p>
                            </div>
                        </div>
                    </div>
                </article>*/}
            </section>
        );
    }
}

export default Main;