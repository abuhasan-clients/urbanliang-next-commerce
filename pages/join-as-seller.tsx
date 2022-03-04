import type { NextPage } from 'next';
import { AiFillEye } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaEquals, FaRegHeart } from 'react-icons/fa';
import { HiOutlineShare } from 'react-icons/hi';
import { MdOutlineMoneyOff } from 'react-icons/md';
import { RiStore2Line } from 'react-icons/ri';
import SignupMail from '../components/Pagescompo/Home/SignupMail';
// import { FaRegHeart } from 'react-icons/fa';
// import { FaRegHeart } from 'react-icons/fa';
import styles from '../styles/themes/JoinAsSeller.module.scss';

const JoinAsSeller: NextPage = () => {
    return (
        <>
            {/* <Banner></Banner>  */}

            <h1 className="mt-8   text-5xl tracking-tight text-gray  flex items-center justify-center">WHAT IS LOVIE AURORA?</h1>
            <p className=" mt-5   text-xl flex items-center justify-center">
                LOVIE AURORA is a multivendor eCommerce marketplace for creators all over the world
            </p>
            <p className="mt-5   text-md text-gray flex items-center justify-center" id={styles.joinAsSeller}>
                We It is a long established fact that a reader will be distracted by the readable content of a page when a reader will be
                distracted by.
            </p>
            <p className="text-md text-gray flex items-center justify-center" id={styles.joinAsSeller}>
                is a multivendor eCommerce marketplace for creators all over the world is a multivendor eCommerce marketplace creators
                eCommerce
            </p>
            <p className="text-md text-gray flex items-center justify-center" id={styles.joinAsSeller}>
                marketplace for creators all over the world is a multivendor eCommerce marketplace creators
            </p>
            <p className="mt-8   text-md text-gray flex items-center justify-center" id={styles.joinAsSeller}>
                We It is a long established fact that a reader will be distracted by the readable content of a page when a reader will be
                distracted by.
            </p>
            <p className="text-md text-gray flex items-center justify-center " id={styles.joinAsSeller}>
                is a multivendor eCommerce marketplace for creators all over the world is a multivendor eCommerce marketplace creators
                eCommerce
            </p>
            <p className="text-md text-gray flex items-center justify-center" id={styles.joinAsSeller}>
                when a reader will be distracted by.
            </p>
            <h1 className="mt-8   text-4xl tracking-tight text-gray  flex items-center justify-center">FEATURES</h1>

            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    {/* <!-- Row --> */}
                    <div className="grid grid-cols-1  mt-4 sm:grid-cols-2">
                        <div className="w-full lg:w-1/2 mx-auto ">
                            <div className="px-8 mb-4 text-center   ">
                                <h3 className="pt-4 mb-2 text-2xl flex items-center justify-center ">
                                    <RiStore2Line id={styles.storeIcon} />
                                </h3>
                                <p className="text-sm text-gray-700">Each creator can curate their own</p>
                                <span className="text-sm text-gray-700">Independent store appeacence</span>
                            </div>
                        </div>
                        {/* <!-- Col --> */}
                        <div className="w-full lg:w-1/2 mx-auto ">
                            <div className="px-8 mb-4 text-center   ">
                                <h3 className="pt-4 mb-2 text-2xl flex items-center justify-center  ">
                                    <HiOutlineShare id={styles.storeIcon} />
                                </h3>
                                <p className="mb-4 text-sm text-gray-700 items-center justify-center">
                                    Encourage the creators to build their connection with the followers and customers
                                </p>
                            </div>
                        </div>
                        {/* col-2 end */}

                        <div className="w-full lg:w-1/2 mx-auto ">
                            <div className="px-8 mb-4 text-center   ">
                                <h3 className="pt-4 mb-2 text-2xl flex items-center justify-center ">
                                    <BsFillPeopleFill id={styles.storeIcon} />
                                </h3>
                                <p className="text-sm text-gray-700">Each creator can curate their own</p>
                                <span className="text-sm text-gray-700">Independent store appeacence</span>
                            </div>
                        </div>
                        {/* <!-- Col --> */}
                        <div className="w-full lg:w-1/2 mx-auto ">
                            <div className="px-8 mb-4 text-center   ">
                                <h3 className="pt-4 mb-2 text-2xl flex items-center justify-center  ">
                                    <FaEquals id={styles.storeIcon} />
                                </h3>
                                <p className="mb-4 text-sm text-gray-700 items-center justify-center">
                                    Encourage the creators to build their connection with the followers and customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="mt-8 mb-5   text-5xl tracking-tight text-gray  flex items-center justify-center">
                    HASSLE FREE OPERATION METHODS{' '}
                </h1>
                <p className="mt-2     text-center   '" id={styles.hassleText}>
                    LOVIE AURORA has theree operation choices for creation
                </p>
                <p className=" mb-5    text-center   '" id={styles.hassleText}>
                    Each operation mode has their own advantages hepls creators scale their business at the most.
                </p>
                {/* another section start */}

                <div className="mt-4 lg:mt-0 lg:w-3/4 mx-auto">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6   ">
                        <div className="bg-white p-5 rounded-md relative h-full w-full text-center ">
                            <h1 className={styles.Number}>1</h1>
                            <div className="flex align-item-center justify-content-center">
                                <p id={styles.numberBorder} className="text-center"></p>
                            </div>
                            <p className="text-lg mt-5">Self operation and managemant</p>
                            <p className="mt-8" id={styles.NumberExp}>
                                ***It is a long established fact that a reader will be distracted by the content of a page***
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-md relative h-full w-full text-center ">
                            <h1 className={styles.Number}>2</h1>
                            <div className="flex align-item-center justify-content-center">
                                <p id={styles.numberBorder} className="text-center"></p>
                            </div>
                            <p className="text-lg mt-5">LOVIE AURORA Operation</p>
                            <p className="mt-8" id={styles.NumberExp}>
                                ***It is a long established fact that a reader will be distracted by the content of a page***
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-md relative h-full w-full text-center ">
                            <h1 className={styles.Number}>3</h1>
                            <div className="flex align-item-center justify-content-center">
                                <p id={styles.numberBorder} className="text-center"></p>
                            </div>
                            <p className="text-lg mt-5"> Wholesale by LOVIE AURORA </p>
                            <p className="mt-8" id={styles.NumberExp}>
                                ***It is a long established fact that a reader will be distracted by the content of a page***
                            </p>
                        </div>
                    </div>
                </div>

                {/* new sec start */}
                <div className="grid grid-cols-1  mt-4 sm:grid-cols-2 ">
                    <div className="w-full lg:w-1/2 mx-auto   flex items-center justify-center">
                        <div className="px-8 mb-4 text-center   ">
                            <h3 className="pt-4 mb-2 text-2xl flex items-center justify-center ">
                                <AiFillEye id={styles.storeIcon} />
                            </h3>
                            <p className="text-lg mt-8 text-gray-700 mb-8" id={styles.brandText}>
                                {' '}
                                BRAND AWARENESS
                            </p>

                            <p className="text-lg text-gray-700 mt-8">
                                Lovie aurora encourages creators to set up own to sell on our platform.
                            </p>
                            <p className="text-sm text-gray-700 mt-8 ">
                                we assist to develop their brand awareness both in and off our website, and if your brands work excellently,
                                Lovie aurora can help you develop it into a well-known name.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 mx-auto  flex items-center justify-center">
                        <div className="px-8 mb-4 text-center   ">
                            <h3 className="pt-4 mb-2 text-2xl flex items-center justify-center ">
                                <MdOutlineMoneyOff id={styles.storeIcon} />
                            </h3>
                            <p className="text-sm  mb-8 mt-8" id={styles.brandText}>
                                NO UPFRONT FEES
                            </p>
                            <p className="text-md">
                                Lovie aurora is commited to offering our service for zero financial investment for creators to start selling
                                with us.
                            </p>
                            <p className="text-sm text-gray-700 mt-8 ">
                                compared to many fees and various money metters you have to deal with, Lovie Aurora offers an All-in
                                comissoin fees.
                            </p>
                        </div>
                    </div>
                </div>
                <h3 className="pt-4 mb-2 text-2xl text-center   flex items-center justify-center ">
                    <FaRegHeart id={styles.storeIcon} />
                </h3>
                <h1 className="mt-8    text-5xl tracking-tight text-gray  flex items-center justify-center">READY TO START </h1>
                <h1 className=" mb-5   text-5xl tracking-tight text-gray  flex items-center justify-center">SELLING ON LOVIE AURORA </h1>
                <div className="mx-auto  mb-8  flex items-center ...">
                    <button id={styles.applyBtn} className="place-item-center ">
                        APPLY TODAY
                    </button>
                </div>
            </div>
            <SignupMail />
        </>
    );
};
export default JoinAsSeller;
