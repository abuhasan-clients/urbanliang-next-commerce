import type { NextPage } from 'next';
import SignupMail from '../../../components/Pagescompo/Home/SignupMail';
import Banner from '../../../components/Reuseable/Banner';

const BlogHome: NextPage = () => {
    return (
        <>
            <Banner
                layer
                defaultInfo
                images="https://i.ibb.co/zQPHsjq/addams-polar-bear-rug-1.jpg"
                title="OUR BEST, CHOSEN BY YOU"
                icon="fa-solid fa-heart-pulse"
            />
            <h1 className="text-center  text-5xl mt-5 mb-8">POPULAR</h1>
            <div className="lg:w-5/6 xl:w-5/6 md:w-full sm:w-full flex justify-center mx-auto ">
                <div className="grid sm:grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6   ">
                    <div className="focus:outline-none cardAll  blogCard" aria-label="card 2" id=" ">
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
                    <div className="focus:outline-none cardAll  blogCard" aria-label="card 2" id=" ">
                        <img
                            role="img"
                            aria-label="gaming"
                            className="focus:outline-none focus:outline-none imgSize"
                            src="https://www.who.int/images/default-source/departments/essential-medicines/int-pharmacopeia/717.jpg?sfvrsn=eea7d75a_15"
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

                    <div className="focus:outline-none cardAll  blogCard" aria-label="card 2" id=" ">
                        <img
                            role="img"
                            aria-label="gaming"
                            className="focus:outline-none focus:outline-none imgSize"
                            src="https://www.totalphase.com/media/blog/2017/04/brain_cog.jpg"
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
                </div>
            </div>
            {/* creator blog post */}

            <h1 className="text-center  text-5xl mt-12 mb-8">CREATORS BLOG POST</h1>
            <div className="lg:w-5/6 xl:w-5/6 md:w-full sm:w-full flex justify-center mx-auto ">
                <div className="grid sm:grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 pb-6   ">
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
                            src="https://www.totalphase.com/media/blog/2017/04/brain_cog.jpg"
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
                            src="https://www.perforce.com/sites/default/files/styles/social_preview_image/public/image/2020-10/image-blog-vr-developement.jpg?itok=K1XfpTJz"
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
                </div>
                {/* creator blog post */}
            </div>
            <SignupMail />
        </>
    );
};
export default BlogHome;
