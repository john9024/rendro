import React from "react";
import { explore_data } from "@/data/designe-data";
import { DesigneCard } from "@/widgets/cards";
export function Explore(){
    return(
        <div>
            <div className="grid grid-cols-3 gap-3 overflow-x-auto">
                {explore_data.map((item)=>(
                    < DesigneCard
                    img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}
export default Explore;