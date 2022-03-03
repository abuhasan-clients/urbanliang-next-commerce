import type { NextPage } from 'next';

const AuroraHome: NextPage = () => {
    return (
        <>
            <h1 className=" mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl">BESTSELLERS</h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 ">
                <div className="bestSellerBigCard">
                    {/* <!-- card with image --> */}
                    <div className="max-w-lg  overflow-hidden mb-5">
                        <img
                            className="w-full"
                            src="https://femina.wwmindia.com/content/2021/jul/dress-091627300860.jpg"
                            alt="Sunset in the mountains"
                        />
                        <div className="px-0 py-4 bigCard">
                            <p className="text-gray-700 text-base">CLOTH</p>
                            <div className="font-bold text-xl ">RIBBED BUTTON BEST</div>
                            <p className="country-name">United kingdom</p>
                            <p className="Price">$60</p>

                            <span className=" reamaining  text-sm font-semibold text-gray-700 ">Reamaining: 07</span>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 px-4 ">
                        <div className="max-w-xs rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src="https://femina.wwmindia.com/content/2021/jul/dress-091627300860.jpg"
                                alt="Sunset in the mountains"
                            />
                            <div className=" py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                                    perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2"></div>
                        </div>
                        {/*  */}
                        <div className="max-w-xs rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src="https://femina.wwmindia.com/content/2021/jul/dress-091627300860.jpg"
                                alt="Sunset in the mountains"
                            />
                            <div className=" py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                                    perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2"></div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default AuroraHome;
