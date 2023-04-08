import React from "react";
import { profiles_data } from "@/data/designe-data";
import { DesigneCard } from "@/widgets/cards";
export function Profiles(){
    return(
        <div>
            <div className="grid grid-cols-3 gap-3 overflow-x-auto">
                {profiles_data.map((item)=>(
                    < DesigneCard
                    img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}
export default Profiles;