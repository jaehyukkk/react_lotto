import React from "react";
import {Table} from "react-bootstrap";

const MostNumberSearch = (props) => {
    const {mostNumList, handleOnClick, setNumber, searchToggle} = props;
    return(
        <div>
            <h3 className= "latest-number-search-title">최근 N회차 통계</h3>
            <div>
                <input className="latest-number-search"
                       placeholder="최근 회차를 입력해주세요."
                       onChange={(e) => setNumber(e.target.value)}
                />
                <button className="latest-number-button" onClick={handleOnClick}>검색</button>
            </div>

            {searchToggle
                ?
                <div id="numTable">
                    <Table striped bordered hover size="s" id="table">
                        <thead>
                        <tr>
                            <th width="3%" >순위</th>
                            <th width="30%">출현 번호</th>
                            <th width="10%">횟수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mostNumList.map((item, i) => (
                            <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.number}</td>
                            <td>{item.count}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
                : null
            }
        </div>
    )
}

export default MostNumberSearch;