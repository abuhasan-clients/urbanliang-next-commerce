/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
// import './styles/themes/Home.module.scss';
import styles from '../../../styles/themes/Card.module.scss';
const BestSellers: NextPage = () => {
    return (
        <>
            <div className="text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">OUR BEST SELLERS</p>
                <p className="mt-3">It is a long established fact that a reader will be distracted by the readable content</p>
                <p>that a reader will be distracted</p>
            </div>
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-0">
                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        <div className={styles.cardMain}>
                            <img
                                className={styles.car}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2eJPRYWCZUWllxDkziFCuNiRDa1QlMt2sg&usqp=CAU"
                                alt="Sunset in the mountains"
                            />
                            {/* 1 end */}
                        </div>
                        <div className={styles.cardMain}>
                            <img
                                className={styles.car}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ydb2Ci0eV81JLXEb-I36aHoWQ7V8S4p4vQ&usqp=CAU"
                                alt="Sunset in the mountains"
                            />
                        </div>
                        <div className={styles.cardMain}>
                            <img
                                className={styles.car}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgrx9za9JmY4Emi8WjDyA56bFNTbduK_aSQ&usqp=CAU"
                                alt="Sunset in the mountains"
                            />
                        </div>
                        <div className={styles.cardMain}>
                            <img
                                className={styles.car}
                                src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLt9RyZNdrhMAryf_gcArpgHXIUT4GUq52Q&usqp=CAU"
                                alt="Sunset in the mountains"
                            />
                        </div>
                        <div className={styles.cardMain}>
                            <img
                                className={styles.car}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgrx9za9JmY4Emi8WjDyA56bFNTbduK_aSQ&usqp=CAU"
                                alt="Sunset in the mountains"
                            />
                        </div>
                        <div className={styles.cardMain}>
                            <img
                                className={styles.car}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgrx9za9JmY4Emi8WjDyA56bFNTbduK_aSQ&usqp=CAU"
                                alt="Sunset in the mountains"
                            />
                        </div>

                        {/*  */}
                    </div>
                </div>
            </div>
            <div className={styles.borderDe}>
                <div className="  border border-inherit"></div>
            </div>
        </>
    );
};

export default BestSellers;
