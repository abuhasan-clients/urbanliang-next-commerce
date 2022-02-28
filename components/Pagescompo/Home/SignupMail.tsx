import type { NextPage } from 'next';
import styles from '../../../styles/themes/Card.module.scss';

const SignupMail: NextPage = () => {
    return (
        <>
            <div className="min-h-full  py-12 px-4 sm:px-6 lg:px-8">
                <p className="mt-2 text-4xl leading-8  tracking-tight text-gray sm:text-4xl flex items-center justify-center">
                    SIGN UP TO OUR MAILING LIST{' '}
                </p>{' '}
                <br />
                <p className="flex items-center justify-center">get exclusives access to discounts, new items and more</p>
                {/*  */}
                <div className="grid place-items-center ">
                    <form>
                        <input type="email" placeholder="EMAIL" className={styles.mailInput} /> <br />
                        <input type="password" placeholder="PASSWORD" className={styles.mailInput} /> <br />
                        <button type="submit" className={styles.signBtn}>
                            Sign Up
                        </button>
                    </form>
                    <small className="mt-3">we respect your privacy</small>
                    <div className=" border-current  border-dotted border-2  ..."></div>
                </div>
                {/*  */}
            </div>
        </>
    );
};
export default SignupMail;
