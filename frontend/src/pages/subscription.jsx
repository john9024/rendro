import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {ImArrowLeft} from "react-icons/im"
import {ImArrowRight} from "react-icons/im"
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core/index";
import flower01 from "../../public/img/flower01.jpg"
import flower02 from "../../public/img/flower02.jpg"
import { scriptselect } from "@/actions/image";
export function Subscription() {
    const [select, setSelect]=useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const imgkey = useSelector(state => state.image);
    const next = () => {  
        if(select) {
            navigate("/wait");
            const value = `${select}`;
            dispatch(scriptselect(value));
            console.log('script', imgkey);
        }
        else alert("select style");
    }
    console.log(select)
    return (
        <div className="flex flex-col justify-center items-center relative top-16">
             <div className="flex flex-col relative items-center">
                <p className="text-[24px] font-bold text-center">Choose the subscription model</p>
            </div>
            <div className="relative w-[80%] mt-10 flex justify-center">
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src={flower01} className="w-40" alt="..."/>
                    <p className=" text-[#465BA8] text-2xl font-bold">Basic</p>
                    <p className=" text-[#465BA8] text-4xl font-normal">$20</p>
                    <button className="w-[100px] h-[30px] m-5 bg-[#5974B9] rounded-full hover:bg-blue-900 active:bg-[#5974B9] focus:bg-purple-900" onClick={()=>setSelect("20")}>
                        <p className=" text-xl text-white">Start</p>
                    </button>
                    <p className=" text-[#465BA8] text-lg font-normal">One design Packages</p>
                </div>
                <div className=" bg-gradient-to-r from-white to-[#DBD5D9] w-5 h-96 shadow-lg m-16 rounded-md"></div>
                <div className="flex flex-col justify-center items-center gap-5 group">
                    <img src={flower02} className="w-40" alt="..."/>
                    <p className=" text-[#465BA8] text-2xl font-bold">Pro</p>
                    <p className=" text-[#465BA8] text-4xl font-normal">$200</p>
                    <button className="w-[100px] h-[30px] m-5 bg-[#E5CE1E] rounded-full shadow-black hover:bg-[#a89614] active:bg-[#E5CE1E] focus:bg-[#7b6e0f]" onClick={()=>setSelect("200")}>
                        <p className=" text-xl text-white">Start</p>
                    </button>
                    <p className=" text-[#465BA8] text-lg font-normal">Unlimited/Year</p>
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
        </div>
        
    );
};
export default Subscription;