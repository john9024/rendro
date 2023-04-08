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
import { kindselect } from "@/actions/image";


export function Designpackage() {
    const [select, setSelect]=useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const imggenkey = useSelector(state => state.image);
    const next = () => {  
        if(select)  {
            navigate(`/${select}`);
            const value = `${select}`;
            dispatch(kindselect(value));
            console.log("kind", imggenkey);
            }
        else alert("select style");    
        }
              
    return (
        <div className=" relative top-16">
            <div className="flex flex-col relative items-center text-[34px] font-bold">
                What type of room <br></br> you want to design?
            </div>
            <div className="relative flex items-center justify-center mt-10">
                
                    <div className="flex flex-col items-center mx-5">
                        <button onClick={()=>setSelect("diningroom")} className="focus:brightness-50 hover:brightness-75 active:opacity-100">
                            <Avatar
                                src={diningroom}
                                size="xxl"
                                className="h-full w-full shadow-lg shadow-gray-500/25"
                            />
                        </button>
                        <Typography className="text-lg font-extrabold">
                                Dining Room
                        </Typography>

                    </div>
               
                <div className="flex flex-col items-center mx-5">
                     <button onClick={()=>setSelect("bedroom")} className="focus:brightness-50 hover:brightness-75 active:opacity-100">
                        <Avatar
                            src={bedroom}
                            size="xxl"
                            className="h-full w-full shadow-lg shadow-gray-500/25"
                        />
                  
                        
                        <Typography className="text-lg font-extrabold">
                            Bed Room
                        </Typography>
                    </button>
                </div>    
                <div className="flex flex-col items-center mx-5">
                    <button onClick={()=>setSelect("livingroom")} className="focus:brightness-50 hover:brightness-75 active:opacity-100">
                        <Avatar
                            src={livingroom}
                            size="xxl"
                            className="h-full w-full shadow-lg shadow-gray-500/25"
                        />
                   
                        <Typography className="text-lg font-extrabold">
                            Living Room
                        </Typography>
                    </button>
                </div>  
                <div>
                </div>  
            </div>  
            <div className="absolute w-full flex justify-between p-5">
                <Link to = "/home">
                    <ImArrowLeft size="40"/>                          
                </Link>

                <button onClick={next}>
                    <ImArrowRight size="40"/>   
                </button>
               
            </div>
        </div>
        
    );
};
export default Designpackage;