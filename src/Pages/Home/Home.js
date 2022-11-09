import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from '../AllServices/Service/Service';
import { MdMapsHomeWork, MdOutlinePhoneInTalk, MdOutlineForwardToInbox } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";

const Home = () => {
    const { homeServices } = useLoaderData();
    console.log(homeServices);
    return (
        <div>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://weddingdiary.com.bd/wp-content/uploads/2022/06/2-2-e1654947065838.jpg"
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Welcome to My Panorama
                        </p>
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            I shot happiness
                            <br className="hidden md:block" />
                            that will last {' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                a lifetime
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            Looking for a wedding photographer? We approach weddings in a documentary and artistic way, trying to tell the story of your day honestly and unobtrusively. Our images are warm, romantic, and intimate. We hope to give you images that make you feel, not just see.
                        </p>
                        <div className="flex items-center">
                            <Link
                                to='/login'
                                className="inline-flex bg-green-700 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                GET STARTED
                            </Link>
                            <Link
                                to='/services'
                                aria-label=""
                                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-50 py-16  text-center">
                <div className="px-6 max-w-7xl mx-auto">
                    <div className="max-w-xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800  lg:text-5xl">SERVICES</h2>
                        <h2 className="text-xl font-bold text-gray-800  lg:text-2xl">I JUST LOVE TO CAPTURE PEOPLE IN LOVE. </h2>
                        <p className="mt-6 text-gray-500 ">I love capturing memories. That look, that smile, those tears, that brief moment frozen in time. Real memories, real emotions.</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12'>
                        {
                            homeServices.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </div>
                    <div className='text-center mt-12'>
                        <Link
                            to='/services'
                            className="inline-flex bg-green-700 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Checkout All Services
                        </Link>
                    </div>
                </div>

            </div>
            {/* // features section  */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">The</span>
                        </span>{' '}
                        quick, brown fox jumps over a lazy dog
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
                            <p className="text-sm text-gray-900">
                                Sportacus andrew weatherall goose Refined gentlemen super mario
                                des lynam alpha trion zap rowsdower.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
                            <p className="text-sm text-gray-900">
                                Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">
                                Baseball ipsum dolor
                            </h6>
                            <p className="text-sm text-gray-900">
                                Bro ipsum dolor sit amet gaper backside single track, manny Bike
                                epic clipless. Schraeder drop gondy.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
                            <p className="text-sm text-gray-900">
                                A flower in my garden, a mystery in my panties. Heart attack never
                                stopped old Big Bear.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* //contact us section  */}
            <div className=' bg-green-700'>
                <div className="flex flex-col px-4 py-16 mx-auto max-w-7xl">
                    <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                        <div className="text-white lg:w-1/2 lg:mx-6">
                            <h1 className="text-3xl font-semibold capitalize lg:text-5xl">Get In Touch</h1>

                            <p className="max-w-xl mt-6">Ask us everything and we would love to hear from you</p>

                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">
                                    <MdMapsHomeWork />

                                    <span className="mx-2 text-white truncate w-72">
                                        128/2B, West Jabrabad, Mohammadpur, Dhaka-1207
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <MdOutlinePhoneInTalk />

                                    <span className="mx-2 text-white truncate w-72">(1753) 356-7401</span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <MdOutlineForwardToInbox />

                                    <span className="mx-2 text-white truncate w-72">info@mypanorama.com</span>
                                </p>
                            </div>

                            <div className="mt-6 md:mt-8">
                                <h3 className="text-gray-300 ">Follow us</h3>

                                <div className="flex mt-4 -mx-1.5 ">
                                    <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="/">
                                        <FaFacebookF />
                                    </a>

                                    <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="/">
                                        <FaTwitter />
                                    </a>

                                    <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="/">
                                        <FaLinkedinIn />
                                    </a>

                                    <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="/">
                                        <FaInstagram />
                                    </a>
                                    <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="/">
                                        <FaPinterestP />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-0 lg:w-1/2 lg:mx-4">
                            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl  lg:max-w-xl">

                                <form className="mt-6">
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm text-gray-600 ">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="w-full mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 ">Message</label>
                                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" placeholder="Message"></textarea>
                                    </div>

                                    <button className="w-full px-6 py-3 mt-6 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 text-xl">
                                        get in touch
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;