import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import img05 from "../../../public/img/05.jpg";
import img06 from "../../../public/img/06.jpg";
import img07 from "../../../public/img/07.jpg";
import {ImArrowLeft} from "react-icons/im"
import {ImArrowRight} from "react-icons/im"
import {
    Typography,
    Avatar,
  } from "@material-tailwind/react";
import {imggenkey} from "@/pages/constant";
import { typeselect } from "@/actions/image";

export function Livingroom() {
    const [select, setSelect]=useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const imggenkey = useSelector(state => state.image);
    const next = () => {  
        if(select)  {
            navigate("/colorpage_70");
            const value = `${select}`;
            // sessionStorage.setItem("imgkey", value);
            dispatch(typeselect(value));
            console.log("type", imggenkey);
        }
    }
    return (
        <div className="relative top-16">
            <div className="flex flex-col relative items-center">
                <p className="text-[24px] font-bold text-center">Let's find out what is your interior design style</p>
                <p className="text-[24px] font-bold text-center">Which one of these pictures you like the most?</p>
                <p className="text-[24px] text-center">Choose one</p>
            </div>
            <div className="relative flex items-center justify-center mt-10">
                
                    <div className="flex flex-col items-center mx-5">
                        <button onClick={()=>setSelect("type1")} className="focus:brightness-50 hover:brightness-75 active:opacity-100">
                            <Avatar
                                src={img05}
                                size="xxl"
                                className="h-full w-full shadow-lg shadow-gray-500/25"
                            />
                        </button>
                        
                    </div>
                <div className="flex flex-col items-center mx-5">
                     <button onClick={()=>setSelect("type2")} className="focus:brightness-50 hover:brightness-75 active:opacity-100">
                        <Avatar
                            src={img06}
                            size="xxl"
                            className="h-full w-full shadow-lg shadow-gray-500/25"
                        />
                        
                    </button>
                </div>    
                <div className="flex flex-col items-center mx-5">
                    <button onClick={()=>setSelect("type3")} className="focus:brightness-50 hover:brightness-75 active:opacity-100">
                        <Avatar
                            src={img07}
                            size="xxl"
                            className="h-full w-full shadow-lg shadow-gray-500/25"
                        />
                        
                    </button>
                </div>  
                <div>
                </div>  
            </div> 
            <div className="absolute w-full flex justify-between p-5">
                <Link to = "/designpackage">
                    <ImArrowLeft size="40"/>                          
                </Link>

                <button onClick={next}>
                    <ImArrowRight size="40"/>   
                </button>
               
            </div>

        </div>
        
    );
};
export default Livingroom;