import React from 'react';
import { RiStarSFill } from "react-icons/ri";

const Reviews = () => {
    return (
        <div className="py-5 bg-gray-100 rounded-t-10xl overflow-hidden">
            <div className="px-4 mx-auto max-w-5xl">
                <h1 className="mt-8 mb-14  text-5xl md:text-6xl font-heading font-medium leading-tight">Recent reviews</h1>
                <div className="flex flex-wrap -mx-2 mb-14">
                    <div className="w-full px-2 mb-4 xl:mb-0">
                        <div className="flex items-center h-full py-12 px-8 bg-white rounded-3xl">

                        </div>
                    </div>

                </div>
                <p className="inline-block mb-14 text-3xl font-heading font-medium underline hover:text-darkBlueGray-700">1,218 reviews</p>
                <div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
                    <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                        <div className="flex flex-wrap items-center">
                            <img className="mr-6" src="uinel-assets/images/ecommerce-reviews/user.png" alt="" />
                            <h4 className="w-full md:w-auto text-xl font-heading font-medium">Faustina H. Fawn</h4>
                            <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                            <span className="mr-4 text-xl font-heading font-medium">5.0</span>
                            <div className="inline-flex">

                            </div>
                        </div>
                    </div>
                    <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-2/3 mb-6 md:mb-0">
                                <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.</p>

                            </div>
                            <div className="w-full md:w-1/3 text-right">
                                <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;