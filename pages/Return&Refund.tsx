import type { NextPage } from 'next';
import SignupMail from '../components/Pagescompo/Home/SignupMail';
import styles from '../styles/themes/Card.module.scss';
const ReturnRefund: NextPage = () => {
    return (
        <>
            <div className=" mt-8   container  h-screen mx-auto flex-1  flex flex-col  px-8">
                <h1 className="mt-8 text-4xl leading-8  tracking-tight text-gray sm:text-4xl flex items-center justify-center">
                    GENERAL INFORMATION
                </h1>
                <p className="flex items-center justify-center text-gray mt-3">
                    It is a long established fact that a reader will be distracted by the readable content of.t is a long established fact
                    by the readable content of{' '}
                </p>
                <p className="flex items-center justify-center text-gray ">
                    {' '}
                    It is a long established fact that a reader will be distracted by the readable content of.
                </p>
                <div className="grid grid-cols-3 place-items-center  flex items-center justify-center">
                    <div>
                        <h1 className={styles.extraB}>1</h1>
                        <div className="p-0 border-b-8 "></div>
                    </div>
                    <div>
                        <h1 className={styles.extraB}>2</h1>
                    </div>
                    <div>
                        <h1 className={styles.extraB}>3</h1>
                    </div>
                </div>
            </div>

            <SignupMail></SignupMail>
        </>
    );
};
export default ReturnRefund;
