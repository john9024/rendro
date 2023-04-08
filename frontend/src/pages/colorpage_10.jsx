import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {ImArrowLeft} from "react-icons/im"
import {ImArrowRight} from "react-icons/im"
import { color_30 } from "@/data/color_30";
import { color3select } from "@/actions/image";
export function Colorpage_30() {
    const [select, setSelect]=useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const imgkey = useSelector(state => state.image);
    const next = () => {  
        if(select)  
            navigate("/budget");
            const value = `${select}`;
            dispatch(color3select(value));
            console.log('color3', imgkey);
    }
    console.log(select)
    return (
        <div className="flex flex-col items-center relative mt-16">
            <div className="flex flex-col relative items-center">
                <p className="text-[24px] font-bold text-center">What color do you like for the design ? (%10)</p>
                <p className="text-[15px] font-normal text-center">Hint: This color will cover 10% of the available <br></br> area in your room.</p>
            </div>
            <div className="relative flex justify-center flex-col items-center mt-10">
                <div className="grid  grid-cols-6 items-center">
                    {color_30.map((item) => (
                        <div>
                            <div className="flex flex-col items-center">
                                <button onClick={()=>setSelect(`${item.bgcolor}`)} style={{backgroundColor:(item.bgcolor)}} className="h-12 w-14 focus:brightness-50 hover:brightness-75 active:opacity-100 rounded-t-full rounded-b-full">
                                    <p className="text-[12px] font-normal">{item.colorname}</p>
                                </button>
                            </div> 
                        </div>
                    ))}
                </div>
                <p className="text-[12px] font-bold my-5">Colors may vary slightly depending on monitor settings</p>
            </div>
            <div className="w-full flex justify-between p-5">
                <Link to = "/colorpage_30">
                    <ImArrowLeft size="40"/>                          
                </Link>

                <button onClick={next}>
                    <ImArrowRight size="40"/>   
                </button>
            </div>
        </div>
    );
};
export default Colorpage_30;