import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const Stars = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (ele, index) => {
        let number = index + 0.5;

        return (
            <span key={index} className="text-yellow-500">
                {stars >= index + 1 ? <FaStar /> : stars >= number ? <FaStarHalfAlt /> : <FaRegStar className="text-gray-300" />}
            </span>
        );
    });

    return (
        <div className='flex items-center gap-1'>
            {ratingStar}
            <p>{reviews} customer reviews</p>
        </div>
    );
};
