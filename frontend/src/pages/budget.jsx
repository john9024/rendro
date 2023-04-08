import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {ImArrowLeft} from "react-icons/im"
import {ImArrowRight} from "react-icons/im"
import { Radio } from "@material-tailwind/react";
import { budgetselect } from "@/actions/image";

const options = [
    { id: 1, name: "Less than $1000" },
    { id: 1000, name: "$1000 to $2000" },
    { id: 2000, name: "$2000 to $5000" },
    { id: 5000, name: "$5000 to $10000" },
    { id: 10000, name: "$10000 to $20000" },
    { id: 20000, name: "$20000 to $50000" },
  ];

function toggleOption(options, id, checked) {
    return options.map((option) =>
      option.id === id ? { ...option, checked } : { ...option, checked: false }
    );
  }

export function Budget() {
    const [checkedList, setCheckedList] = useState(options);
    const [select, setSelect]= useState("");
    const dispatch = useDispatch();
    const imgkey = useSelector(state => state.image);
    const changeList = (id, checked) => {
        setCheckedList((checkedList) => toggleOption(checkedList, id, checked));
        if (checked){
            setSelect(id);
        }
      };
    const navigate = useNavigate();
    const next = () => {  
        if(select)  
            navigate("/space");
            const value = `${select}`;
            dispatch(budgetselect(value));
            console.log('budget', imgkey);

    }
    console.log(select)
 
    return (
        <div className="flex flex-col items-center relative mt-16">
            <div className="flex flex-col relative items-center">
                <p className="text-[24px] font-bold text-center">What is your budget limitation?</p>
                <p className="text-[15px] font-normal text-center">Hint: you can enter an estimation</p>
            </div>
            <div className="relative flex justify-center flex-col items-center mt-40">
                    <form>
                        <div className="gap-16 grid grid-cols-2 ">
                            {checkedList.map(({ id, name, checked }) => (
                                <label key={id} className="flex flex-row gap-4">
                                    <input
                                        type="radio"
                                        name="options"
                                        value={id}
                                        checked={checked}
                                        onChange={(e) => changeList(id, e.target.checked)}
                                                                               
                                    />
                                    <p className="text-base font-bold"> {name} </p> 
                                </label>
                            ))}
                        </div>
                    </form>
            </div>
            <div className="w-full flex justify-between p-5">
                <Link to = "/colorpage_10">
                    <ImArrowLeft size="40"/>                          
                </Link>

                <button onClick={next}>
                    <ImArrowRight size="40"/>   
                </button>
            </div>
        </div>
    );
};
export default Budget;