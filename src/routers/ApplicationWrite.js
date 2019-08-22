import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ApplicationWrite.scss';

class ApplicationWrite extends React.Component {
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
                    </div>
                    <div className="body">
                        <div className="form-group">
                            <h2>1. 모임 요약</h2>
                            <div className="input-wrapper">
                                <label>제목</label>
                                <div className="form-control">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <label>카테고리</label>
                                <div className="form-control">
                                    <select>
                                        <option>-----------</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <h2>2. 모임 자격 조건</h2>
                            <div className="input-wrapper">
                                <label>나이</label>
                                <div className="form-control age-wrapper">
                                    <input type="number" min="0" max="20" defaultValue="5"/> <span>살 ~ </span> <input type="number" min="0" max="20" defaultValue="8"/> <span>살</span>
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <label>성별</label>
                                <div className="form-control">
                                    <input type="radio" id="boy"/> <label htmlFor="boy">남자</label>
                                    <input type="radio" id="girl"/> <label htmlFor="girl">여자</label>
                                    <input type="radio" id="both"/> <label htmlFor="both">혼성</label>
                                </div>
                            </div>
                            <div className="input-wrapper address-wrapper">
                                <label>장소</label>
                                <div className="form-control">
                                    <input type="text"/>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <label>시간</label>
                                <div className="form-control">
                                    <input type="date"/>
                                    <input type="time"/>
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <label>참가비</label>
                                <div className="form-control">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="input-wrapper participants-wrapper">
                                <label>인원수</label>
                                <div className="form-control">
                                    <input type="number" defaultValue="1"/> <span>~</span> <input type="number" defaultValue="1"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <h2>3. 모임 상세 내용</h2>
                            <div className="input-wrapper requirements-wrapper">
                                <label>준비물</label>
                                <div className="form-control">
                                    <textarea rows="5"></textarea>
                                </div>
                            </div>
                            <div className="input-wrapper contents-wrapper">
                                <label>내용</label>
                                <div className="form-control">
                                    <textarea rows="8"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="btns-wrapper">
                            <button className="btn-submit" type="button">제출하기</button>
                            <button className="btn-cancle" type="button">삭제하기</button>
                        </div>
                    </div>
                </article>
            </section>
        );
    }
}

export default ApplicationWrite;