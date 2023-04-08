import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImArrowLeft, ImArrowRight } from "react-icons/im"
import { Button } from "@material-ui/core/index";
import axios from "axios";
import waitimg from "../../public/img/waitimg.jpg"
import Loading from "@/components/loading";
import QueryString from "qs";

export function Wait() {

    const [count, setCount] = useState(0);
    const [isPosted, setIsPosted] = useState(false);
    const navigate = useNavigate();
    const imgkey = useSelector(state => state.image);
    const next = () => { 
        navigate("/result");
    }

    let data = QueryString.stringify(imgkey);
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://192.168.125.111:5000/generate',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };
    
    async function Postrequest() {
        setIsPosted(true);
        console.log('data', data)
        let res = await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
        return res; 
              
    }
    if(!isPosted) {
        Postrequest();  
        console.log('select', data);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center relative top-16">
            <div className="flex flex-col items-center">
                <p className="text-[24px] font-bold text-center">Please Wait...</p>
                <p className="text-[15px] text-[#A0A0A0] font-normal text-center">Hint: It Might Take A Few Minutes</p>
            </div>
            
            <div className="relative w-[80%] mt-10 flex justify-center">
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src={waitimg} className="w-[60%]" alt="..."/>
                    <img className="w-[30%] h-[120%]" src="http://192.168.125.111:5000/result" alt = ""/>
                </div>
            </div>  
            <div className="w-full flex justify-between p-5">
                
                
                <Link to = "/space">
                    <ImArrowLeft size="40"/>                          
                </Link>
                <button onClick={next}>
                    <ImArrowRight size="40"/>   
                </button>
            </div>
            <Loading className="relative"/>
            <h1 className="absolute  bottom-16">{count}</h1> 
        </div>
        
    );
};
export default Wait;