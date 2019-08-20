import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.scss';

function Navigation() {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="logo">
                    아이케어
                </div> 
                <div className="nav-items">
                    <ul>
                        <li>
                            <Link to={"/signin"}>로그인</Link>
                        </li>
                        <li>
                            <Link to={"/signup"}>회원가입</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;