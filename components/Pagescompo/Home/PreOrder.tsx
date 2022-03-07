import type { NextPage } from 'next';
import { AiFillStar } from 'react-icons/ai';
const PreOrder: NextPage = () => {
    return (
        <>
            <p className="text-5xl mb-12 ml-3 mt-12">PRE-ORDER</p>
            <div className="grid sm:grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 pb-6 px-4   ">
                <div className="focus:outline-none cardAll  creatorBlogCard" aria-label="card 2" id=" ">
                    <img
                        role="img"
                        aria-label="gaming"
                        className="focus:outline-none focus:outline-none imgSize"
                        src="https://download-oem-software.com/wp-content/uploads/2021/12/Technology.jpg"
                        alt="notes"
                    />

                    <div className="bg-white  py-3  ">
                        <p className="text-gray text-xl mt-3">Title Of The Blog Post</p>
                        <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider"></h1>
                        <small>creator</small> <br />
                        <small className="">United Kingdom</small> <br />
                        <small className="">12/01/2021</small>
                    </div>
                </div>
                <div className="focus:outline-none cardAll  creatorBlogCard" aria-label="card 2" id=" ">
                    <img
                        role="img"
                        aria-label="gaming"
                        className="focus:outline-none focus:outline-none imgSize"
                        src="https://www.who.int/images/default-source/departments/essential-medicines/int-pharmacopeia/717.jpg?sfvrsn=eea7d75a_15"
                        alt="notes"
                    />

                    <div className="bg-white  py-3  ">
                        <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                            <AiFillStar className="starReview" />
                            <AiFillStar className="starReview" />
                            <AiFillStar className="starReview" />
                            <AiFillStar className="starReview" />
                        </h1>
                        <p className="text-gray text-xl mt-3">Ribbed button Best</p>
                        <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider"></h1>
                        <small>creator</small> <br />
                        <small className="">United Kingdom</small> <br />
                        <small className="">12/01/2021</small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreOrder;
