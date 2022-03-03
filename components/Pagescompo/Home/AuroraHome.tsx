import type { NextPage } from 'next';

const AuroraHome: NextPage = () => {
    return (
        <>
            <h1 className=" mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl">BESTSELLERS</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">
                <div className="bestSellerBigCard col-span-2">
                    {/* <!-- card with image --> */}
                    <div className="max-w-xl  overflow-hidden mb-5">
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
                {/* 1 item end */}

                <div className="max-w-md overflow-hidden ">
                    <img
                        className="w-full "
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

                {/*  */}
                <div className="max-w-md  overflow-hidden ">
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
                {/* item 2 end */}
            </div>
        </>
    );
};
export default AuroraHome;
