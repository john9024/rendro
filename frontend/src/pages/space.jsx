import React from "react";
import {
    Typography,
    Avatar,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import diningroom from "/img/diningroom.jpg";
import bedroom from "/img/bedroom.jpg";
import livingroom from "/img/livingroom.jpg";
import {ImArrowLeft} from "react-icons/im"
import {ImArrowRight} from "react-icons/im"
import { useNavigate } from "react-router-dom";
import { Space_data } from "@/data/space-data";
import { spaceselect } from "@/actions/image";

export function Space() {
    const [select, setSelect]=useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const imgkey = useSelector(state => state.image);
    const next = () => {  
        if(select)  {
            navigate("/subscription");
            const value = `${select}`;
            dispatch(spaceselect(value));
            console.log('space', imgkey);
        }
            else alert("select style");
    }
    return (
        <div className="flex flex-col justify-center items-center relative top-16">
             <div className="flex flex-col relative items-center">
                <p className="text-[24px] font-bold text-center">What kind of feel do you want your space to have?</p>
            </div>
            <div className="relative w-[80%] items-center mt-10 grid grid-cols-4">
                {Space_data.map((item)=>(
                    <div className="flex flex-col items-center mx-5">
                        <button onClick={()=>setSelect("large")} className="focus:brightness-50 hover:brightness-75 active:opacity-100">
                            <Avatar
                                src={item.img}
                                size="xl"
                                className="h-full w-full shadow-lg shadow-gray-500/25"
                                />
                        </button>
                        <Typography className="text-lg font-extrabold">
                            {item.name}
                        </Typography>
                    </div>
                ))}
            </div>  
            <div className="w-full flex justify-between p-5">
                <Link to = "/budget">
                    <ImArrowLeft size="40"/>                          
                </Link>

                <button onClick={next}>
                    <ImArrowRight size="40"/>   
                </button>
               
            </div>
        </div>
        
    );
};
export default Space;