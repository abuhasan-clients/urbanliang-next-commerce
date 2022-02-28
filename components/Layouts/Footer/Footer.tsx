import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

const Footer = () => {
    return (
        <div className="container mx-auto px-3 py-10">
            <footer className="bg-gray-100 text-center lg:text-left">
                <div className="container p-6">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2">
                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800 text-xl mb-10">LOVIE AURORA</h5>

                            <ul className="list-none mb-0 mb-8 space-y-3 ">
                                <li>
                                    <a href="#!" className="  text-gray-600 hover:text-gray-800">
                                        about us
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-gray-600 hover:text-gray-800">
                                        career
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-gray-600 hover:text-gray-800">
                                        the blog
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800 mb-10  text-xl">CUSTOMER SERVICE</h5>

                            <ul className="list-none mb-0 space-y-3">
                                <li>
                                    <a href="#!" className="text-gray-600 hover:text-gray-800">
                                        refund/return/exchange
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-gray-600 hover:text-gray-800">
                                        shipping & delivery
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-gray-600 hover:text-gray-800">
                                        helps & FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800 mb-10 text-xl">OPPORUNITIES</h5>

                            <ul className="list-none mb-0 space-y-3">
                                <li>
                                    <a href="#!" className="text-gray-600 hover:text-gray-800">
                                        sell on lovie aurora
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-gray-600 hover:text-gray-800">
                                        affiliate program
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-gray-600 hover:text-gray-800">
                                        help creator grow
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800 mb-10 text-xl">CONTACT US</h5>

                            <ul className="list-none mb-0 space-y-3">
                                <li>
                                    <a href="#!" className="text-gray-600 hover:text-gray-800">
                                        asab@bystie.com
                                    </a>
                                </li>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div>
                                        {' '}
                                        <ImInstagram />
                                    </div>

                                    <AiOutlineTwitter />
                                    <FaFacebookF />
                                    <FaTiktok />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <div className=" flex flex-col flex-wrap md:items-center lg:items-start md:flex-row md:flex-nowrap ">
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                    <span className="footer_logo">
                        LOVIE AURORA <i className="fa-solid fa-heart-pulse" />
                    </span>
                    <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at sequi cum, impedit fuga in placeat illo eum
                        minima possimus est perferendis distinctio explicabo eos natus consequuntur blanditiis odio optio?
                    </p>
                </div>
                <div className="justify-between w-full text-center lg:flex">
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="footer_title">Useful Links</h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Home</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Blogs</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="footer_title">Useful Links</h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Home</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Blogs</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="footer_title">Useful Links</h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Home</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Blogs</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <div className="flex justify-center">
                <p className="text-base text-gray-400">All rights reserved by @ company 2021</p>
            </div>
        </div>
    );
};

export default Footer;
