import React from "react";
import './lotto.css';

const LatestNumber = (props) => {
    const {lottoNumberList} = props;

    return(
        <div className="latest-number">
            <h2>금주 당첨번호</h2>
            <div className ="latest-number-box">
                <div className="latest-number-list">
                    {lottoNumberList.map((item, i) => (
                        <div key={i} className="bno-list">
                            <div className="lotto-circle">
                                <span className="bno">{item.drwtNo1} </span>
                            </div>
                            <div className="lotto-circle">
                                <span className="bno">{item.drwtNo2} </span>
                            </div>
                            <div className="lotto-circle">
                                <span className="bno">{item.drwtNo3} </span>
                            </div>
                            <div className="lotto-circle">
                                <span className="bno">{item.drwtNo4} </span>
                            </div>
                            <div className="lotto-circle">
                                <span className="bno">{item.drwtNo5} </span>
                            </div>
                            <div className="lotto-circle">
                                <span className="bno">{item.drwtNo6} </span>
                            </div>
                            <div className="lotto-circle">
                                <span className="bno">{item.bnusNo} </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LatestNumber;