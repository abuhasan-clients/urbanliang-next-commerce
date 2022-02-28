const Footer = () => {
    return (
        <div className="container mx-auto px-3 py-10">
            <div className=" flex flex-col flex-wrap md:items-center lg:items-start md:flex-row md:flex-nowrap ">
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
            </div>
            <div className="flex justify-center">
                <p className="text-base text-gray-400">All rights reserved by @ company 2021</p>
            </div>
        </div>
    );
};

export default Footer;
