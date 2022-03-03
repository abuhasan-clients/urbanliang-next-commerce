import type { NextPage } from 'next';
import SignupMail from '../components/Pagescompo/Home/SignupMail';

const Contact: NextPage = () => {
    return (
        <>
            <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center">
                <h1 className="text-4xl leading-8 mt-5  tracking-tight text-gray sm:text-4xl flex items-center justify-center ">CONTACT</h1>
                <p className="flex items-center  text-gray  justify-center mb-5 ">How can we help ?</p>
                <form className="w-full max-w-xl">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-first-name"
                                type="text"
                                placeholder="Jane"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                E-mail
                            </label>
                            <input
                                className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email"
                                type="email"
                            />
                        </div>
                        <div className="w-full px-3 pt-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-subject">
                                Subject
                            </label>
                            <input
                                className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="subject"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Message
                            </label>
                            <textarea
                                className=" no-resize appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3  h-48 resize-none   focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message"
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <button
                            className="shadow  m-auto   bg-emerald-700 hover:bg-emerald-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <SignupMail />
        </>
    );
};
export default Contact;
