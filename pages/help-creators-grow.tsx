import type { NextPage } from 'next';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaProductHunt } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { HiOutlineShare } from 'react-icons/hi';
import SignupMail from '../components/Pagescompo/Home/SignupMail';
// import { FaRegHeart } from 'react-icons/fa';
// import { FaRegHeart } from 'react-icons/fa';
import styles from '../styles/themes/JoinAsSeller.module.scss';
import Contact from './contact';

const HelpCreatorsGrow: NextPage = () => {
    return (
        <>
            {/* <Banner></Banner>  */}

            <h1 className="mt-8   text-4xl tracking-tight text-gray  flex items-center justify-center">SUPPORT CREATORS TO GROW</h1>
            <p className="  text-md flex items-center justify-center mt-5 text-gray">
                LOVIE AURORA: a hassle-free shoping platform for both customers and creators
            </p>

            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    {/* <!-- Row --> */}
                    <div className="grid grid-cols-1  mt-4 sm:grid-cols-2">
                        <div className="w-full lg:w-1/2 mx-auto ">
                            <div className="px-0 mb-8   text-center   ">
                                <h3 className="pt-4 mb-2 text-2xl flex items-center justify-center ">
                                    <GiWallet id={styles.storeIcon} />
                                </h3>

                                <p className="mb-4 text-md text-gray-700 items-center justify-center " id={styles.rr}>
                                    Reliable income stream
                                </p>
                            </div>
                        </div>
                        {/* <!-- Col --> */}
                        <div className="w-full lg:w-1/2 mx-auto ">
                            <div className=" mb-8 text-center   ">
                                <h3 className="pt-4 mb-2 text-2xl flex items-center justify-center  ">
                                    <HiOutlineShare id={styles.storeIcon} />
                                </h3>
                                <p className="mb-4 text-md text-gray-700 items-center justify-center" id={styles.rr}>
                                    All-in-one selling platform
                                </p>
                            </div>
                        </div>
                        {/* col-2 end */}

                        <div className="w-full lg:w-1/2 mx-auto ">
                            <div className=" mb-8 text-center   ">
                                <h3 className="pt-4 mb-2 text-2xl flex items-center justify-center ">
                                    <BsFillPeopleFill id={styles.storeIcon} />
                                </h3>
                                <p className="text-sm text-gray-700" id={styles.rr}>
                                    Increase brand awareness
                                </p>
                            </div>
                        </div>
                        {/* <!-- Col --> */}
                        <div className="w-full lg:w-1/2 mx-auto ">
                            <div className=" mb-8 text-center   ">
                                <h3 className="pt-4 mb-2 text-2xl flex items-center justify-center  ">
                                    <FaProductHunt id={styles.storeIcon} />
                                </h3>
                                <p className="mb-4 text-sm text-gray-700 items-center justify-center">Develop your product</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* new sec start */}

                <h1 className="mt-8  mb-8  text-5xl tracking-tight text-gray  flex items-center justify-center">GET IN TOUCH</h1>
                {/* contact us page */}
                <Contact></Contact>
            </div>
            <SignupMail />
        </>
    );
};
export default HelpCreatorsGrow;
