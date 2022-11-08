import React from 'react';
import { RiStarSFill } from "react-icons/ri";

const Review = () => {
    return (
        <div className="mb-5 shadow-lg rounded-md overflow-hidden">
            <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-gray-300 bg-opacity-40">
                <div className="flex flex-wrap items-center">
                    <img className="mr-6" src="uinel-assets/images/ecommerce-reviews/user.png" alt="" />
                    <h4 className="w-full md:w-auto text-xl font-heading font-medium">Faustina H. Fawn</h4>
                    <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                    <span className="mr-4 text-xl font-heading font-medium">5.0</span>
                    <div className="inline-flex text-yellow-400 text-2xl">
                        <RiStarSFill /> <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill />
                    </div>
                </div>
            </div>
            <div className="px-4 overflow-hidden md:px-16 pt-8 bg-white">
                <div className="flex flex-wrap">
                    <div className="w-full mb-6 md:mb-0">
                        <p className="mb-8 text-darkBlueGray-400 leading-loose">I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;