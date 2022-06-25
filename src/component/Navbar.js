import React from 'react';
import {Link} from 'react-router-dom';
import './lotto.css';


const Navbar = () => {


    return(
        <nav className="main-navbar">
            <ul>
                <li><Link to={`/`}>LOTTO</Link></li>
            </ul>
            <ul>
                <li>
                    <Link to={`/statistics`}>
                        숫자통계 
                    </Link>
                </li>
                <li>
                    <Link to={`/random`}>
                        랜덤번호 뽑기
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;