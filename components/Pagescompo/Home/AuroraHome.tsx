import type { NextPage } from 'next';

const AuroraHome: NextPage = () => {
    return (
        <>
            <h1 className=" mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl">BESTSELLERS</h1>
            {/* <!-- component --> */}
            <div className=" px-4 ">
                <div className="mx-auto container">
                    <div tabIndex="0" aria-label="Group of cards" className="focus:outline-none mt-12 lg:mt-24">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            <div tabIndex="0" className="focus:outline-none" aria-label="card 1">
                                <img
                                    role="img"
                                    aria-label="code editor"
                                    className="focus:outline-none ull"
                                    src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="code editor"
                                />

                                <div className=" py-6 ">
                                    <p className="text-gray">CLOTH</p>
                                    <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                        Ribbed Button Vest
                                    </h1>
                                    <small>128 Reviews</small>

                                    <div className="reamainingDiv">
                                        <p className="reamaining">Reamaining:7</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div tabIndex="0" className="focus:outline-none" aria-label="card 2" id="card3">
                                        <img
                                            tabIndex="0"
                                            role="img"
                                            aria-label="gaming"
                                            className="focus:outline-none focus:outline-none img3"
                                            src="https://media.istockphoto.com/photos/handsome-latin-man-against-turquoise-background-picture-id1182055260?b=1&k=20&m=1182055260&s=170667a&w=0&h=-KvJpBmOsHK5G_1loSH-6uvtzwIH5XxNrdLrfvdE5k0="
                                            alt="notes"
                                        />

                                        <div className="bg-white  py-4  ">
                                            <p className="text-gray">CLOTH</p>
                                            <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                Ribbed Button Vest
                                            </h1>
                                            <small>128 Reviews</small>

                                            <div className="reamainingDiv">
                                                <p className="reamaining">Reamaining:7</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div tabIndex="0" className="focus:outline-none" aria-label="card 3" id="card3">
                                        <img
                                            tabIndex="0"
                                            role="img"
                                            aria-label="gaming"
                                            className="focus:outline-none focus:outline-none img3"
                                            src="https://media.istockphoto.com/photos/handsome-latin-man-against-turquoise-background-picture-id1182055260?b=1&k=20&m=1182055260&s=170667a&w=0&h=-KvJpBmOsHK5G_1loSH-6uvtzwIH5XxNrdLrfvdE5k0="
                                            alt="notes"
                                        />

                                        <div className="bg-white  py-4  ">
                                            <p className="text-gray">CLOTH</p>
                                            <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                Ribbed Button Vest
                                            </h1>
                                            <small>128 Reviews</small>

                                            <div className="reamainingDiv">
                                                <p className="reamaining">Reamaining:7</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div tabIndex="0" className="focus:outline-none" aria-label="card 4" id="card3">
                                        <img
                                            tabIndex="0"
                                            role="img"
                                            aria-label="gaming"
                                            className="focus:outline-none focus:outline-none img3"
                                            src="https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                                            alt="notes"
                                        />

                                        <div className="bg-white  py-4  ">
                                            <p className="text-gray">CLOTH</p>
                                            <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                Ribbed Button Vest
                                            </h1>
                                            <small>128 Reviews</small>

                                            <div className="reamainingDiv">
                                                <p className="reamaining">Reamaining:7</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div tabIndex="0" className="focus:outline-none" aria-label="card 5" id="card3">
                                        <img
                                            tabIndex="0"
                                            role="img"
                                            aria-label="gaming"
                                            className="focus:outline-none focus:outline-none img3"
                                            src="https://media.istockphoto.com/photos/handsome-latin-man-against-turquoise-background-picture-id1182055260?b=1&k=20&m=1182055260&s=170667a&w=0&h=-KvJpBmOsHK5G_1loSH-6uvtzwIH5XxNrdLrfvdE5k0="
                                            alt="notes"
                                        />

                                        <div className="bg-white  py-4  ">
                                            <p className="text-gray">CLOTH</p>
                                            <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                Ribbed Button Vest
                                            </h1>
                                            <small>128 Reviews</small>

                                            <div className="reamainingDiv">
                                                <p className="reamaining">Reamaining:7</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* home appliance start from here */}
                    <h1 className=" mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl">SHOP HOME</h1>

                    <div tabIndex="0" aria-label="Group of cards" className="focus:outline-none mt-12 lg:mt-24">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            <div>
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div tabIndex="0" className="focus:outline-none" aria-label="card 2" id="card3">
                                        <img
                                            tabIndex="0"
                                            role="img"
                                            aria-label="gaming"
                                            className="focus:outline-none focus:outline-none img3"
                                            src="https://image.made-in-china.com/2f0j00iaERkdGyYCzq/400ml-600ml-800ml-1000ml-1200ml-Classic-Pyrex-High-Borosilicate-Glass-Home-Use-Tea-Pot-Kettle-Teapot-with-Glass-Lid-and-Filter.jpg"
                                            alt="notes"
                                        />

                                        <div className="bg-white  py-4  ">
                                            <p className="text-gray">CLOTH</p>
                                            <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                Ribbed Button Vest
                                            </h1>
                                            <small>128 Reviews</small>

                                            <div className="reamainingDiv">
                                                <p className="reamaining">Reamaining:7</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div tabIndex="0" className="focus:outline-none" aria-label="card 3" id="card3">
                                        <img
                                            tabIndex="0"
                                            role="img"
                                            aria-label="gaming"
                                            className="focus:outline-none focus:outline-none img3"
                                            src="https://www.joyusgarden.com/wp-content/uploads/2016/04/81ew3qRioWL._SL1500_-1-1.jpg"
                                            alt="notes"
                                        />

                                        <div className="bg-white  py-4  ">
                                            <p className="text-gray">CLOTH</p>
                                            <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                Ribbed Button Vest
                                            </h1>
                                            <small>128 Reviews</small>

                                            <div className="reamainingDiv">
                                                <p className="reamaining">Reamaining:7</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div tabIndex="0" className="focus:outline-none" aria-label="card 4" id="card3">
                                        <img
                                            tabIndex="0"
                                            role="img"
                                            aria-label="gaming"
                                            className="focus:outline-none focus:outline-none img3"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gXog50S7k76io1tvetvMXCYAxywTYTJbAw&usqp=CAU"
                                            alt="notes"
                                        />

                                        <div className="bg-white  py-4  ">
                                            <p className="text-gray">CLOTH</p>
                                            <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                Ribbed Button Vest
                                            </h1>
                                            <small>128 Reviews</small>

                                            <div className="reamainingDiv">
                                                <p className="reamaining">Reamaining:7</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div tabIndex="0" className="focus:outline-none" aria-label="card 5" id="card3">
                                        <img
                                            tabIndex="0"
                                            role="img"
                                            aria-label="gaming"
                                            className="focus:outline-none focus:outline-none img3"
                                            src="https://image.made-in-china.com/2f0j00iaERkdGyYCzq/400ml-600ml-800ml-1000ml-1200ml-Classic-Pyrex-High-Borosilicate-Glass-Home-Use-Tea-Pot-Kettle-Teapot-with-Glass-Lid-and-Filter.jpg"
                                            alt="notes"
                                        />

                                        <div className="bg-white  py-4  ">
                                            <p className="text-gray">CLOTH</p>
                                            <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                Ribbed Button Vest
                                            </h1>
                                            <small>128 Reviews</small>

                                            <div className="reamainingDiv">
                                                <p className="reamaining">Reamaining:7</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div tabIndex="0" className="focus:outline-none" aria-label="card 1">
                                <img
                                    role="img"
                                    aria-label="code editor"
                                    className="focus:outline-none ull"
                                    src="https://media.istockphoto.com/photos/set-of-contemporary-house-appliances-standing-on-reflective-surface-picture-id1279457865?k=20&m=1279457865&s=170667a&w=0&h=q3kTTUV_5r7FWQKsRFZ1hZDWqUqay20V35WT_v2zdeY="
                                    alt="code editor"
                                />

                                <div className=" py-6 ">
                                    <p className="text-gray">CLOTH</p>
                                    <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                        Ribbed Button Vest
                                    </h1>
                                    <small>128 Reviews</small>

                                    <div className="reamainingDiv">
                                        <p className="reamaining">Reamaining:7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* home sho end */}
                </div>
            </div>
        </>
    );
};
export default AuroraHome;
