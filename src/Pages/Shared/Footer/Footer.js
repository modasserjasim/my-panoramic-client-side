import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-gray-100 pt-8 pb-6 ">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className=" flex mt-6 lg:mb-0 mb-6 text-2xl space-x-3 ">
                            <FaFacebookF className='hover:text-green-700 cursor-pointer' />
                            <FaTwitter className='hover:text-green-700 cursor-pointer' />
                            <FaLinkedinIn className='hover:text-green-700 cursor-pointer' />
                            <FaInstagram className='hover:text-green-700 cursor-pointer' />
                            <FaPinterestP className='hover:text-green-700 cursor-pointer' />

                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-md font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to='/' className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/services' className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Services</Link>
                                    </li>
                                    <li>
                                        <Link to='/add-service' className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Add Service</Link>
                                    </li>
                                    <li>
                                        <Link to='/blog' className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2022</span>  My Panorama by
                            <a href="https://modasserjasim.com" className="text-blueGray-500 hover:text-blueGray-800"> Modasser Jasim</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;