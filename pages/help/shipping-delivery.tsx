import type { NextPage } from 'next';
import { BsBoxSeam } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
import styles from '../../styles/themes/JoinAsSeller.module.scss';

const ShippingDelivery: NextPage = () => {
    return (
        <>
            <h1 className="mt-8   lg:text-5xl sm:text-xl tracking-tight text-gray  flex items-center justify-center">
                ECO- FRIENDLY SHIPPING & DELIVERY
            </h1>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="mt-4 lg:mt-0 lg:w-3/4 mx-auto">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6   ">
                            <div className="bg-white p-5 rounded-md relative h-full w-full text-center ">
                                <h1 className={styles.Number}>1</h1>
                                <div className="flex align-item-center justify-content-center">
                                    <p id={styles.numberBorder} className="text-center"></p>
                                </div>
                                <p className="text-lg mt-5">We use non-plastic packing and stuffing</p>
                            </div>
                            <div className="bg-white p-5 rounded-md relative h-full w-full text-center ">
                                <h1 className={styles.Number}>2</h1>
                                <div className="flex align-item-center justify-content-center">
                                    <p id={styles.numberBorder} className="text-center"></p>
                                </div>
                                <p className="text-lg mt-5">We optimize return /Exchange policy to double down the carbon footprint</p>
                            </div>
                            <div className="bg-white p-5 rounded-md relative h-full w-full text-center ">
                                <h1 className={styles.Number}>3</h1>
                                <div className="flex align-item-center justify-content-center">
                                    <p id={styles.numberBorder} className="text-center"></p>
                                </div>
                                <p className="text-lg mt-5">We are always investing new technologies to reduce pollution.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:w-1/2 mx-auto">
                    <h1 className="mt-8   lg:text-5xl sm:text-xl tracking-tight text-gray  flex items-center justify-center">
                        <FaShippingFast className={styles.shipping} />
                    </h1>
                    <h1 className="mt-5  lg:text-3xl sm:text-xl tracking-tight text-gray  flex items-center justify-center">SHIPPING</h1>
                    <p className="text-xl mt-5">Can i cancel my order ?</p>
                    <p className="mb-8" id={styles.textGray}>
                        It is a long established fact that a reader will be distractedfact that a reader will be distracted
                        <br />
                        will be distracted
                    </p>
                    <p className="text-xl ">How can i get free international shipping ?</p>
                    <p className="mb-8">
                        It is a long established fact that a reader will be distracted <br />
                        will be distracted
                    </p>
                    <p className="text-xl ">How to track my order ?</p>
                    <p className="mb-8">
                        It is a long established fact that a reader will be distracted <br />
                        will be distracted
                    </p>
                    <p className="text-xl ">What if my package lost ?</p>
                    <p>
                        It is a long established fact that a reader will be distracted PageMaker including versions of Lorem Ipsum
                        <br />
                        will be distracted
                    </p>
                    <p className="text-xl mt-8 ">What if my waiting time beyond estimation delivery timeline?</p>
                    <p>
                        It is a long established fact that a reader will be distracted <br />
                        will be distracted
                    </p>
                    <p className="text-xl mt-8">Can you ship P.O boxes ?</p>
                    <p>
                        It is a long established fact that a reader PageMaker including versions of Lorem Ipsum <br />
                        will be distracted
                    </p>
                </div>
                <div className="mt-4 lg:mt-0 lg:w-1/2 mx-auto">
                    <h1 className="mt-8   lg:text-5xl sm:text-xl tracking-tight text-gray  flex items-center justify-center">
                        <BsBoxSeam className={styles.shipping} />
                    </h1>
                    <h1 className="mt-5  lg:text-3xl sm:text-xl tracking-tight text-gray  flex items-center justify-center">DELIVERY</h1>
                    <p className="text-xl mt-5">Can i cancel my order ?</p>
                    <p className="mb-8" id={styles.textGray}>
                        It is a long established fact that a reader will be distractedfact that a reader will be distracted
                        <br />
                        It is a long established fact that a reader will be edfact that a reader will be distracted
                        <br />
                        distracted
                    </p>
                    <p className="text-xl ">How can i get free international shipping ?</p>
                    <p className="mb-8">
                        It is a long established fact that a reader will be distracted <br />
                        will be distracted
                    </p>
                    <p className="text-xl ">How to track my order ?</p>
                    <p className="mb-8">
                        It is a long established fact that a reader will be distracted <br />
                        will be distracted versions from the 1914 translation
                    </p>
                    <p className="text-xl ">What if my package lost ?</p>
                    <p>
                        It is a long established fact that a reader will be distracted PageMaker including versions of Lorem Ipsum
                        <br />
                        will be distracted
                    </p>
                    <p className="text-xl mt-8 ">What if my waiting time beyond estimation delivery timeline?</p>
                    <p>
                        It is a long established fact that a reader will be distracted versions from the 1914 translation
                        <br />
                        will be distracted
                    </p>
                    <p className="text-xl mt-8">Can you ship P.O boxes ?</p>
                    <p className="mb-8">
                        It is a long established fact that a reader PageMaker including versions of Lorem Ipsum <br />
                        will be distracted
                    </p>
                </div>
                <h1 className="mt-5  lg:text-5xl sm:text-xl tracking-tight text-gray  flex items-center justify-center">
                    STEEL NEED HELP ?
                </h1>
            </div>
        </>
    );
};
export default ShippingDelivery;
