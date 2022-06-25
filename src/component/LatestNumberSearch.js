import React from "react";
import './LatestNumber';

const NumberSearch = (props) => {
    const {setKeyword, handleOnClick, searchToggle, roundLottoNumberList, title} = props;
    return(
        <div>
            <h3 className= "latest-number-search-title">{title}</h3>
            <div>
                <input className="latest-number-search"
                       placeholder="최근 회차를 입력해주세요."
                       onChange={(e) => setKeyword(e.target.value)}
                />
                <button className="latest-number-button" onClick={handleOnClick}>검색</button>
            </div>

            {searchToggle
                ?
                <div>
                    {roundLottoNumberList.map((item, i) => (
                        <div className="round-num-list">
                            <p>
                                <span>{item.drwtNo1} </span>
                                <span>{item.drwtNo2} </span>
                                <span>{item.drwtNo3} </span>
                                <span>{item.drwtNo4} </span>
                                <span>{item.drwtNo5} </span>
                                <span>{item.drwtNo6} </span>
                                <span> + </span>
                                <span>{item.bnusNo} </span>
                            </p>
                        </div>
                    ))}
                </div>

                : null
            }
        </div>
    )
}

export default NumberSearch;