import type { NextPage } from 'next';
import { AiFillStar } from 'react-icons/ai';

const PreOrder: NextPage = () => {
    return (
        <>
            <p className="text-5xl mb-12 ml-3 mt-12">PRE-ORDER</p>
            <div className="grid sm:grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pb-6 px-4   ">
                <div className="focus:outline-none cardAll  creatorBlogCard" aria-label="card 2" id=" ">
                    <div className="overflow-hidden imgSize ">
                        <img
                            role="img"
                            aria-label="gaming"
                            className="focus:outline-none focus:outline-none "
                            src="https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05"
                            alt="notes"
                        />
                    </div>

                    <div className="  py-3 grid grid-cols-2 ">
                        <div className="">
                            <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                <AiFillStar className="starReview" />
                                <AiFillStar className="starReview" />
                                <AiFillStar className="starReview" />
                                <AiFillStar className="starReview" />
                            </h1>
                            <p className="text-sm text-gray-700 mt-5">CLOTH</p>
                            <p className="text-gray text-xl">Title Of The Blog Post</p>
                            <p>$60</p>
                        </div>
                        <div className="text-end relative">
                            <button className="wishListBtn absolute top-0 right-0 mt-2 ">Share to join Wishlist</button>
                            <p className="absolute top-12 right-12 mt-8">On Wishlist:</p>
                            <p className="absolute top-12 right-0 mt-8 text-red-700"> 124</p>
                        </div>
                    </div>
                </div>
                <div className="focus:outline-none cardAll  creatorBlogCard" aria-label="card 2" id=" ">
                    <div className="overflow-hidden imgSize ">
                        <img
                            role="img"
                            aria-label="gaming"
                            className="focus:outline-none focus:outline-none "
                            src="https://i.pinimg.com/736x/f5/ce/20/f5ce20e9215e15d43aa1a006aedf435a.jpg"
                            alt="notes"
                        />
                    </div>

                    <div className="  py-3 grid grid-cols-2 ">
                        <div className="">
                            <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                <AiFillStar className="starReview" />
                                <AiFillStar className="starReview" />
                                <AiFillStar className="starReview" />
                                <AiFillStar className="starReview" />
                            </h1>
                            <p className="text-sm text-gray-700 mt-5">CLOTH</p>
                            <p className="text-gray text-xl">Title Of The Blog Post</p>
                            <p>$60</p>
                        </div>
                        <div className="text-end relative">
                            <button className="wishListBtn absolute top-0 right-0 mt-2 ">Share to join Wishlist</button>
                            <p className="absolute top-12 right-12 mt-8">On Wishlist:</p>
                            <p className="absolute top-12 right-0 mt-8 text-red-700"> 124</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreOrder;
