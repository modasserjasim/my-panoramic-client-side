import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddReview from '../AddReview/AddReview';
import Review from '../Review/Review';
import { RiExternalLinkFill } from "react-icons/ri";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Login from '../../Login/Login';

const Reviews = ({ service }) => {
    const [reviews, setReviews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:4000/reviews?serviceId=${service?._id}`)
            .then(res => res.json())
            .then(data => {
                console.log('received', data);
                setReviews(data.reviews)
            })
    }, [service?._id, refresh]);
    // console.log(reviews);
    return (
        <div className="pt-5 pb-12 bg-gray-50 rounded-t-10xl overflow-hidden">
            <div className="px-4 mx-auto max-w-5xl">
                <h1 className="mt-8 mb-5  text-3xl md:text-6xl font-heading font-medium leading-tight">Recent reviews</h1>

                <div className="flex flex-wrap -mx-2 mb-14 mt-12">
                    <div className="w-full px-2 mb-4 xl:mb-0">
                        <div className="h-full py-6 px-4 sm:py-8 sm:px-8 bg-white rounded-3xl">
                            {
                                user?.uid ? <AddReview
                                    service={service}
                                    setRefresh={setRefresh}
                                    refresh={refresh}> </AddReview> : <h2 className='text-xl font-semibold'>Please login to leave a review :
                                    <button onClick={() => setShowModal(!showModal)} className="text-green-700 font-medium inline-flex space-x-1 items-center hover:underline"> <span> click here to Login</span><span><RiExternalLinkFill /></span></button>

                                </h2>
                            }
                            {/* Login Modal on the service details page  */}
                            {showModal ? <>
                                <Login></Login>
                            </>

                                : null
                            }

                        </div>
                    </div>

                </div>

                {
                    reviews.length > 0 ? <>
                        <p className="inline-block mb-8 text-xl md:text-2xl font-heading font-medium underline hover:text-green-700">{reviews.length} reviews found</p>
                        {reviews.map(review => <Review key={review._id} rev={review}></Review>)}
                    </> : <h3 className='text-2xl'>There are no reviews yet. Be the first one to write review.</h3>

                }

            </div>
        </div>
    );
};

export default Reviews;