import React,{useEffect, useState} from "react";
import LatestNumber from "../component/LatestNumber";
import LatestNumberSearch from "../component/LatestNumberSearch";
import axios from "axios";
import Navbar from "../component/Navbar";

const Main = () => {

    let [lottoNumberList, setLottoNumberList] = useState([]);
    let [round, setRound] = useState(0);
    let [roundLottoNumberList, setRoundLottoNumberList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [searchToggle, setSearchToggle] = useState(false);

    const getLottoNumber = async () => {
        try{
            const response = await axios.get("/api/v1/lotto-number");
            setLottoNumberList(response.data);
            setIsLoading(false);
            console.log(response.data);
        } catch (e){
            setIsLoading(false);
            console.error(e.response);
        }
    }

    const handleOnClick = async () => {
        setIsLoading(true);
        try{
            if (round === 0) {
                alert('회차를 입력해주세요.');
                return false;
            }
            const response = await axios.get(`/api/v1/lotto-number/${round}`);
            setRoundLottoNumberList(response.data);
            setIsLoading(false);
            setSearchToggle(true);
            console.log(response.data);
        }catch (e) {
            setIsLoading(false);
            console.log(e.response);
        }
    }

    // const getReferralNumber = async () => {
    //     try{
    //         const response = await axios.get(`/api/v1/lotto/random-number/300/20/40/45`);
    //         console.log('랜덤숫자 : ' + JSON.stringify(response.data));
    //     } catch (e) {
    //         console.log(e.response);
    //     }
    // }

    useEffect(() => {
        getLottoNumber();
    },[]);

    if(isLoading) return (<div>Loading ....</div>);

    return(
        <div>
            <Navbar />
            <LatestNumber
                lottoNumberList = {lottoNumberList}
            />
            <LatestNumberSearch
                setRound = {setRound}
                handleOnClick = {handleOnClick}
                roundLottoNumberList = {roundLottoNumberList}
                searchToggle = {searchToggle}
            />
        </div>
    )
}

export default Main;