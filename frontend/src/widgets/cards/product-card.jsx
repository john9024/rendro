import {AiFillStar} from "react-icons/ai"
import product01 from "../../../public/img/maindesignpack.jpg"
export function Product_card({picture}) {
return (
        <div>
            <div className="flex flex-col w-full items-center">
                <img src={product01} alt="..."/>
                <p className="text-[10px] opacity-50">+3 colors/patterns</p>
            </div>
            <div>
                <p className="text-[10px] text-gray-700">sponsored</p>
                <p className="text-[10px]">christopher Knight Home 233716 Santa Rosa Brown Tufted Leather Storage Ottoman Bench</p>
                <div className="flex">
                    < AiFillStar  size={15} color="green"/>
                    < AiFillStar  size={15} color="green"/>
                    < AiFillStar  size={15} color="green"/>
                    < AiFillStar  size={15} color="green"/>
                    < AiFillStar  size={15} color="green"/>
                    <p className="text-[10px] ">15</p>
                </div>
                <p className="text-[10px] text-indigo-900">-5%$ 199 99</p>
                <p className="text-[10px]">save $15.00 with coupon</p>
                <p className="text-[10px]">prime</p>
                <p className="text-[10px]">FREE delivery Thu, Feb 9</p>
            </div>
        </div>
    )
}

export default Product_card;