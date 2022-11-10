import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddReview = ({ service, setRefresh, refresh }) => {
    const { user } = useContext(AuthContext);
    const { _id, title } = service;
    // console.log(service);

    const handleAddReview = e => {
        e.preventDefault();
        const form = e.target;
        const userReview = form.review.value;

        const review = {
            serviceId: _id,
            serviceName: title,
            userName: user.displayName,
            email: user.email,
            userPhoto: user.photoURL,
            review: userReview
        }
        console.log(review);

        // send the data using POST Method
        fetch('http://localhost:4000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.status) {
                    form.reset();
                    toast.success(data.message);
                    setRefresh(!refresh);
                } else {
                    toast.error(data.error)
                }
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="p-4 mx-auto">
            <h2 className="text-2xl mb-5 font-semibold text-gray-700">Leave A Review as</h2>
            <div className="flex items-center gap-3">
                <img src={user?.photoURL} alt="" className="self-center flex-shrink-0 w-16 h-16 border rounded-full md:justify-self-start" />
                <h4 className="text-lg font-semibold text-center md:text-left">{user?.displayName}</h4>
            </div>
            <form onSubmit={handleAddReview}>
                <div className='mt-8'>

                    <div>
                        <label className="text-gray-700 " htmlFor="review">Write your review</label>
                        <textarea name='review' id="review" type="textarea" className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring h-32" rows="5"
                            placeholder="Write your review here" required />
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">LEAVE A REVIEW</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;