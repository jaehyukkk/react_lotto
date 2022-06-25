import React,{useState, useEffect} from "react";
import Navbar from "../component/Navbar";
import MostNumberSearch from "../component/MostNumberSearch";
import axios from "axios";

const Statistics = () => {

    let [number, setNumber] = useState(0);
    let [mostNumList, setMostNumList] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [searchToggle, setSearchToggle] = useState(false);

    const handleOnClick = async () => {
        try{
            setIsLoading(true);
            const response = await axios.get(`/api/v1/lotto/most-number/${number}`);
            if (!number) {
                alert('회차를 입력해주세요.');
            }
            setMostNumList(response.data);
            setIsLoading(false);
            setSearchToggle(true);
            console.log(response.data);
        } catch (e) {
            setIsLoading(false);
            console.error(e.response);
        }
    }

    if(isLoading) return(<div>Loading ....</div>);

    return(
        <div>
            <Navbar />
            <MostNumberSearch
                handleOnClick = {handleOnClick}
                mostNumList = {mostNumList}
                searchToggle = {searchToggle}
                setNumber = {setNumber}
            />
        </div>
    )
}

export default Statistics;