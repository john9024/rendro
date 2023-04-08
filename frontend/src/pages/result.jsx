import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {ImArrowLeft} from "react-icons/im"
import {ImArrowRight} from "react-icons/im"
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core/index";
import result01 from "../../public/img/result01.jpg";
import result02 from "../../public/img/result02.jpg";
import result03 from "../../public/img/result03.jpg";
import mark from '../../public/img/mark.svg';

export function Result() {
    return (
        <div className="flex flex-col justify-center items-center h-full relative top-8">
            <div>
                <img src={mark} alt="..."/>
            </div>
             <div className="flex flex-col relative items-center">
                <p className="text-[24px] font-bold text-center">Your designs are ready</p>
                <p className="text-[15px] text-[#A0A0A0] font-normal text-center">Enjoy</p>
            </div>
            <div className="relative w-full h-[10rem] mt-10 flex justify-center">
                {/* <div className="grid grid-cols-3 gap-5"> */}
                    <img className="w-[30%] h-[120%]" src="http://192.168.125.111:5000/result" alt = ""/>
                    {/* <img src={result01}  alt="..."/>
                    <img src={result02}  alt="..."/>
                    <img src={result03}  alt="..."/>  */}
                {/* </div> */}
            </div>  
            <div className="w-full flex justify-between p-5 mt-10">
                <Link to = "/home">
                    <ImArrowLeft size="40"/>                          
                </Link>
            </div>
        </div>
    );
};
export default Result;