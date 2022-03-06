import type { NextPage } from 'next';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { PageSeo } from '../../components/Seo/PageSeo';
import styles from '../../styles/themes/Card.module.scss';
// import { useRouter } from 'next/router';

const SignUp: NextPage = () => {
    // const router = useRouter();

    return (
        <>
            <PageSeo title={`SignUp — `} />
            <p className="mt-8 lg:text-5xl leading-8  tracking-tight text-gray sm:text-4xl flex items-center justify-center">
                JOIN THE CLUB{' '}
            </p>{' '}
            <br />
            <small className="flex items-center justify-center  text-sm text-gray-700">
                Sign up to LOVIE AURORA today for exclusive access to
            </small>
            <small className="flex items-center justify-center  text-sm text-gray-700 mb-8">special offers,discount,events and more.</small>
            <div className="  flex flex-col">
                <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
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
                        <div className="mt-8 mb-8">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="  form-checkbox h-8 w-12 " id={styles.checkBox} />
                                <span className="text-green-600 ">
                                    Yes, i want to receive the LOVIE AURORA newsletter,as well <br />
                                    as hear about special offers,events,news and more updates <br />
                                </span>
                            </label>
                        </div>
                        <button type="submit" className={`${styles.signBtn2} mb-8`}>
                            Sign Up
                        </button>
                        <div className={`${styles.borderDe} mb-8`}>
                            <div className="  border border-gray"></div>
                        </div>
                    </div>
                    <small className="mt-3 text-center mb-5 ml-5">or continue using your social media</small>
                    <div className="footerIconDiv  ">
                        {' '}
                        <ImInstagram className="footerIcon  newLook  insta" />
                        <AiOutlineTwitter className="footerIcon newLook" />
                        <FaFacebookF className="footerIcon newLook" />
                        <FaTiktok className="footerIcon newLook" />
                    </div>
                    <small className="mt-3 text-center mb-5 ml-5">(we'll never post without permission)</small>
                </div>
            </div>
        </>
    );
};

export default SignUp;
