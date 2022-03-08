import type { NextPage } from 'next';
import styles from '../../../styles/themes/Card.module.scss';

const SignupMail: NextPage = () => {
    return (
        <>
            <div className={styles.borderDe}>
                <div className="  border border-inherit"></div>
            </div>
            <p className="mt-2 sm:text-2xl  lg:text-4xl leading-8  tracking-tight text-gray sm:text-4xl flex items-center justify-center">
                SIGN UP TO OUR MAILING LIST{' '}
            </p>{' '}
            <br />
            <p className="flex items-center justify-center mb-3">get exclusives access to discounts, new items and more</p>
            {/*  */}
            <div className="  flex flex-col">
                <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className=" text-center  rounded  text-black w-full">
                        <input
                            type="email"
                            className="block border border-gray w-full p-3 rounded mb-4  text-center "
                            name="email"
                            placeholder="EMAIL"
                        />

                        <input
                            type="password"
                            className="block border w-full p-3 rounded mb-4 text-center gg"
                            name="pass"
                            placeholder="PASSWORD"
                        />

                        <button type="submit" className={styles.signBtn}>
                            Sign Up
                        </button>
                    </div>
                    <small className="mt-3 text-center mb-5 ml-5">we respect your privacy</small>
                </div>
            </div>
        </>
    );
};
export default SignupMail;
