import type { NextPage } from 'next';
import styles from '../styles/themes/JoinAsSeller.module.scss';
// import { FaShippingFast} from 'react-icons/fa';

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
                <div className="mt-4 lg:mt-0 lg:w-1/2 mx-auto">
                    <div className="">hello</div>
                </div>
            </div>
        </>
    );
};
export default ShippingDelivery;
