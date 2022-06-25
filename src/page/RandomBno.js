import React, {useState} from "react";
import axios from "axios";
import RandomBnoSearch from "../component/RandomBnoSearch";
import Navbar from "../component/Navbar";

const RandomBno = () => {
    let [num, setNum] = useState(0);
    let [rank, setRank] = useState(0);

    let [searchToggle, setSearchToggle] = useState(false);
    let [randomBno, setRandomBno] = useState([]);

    const handleOnClick = async () => {
        try {
            const response = await axios.get(`/api/v1/lotto/random-number/${num}/${rank}`);
            // alert(`랜덤번호\n${response.data}`);
            console.log(JSON.stringify(response.data));
            setRandomBno([...randomBno, JSON.stringify(response.data)]);
            setSearchToggle(true);
        } catch (e){
            console.error(e.response);
        }
    }

    return(
        <div>
            <Navbar />
            <RandomBnoSearch
                setNum = {setNum}
                setRank = {setRank}
                onClick = {handleOnClick}
                randomBno = {randomBno}
                searchToggle = {searchToggle}
            />
        </div>
    )
}

export default RandomBno;