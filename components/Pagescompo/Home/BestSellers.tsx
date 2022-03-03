/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
// import './styles/themes/Home.module.scss';
import styles from '../../../styles/themes/Card.module.scss';
const BestSellers: NextPage = () => {
    return (
        <>
            <div className="text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">OUR BEST SELLERS</p>
                <p className="mt-3">It is a long established fact that a reader will be distracted by the readable content</p>
                <p>that a reader will be distracted</p>
            </div>
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-0">
                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        <div className={styles.cardMain}>
                            <img
                                className={styles.car}
                                src="https://i.ibb.co/nnMLKhR/photo-1610694955371-d4a3e0ce4b52.jpg"
                                alt="Sunset in the mountains"
                            />
                            <div className={`${styles.card_layer}`} />
                            <div className={`${styles.card_info}`}>
                                <h3 className={`${styles.commonLine} ${styles.first}`}>Customs</h3>
                            </div>
                        </div>
                        <div className={styles.cardMain}>
                            <img
                                className={styles.car}
                                src="https://i.ibb.co/v4vQgDx/photo-1612532275214-e4ca76d0e4d1.jpg"
                                alt="Sunset in the mountains"
                            />
                            <div className={`${styles.card_layer}`} />
                            <div className={`${styles.card_info}`}>
                                <h3 className={`${styles.commonLine} ${styles.first}`}>Customs</h3>
                                <h3 className={`${styles.scend} ${styles.commonLine}`}>Products</h3>
                            </div>
                        </div>
                        <div className={styles.cardMain}>
                            <img
                                className={styles.car}
                                src="https://i.ibb.co/nnMLKhR/photo-1610694955371-d4a3e0ce4b52.jpg"
                                alt="Sunset in the mountains"
                            />
                            <div className={`${styles.card_layer}`} />
                            <div className={`${styles.card_info}`}>
                                <h3 className={`${styles.commonLine} ${styles.first}`}>Customs</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestSellers;
