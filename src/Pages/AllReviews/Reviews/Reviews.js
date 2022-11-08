import React from 'react';
import AddReview from '../AddReview/AddReview';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        <div className="pt-5 pb-12 bg-gray-50 rounded-t-10xl overflow-hidden">
            <div className="px-4 mx-auto max-w-5xl">
                <h1 className="mt-8 mb-5  text-5xl md:text-6xl font-heading font-medium leading-tight">Recent reviews</h1>

                <p className="inline-block mb-8 text-3xl font-heading font-medium underline hover:text-darkBlueGray-700">1,218 reviews</p>
                <Review></Review>
                <div className="flex flex-wrap -mx-2 mb-14 mt-12">
                    <div className="w-full px-2 mb-4 xl:mb-0">
                        <div className="h-full py-12 px-8 bg-white rounded-3xl">
                            <h2 className='text-xl'>Please login to leave a review</h2>
                            <AddReview></AddReview>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;