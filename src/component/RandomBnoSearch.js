
const RandomBnoSearch = (props) => {
    const {setRank, setNum, onClick, searchToggle, randomBno} = props;
    return(
        <div>
            <h2>랜덤번호뽑기</h2>

            <input placeholder="최근 N 회차를 입력해주세요." onChange={(e) => {setNum(e.target.value)}}/>
            <br/>
            <br/>
            <input placeholder="순위를 입력해주세요." onChange={(e) => {setRank(e.target.value)}}/>
            <br/>
            <br/>
            <button onClick = {onClick}>뽑기</button>

            <div>
            {searchToggle
                ?
                <>
                {randomBno.map((item, i) => (
                    <div key={i}>{item}</div>
                    ))}
                </>
                : null
            }
            </div>
        </div>
    )
}
export default RandomBnoSearch;