import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { toast } from 'react-toastify';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:4000/user-reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.status) {
                    setReviews(data.reviews);
                } else {
                    toast.error(data.error);
                }

            })
            .catch(err => toast.error(err.message))
    }, [user?.email]);
    console.log(reviews);
    return (
        <div className='max-w-5xl mx-auto my-16'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl text-center font-bold'>My Reviews</h1>

                <div className="flex w-full md:w-5/12 flex-col justify-center items-center bg-gray-50 mx-auto  py-4 rounded-lg my-5 ">
                    <img className="w-24 h-24 border rounded-full" src={user?.photoURL} alt="" />
                    <h4 className="text-xl font-heading font-medium ">{user?.displayName}</h4>
                </div>
            </div>
            {
                reviews.length > 0 ?
                    reviews.map(review =>
                        <div key={review._id} className="mb-8 shadow-lg rounded-xl overflow-hidden m-2">
                            <div className="py-3 px-4 md:px-16 bg-gray-300 bg-opacity-40">
                                <div className="flex items-center justify-between gap-5">
                                    <div>
                                        {/* <img className="mr-6 self-center w-12 h-12 border rounded-full" src={user?.photoURL} alt="" /> */}
                                        <h4 className="text-xl font-heading font-medium">Service: {review?.serviceName}</h4>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold'> Action</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 overflow-hidden md:px-16 pt-8 bg-white">
                                <div className="flex justify-between gap-5">
                                    <div className="mb-6 md:mb-0">
                                        <p className="mb-8 text-darkBlueGray-400 leading-loose">{review?.review}</p>

                                    </div>
                                    <div className='flex flex-col md:flex-row text-2xl md:text-3xl gap-4'>
                                        <FiEdit />
                                        <FiTrash2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <h3 className='text-3xl md:py-28 text-center'>No reviews were added!</h3>

            }
        </div>
    );
};

export default MyReviews;