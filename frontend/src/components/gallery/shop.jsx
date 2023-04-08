import React from "react";
import { shops_data } from "@/data/designe-data";
import { DesigneCard } from "@/widgets/cards";
export function Shop(){
    return(
        <div>
            <div className="grid grid-cols-3 gap-3 overflow-x-auto">
                {shops_data.map((item)=>(
                    < DesigneCard
                    img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}
export default Shop;