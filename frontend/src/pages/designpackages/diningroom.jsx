import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import diningroom from "../../../public/img/diningroom.jpg";
import bedroom from "../../../public/img/bedroom.jpg";
import livingroom from "../../../public/img/livingroom.jpg";
import {ImArrowLeft} from "react-icons/im"
import {ImArrowRight} from "react-icons/im"
import {
    Typography,
    Avatar,
  } from "@material-tailwind/react";
import { typeselect } from "@/actions/image";


  // const API_URL = "http://localhost:8080/api/diningroom/";
export function Diningroom() {
   
    // async function Getrequest() {
    //     let res = await axios
    //       .get(API_URL + "pullout")
    //        .then((response) => {
    //         // if (response.data.accessToken) {
    //           sessionStorage.setItem("diningroom", JSON.stringify(response.data));
    //       
    //         // }
    //         
    //         // console.log('======================>')
    //         // console.log(response.data);
    //         return response.data;
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //       return res; 
        
          
    // }
    // Getrequest();
    // console.log('diningroom',sessionStorage.getItem("diningroom"));     
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
        // <div>
        //     <div className="flex flex-col relative items-center">
        //         <p className="text-[24px] font-bold text-center">Let's find out what is your interior design style</p>
        //         <p className="text-[24px] font-bold text-center">Which one of these pictures you like the most?</p>
        //         <p className="text-[24px] text-center">Choose one</p>
        //     </div>
        //     <div className="relative flex items-center justify-center mt-10">
        //         <div className="flex flex-col items-center">
        //             <img src="/img/livingroom.jpg" alt="" className=" mx-5 my-2"/> 
        //         </div>   
        //         <div className="flex flex-col items-center">
        //             <img src="/img/diningroom.jpg" alt="" className=" mx-5 my-2"/> 
        //         </div>
        //         <div className="flex flex-col items-center">
        //             <img src="/img/bedroom.jpg" alt="" className=" mx-5 my-2"/>
        //         </div>    
                 
        //     </div>  
        // </div>
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
                                src={diningroom}
                                size="xxl"
                                className="h-full w-full shadow-lg shadow-gray-500/25"
                            />
                        </button>
                       

                    </div>
               
                <div className="flex flex-col items-center mx-5">
                     <button onClick={()=>setSelect("type2")} className="focus:brightness-50 hover:brightness-75 active:opacity-100">
                        <Avatar
                            src={bedroom}
                            size="xxl"
                            className="h-full w-full shadow-lg shadow-gray-500/25"
                        />
                       
                    </button>
                </div>    
                <div className="flex flex-col items-center mx-5">
                    <button onClick={()=>setSelect("type3")} className="focus:brightness-50 hover:brightness-75 active:opacity-100">
                        <Avatar
                            src={livingroom}
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
export default Diningroom;


