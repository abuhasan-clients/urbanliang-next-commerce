import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

const Footer = () => {
    return (
        <div className="container mx-auto px-3 py-10">
            <footer className="text-center lg:text-left">
                <div className="container p-6">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2">
                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-xl mb-10">LOVIE AURORA</h5>

                            <ul className="list-none mb-0 mb-8 space-y-3 ">
                                <li>
                                    <a href="#!" className="">
                                        about us
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="">
                                        career
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="">
                                        the blog
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 mb-10  text-xl">CUSTOMER SERVICE</h5>

                            <ul className="list-none mb-0 space-y-3">
                                <li>
                                    <a href="#!" className="">
                                        refund/return/exchange
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="">
                                        shipping & delivery
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="">
                                        helps & FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 tmb-10 text-xl">OPPORUNITIES</h5>

                            <ul className="list-none mb-0 space-y-3">
                                <li>
                                    <a href="#!" className="">
                                        sell on lovie aurora
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="">
                                        affiliate program
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="">
                                        help creator grow
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 mb-10 text-xl">CONTACT US</h5>

                            <ul className="list-none mb-0 space-y-3">
                                <li>
                                    <a href="#!" className="">
                                        asab@bystie.com
                                    </a>
                                </li>
                                <div className="footerIconDiv">
                                    {' '}
                                    <ImInstagram className="footerIcon insta" />
                                    <AiOutlineTwitter className="footerIcon" />
                                    <FaFacebookF className="footerIcon" />
                                    <FaTiktok className="footerIcon" />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="flex justify-center">
                <p className="text-base text-gray-400">All rights reserved by @ company 2021</p>
            </div>
        </div>
    );
};

export default Footer;
