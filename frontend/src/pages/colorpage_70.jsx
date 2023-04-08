import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {ImArrowLeft} from "react-icons/im"
import {ImArrowRight} from "react-icons/im"
import { muted_sage, soft_blue, grey_blue, creamy_neutrals,style } from "@/data/color_70";
import { color_70_style } from "@/data/color_70_style";
import { color1select } from "@/actions/image";

export function Colorpage_70() {
    const [select, setSelect]=useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const imgkey = useSelector(state => state.image);
    const next = () => {  
        if(select)  {
            navigate("/colorpage_30");
            const value = `${select}`;
            dispatch(color1select(value));
            console.log('color1', imgkey); 
        }
    }
    console.log(select)
    return (
        <div className="flex flex-col items-center top-20 relative">
            <div className="flex flex-col relative items-center">
                <p className="text-[24px] font-bold text-center">What color do you like for the design ? (%70)</p>
                <p className="text-[15px] font-normal text-center">Hint: This color will cover 70% of the available <br></br> area in your room.</p>
            </div>
            <div className="relative flex justify-center flex-col items-center mt-10">
                {color_70_style.map((styles)=>(
                    <>
                        <div className="flex flex-row gap-10 items-center">
                            {styles.stylename.map((item) => (
                                <div>
                                    <div className="flex flex-col items-center">
                                        {/* <button onClick={()=>setSelect(`${item.bgcolor}`)} className={`bg-[${item.bgcolor}]  h-16 w-16 focus:brightness-50 hover:brightness-75 active:opacity-100`} /> */}
                                        <button onClick={()=>setSelect(`${item.bgcolor}`)} style={{backgroundColor:(item.bgcolor)}} className="h-20 w-20 focus:brightness-50 hover:brightness-75 active:opacity-100" />
                                        <p className="text-[8px] font-normal">{item.colorname}</p>
                                    </div> 
                                </div>
                            ))}
                        </div>
                        <p className="text-[16px] font-bold mb-5">{styles.title}</p>
                    </>
                ))}
            </div>
            <div className="w-full flex justify-between p-5">
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
export default Colorpage_70;