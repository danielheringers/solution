
import Image from "next/image";
import UpArrow from "public/UpRight.png";
import React from "react";

interface PercentCardProp{
    value: number;
    status: boolean;
}

const PercentCard: React.FC<PercentCardProp> = ({value, status}) => {
    return(
        <div className="flex flex-row items-center justify-around w-16 h-6 bg-lime-900 border rounded border-lime-800">
            <span className="text-xs text-lime-500">{`${value}%`}</span>
            <Image src={UpArrow} alt="up" width={15}/>
        </div>
    );
}

export default PercentCard;