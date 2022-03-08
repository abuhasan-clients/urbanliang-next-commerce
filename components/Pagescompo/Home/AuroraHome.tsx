import type { NextPage } from 'next';
import { AiFillStar } from 'react-icons/ai';
import SlickCarousel from '../../Reuseable/MainCarousel/SlickCarousel';
import Creators from '../CreatorsVideo';
import DealOfTheDay from './DealOfDay';
import PreOrder from './PreOrder';

// carousel previous arrow icon on the left position
const PrevArrow = ({ onClick }: any) => {
    return (
        <div className="prevArrow commonArrow " onClick={onClick}>
            <i className="fa-solid fa-caret-right" />
        </div>
    );
};
const NextArrow = ({ onClick }: any) => {
    return (
        <div className="nextArrow commonArrow " onClick={onClick}>
            <i className="fa-solid fa-caret-left" />
        </div>
    );
};

const AuroraHome: NextPage = () => {
    const imgArr = [
        {
            img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2215210/2018/1/22/11516616541193-Roadster-Men-Beige-Colourblocked-Round-Neck-T-shirt-8181516616541016-1.jpg'
        },
        {
            img: 'https://media.istockphoto.com/photos/hipster-handsome-male-model-with-beard-wearing-black-blank-tshirt-picture-id925774200?k=20&m=925774200&s=170667a&w=0&h=gcmcsCGRKYilvz9HLcPEMrxoqoU78gGnqVkGGD59eDY='
        },

        {
            img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2215210/2018/1/22/11516616541193-Roadster-Men-Beige-Colourblocked-Round-Neck-T-shirt-8181516616541016-1.jpg'
        },

        {
            img: 'https://media.istockphoto.com/photos/hipster-handsome-male-model-with-beard-wearing-black-blank-tshirt-picture-id925774200?k=20&m=925774200&s=170667a&w=0&h=gcmcsCGRKYilvz9HLcPEMrxoqoU78gGnqVkGGD59eDY='
        },
        {
            img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2215210/2018/1/22/11516616541193-Roadster-Men-Beige-Colourblocked-Round-Neck-T-shirt-8181516616541016-1.jpg'
        }
    ];
    const responsive = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];
    return (
        <>
            <p className="text-5xl">BESTSELLERS</p>

            {/* <!-- component --> */}
            <div className=" ">
                <div className="">
                    <div className="w-full  flex justify-center mx-auto ">
                        <div aria-label="Group of cards" className="focus:outline-none mt-12 lg:mt-24">
                            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                <div className="focus:outline-none" aria-label="card 1">
                                    <div className="ull overflow-hidden">
                                        <img
                                            role="img"
                                            aria-label="code editor"
                                            className="focus:outline-none w-full"
                                            src="https://images.unsplash.com/photo-1557788095-fb14c7c24bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                            alt="code editor"
                                        />
                                    </div>

                                    <div className=" py-6 ">
                                        <p className="text-gray">CLOTH</p>
                                        <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                            Ribbed Button Vest
                                        </h1>
                                        <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                            <AiFillStar className="starReview" />
                                            <AiFillStar className="starReview" />
                                            <AiFillStar className="starReview" />
                                            <AiFillStar className="starReview" />
                                        </h1>
                                        <small>128 Reviews</small>

                                        <div className="reamainingDiv">
                                            <p className="reamaining">Reamaining:7</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                        <div className="   focus:outline-none  " aria-label="card 2">
                                            <div className="overflow-hidden  h-80 ">
                                                <img
                                                    role="img"
                                                    aria-label="gaming"
                                                    className="focus:outline-none focus:outline-none  w-full"
                                                    src="https://media.istockphoto.com/photos/hipster-handsome-male-model-with-beard-wearing-black-blank-tshirt-picture-id925774200?k=20&m=925774200&s=170667a&w=0&h=gcmcsCGRKYilvz9HLcPEMrxoqoU78gGnqVkGGD59eDY="
                                                    alt="notes"
                                                />
                                            </div>

                                            <div className="bg-white  py-4  ">
                                                <p className="text-gray">CLOTH</p>
                                                <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                    Ribbed Button Vest
                                                </h1>
                                                <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                </h1>
                                                <small>128 Reviews</small>

                                                <div className="reamainingDiv">
                                                    <p className="reamaining">Reamaining:7</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="   focus:outline-none  " aria-label="card 2">
                                            <div className="overflow-hidden  h-80 ">
                                                <img
                                                    role="img"
                                                    aria-label="gaming"
                                                    className="focus:outline-none focus:outline-none  w-full"
                                                    src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2215210/2018/1/22/11516616541193-Roadster-Men-Beige-Colourblocked-Round-Neck-T-shirt-8181516616541016-1.jpg"
                                                    alt="notes"
                                                />
                                            </div>

                                            <div className="bg-white  py-4  ">
                                                <p className="text-gray">CLOTH</p>
                                                <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                    Ribbed Button Vest
                                                </h1>
                                                <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                </h1>
                                                <small>128 Reviews</small>

                                                <div className="reamainingDiv">
                                                    <p className="reamaining">Reamaining:7</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-1 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                        <div className="   focus:outline-none  " aria-label="card 2">
                                            <div className="overflow-hidden  h-80 ">
                                                <img
                                                    role="img"
                                                    aria-label="gaming"
                                                    className="focus:outline-none focus:outline-none  w-full"
                                                    src="https://media.istockphoto.com/photos/hipster-handsome-male-model-with-beard-wearing-black-blank-tshirt-picture-id925774200?k=20&m=925774200&s=170667a&w=0&h=gcmcsCGRKYilvz9HLcPEMrxoqoU78gGnqVkGGD59eDY="
                                                    alt="notes"
                                                />
                                            </div>

                                            <div className="bg-white  py-4  ">
                                                <p className="text-gray">CLOTH</p>
                                                <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                    Ribbed Button Vest
                                                </h1>
                                                <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                </h1>
                                                <small>128 Reviews</small>

                                                <div className="reamainingDiv">
                                                    <p className="reamaining">Reamaining:7</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="   focus:outline-none  " aria-label="card 2">
                                            <div className="overflow-hidden  h-80 ">
                                                <img
                                                    role="img"
                                                    aria-label="gaming"
                                                    className="focus:outline-none focus:outline-none  w-full"
                                                    src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2215210/2018/1/22/11516616541193-Roadster-Men-Beige-Colourblocked-Round-Neck-T-shirt-8181516616541016-1.jpg"
                                                    alt="notes"
                                                />
                                            </div>

                                            <div className="bg-white  py-4  ">
                                                <p className="text-gray">CLOTH</p>
                                                <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                    Ribbed Button Vest
                                                </h1>
                                                <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
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
                    </div>
                    {/* home appliance start from here */}
                    <p className="text-5xl">SHOP HOME</p>

                    <div className="w-full  flex justify-center mx-auto ">
                        <div aria-label="Group of cards" className="focus:outline-none mt-12 lg:mt-24">
                            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                <div>
                                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                        <div className="   focus:outline-none  " aria-label="card 2">
                                            <div className="overflow-hidden  h-80 ">
                                                <img
                                                    role="img"
                                                    aria-label="gaming"
                                                    className="focus:outline-none focus:outline-none  w-full"
                                                    src="https://c0.wallpaperflare.com/preview/848/38/329/pot-cup-tea-flower.jpg"
                                                    alt="notes"
                                                />
                                            </div>

                                            <div className="bg-white  py-4  ">
                                                <p className="text-gray">CLOTH</p>
                                                <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                    Ribbed Button Vest
                                                </h1>
                                                <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                </h1>
                                                <small>128 Reviews</small>

                                                <div className="reamainingDiv">
                                                    <p className="reamaining">Reamaining:7</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="   focus:outline-none  " aria-label="card 2">
                                            <div className="overflow-hidden  h-80 ">
                                                <img
                                                    role="img"
                                                    aria-label="gaming"
                                                    className="focus:outline-none focus:outline-none  w-full"
                                                    src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2215210/2018/1/22/11516616541193-Roadster-Men-Beige-Colourblocked-Round-Neck-T-shirt-8181516616541016-1.jpg"
                                                    alt="notes"
                                                />
                                            </div>

                                            <div className="bg-white  py-4  ">
                                                <p className="text-gray">CLOTH</p>
                                                <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                    Ribbed Button Vest
                                                </h1>
                                                <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                </h1>
                                                <small>128 Reviews</small>

                                                <div className="reamainingDiv">
                                                    <p className="reamaining">Reamaining:7</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-1 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                        <div className="   focus:outline-none  " aria-label="card 2">
                                            <div className="overflow-hidden  h-80 ">
                                                <img
                                                    role="img"
                                                    aria-label="gaming"
                                                    className="focus:outline-none focus:outline-none  w-full"
                                                    src="https://media.istockphoto.com/photos/hipster-handsome-male-model-with-beard-wearing-black-blank-tshirt-picture-id925774200?k=20&m=925774200&s=170667a&w=0&h=gcmcsCGRKYilvz9HLcPEMrxoqoU78gGnqVkGGD59eDY="
                                                    alt="notes"
                                                />
                                            </div>

                                            <div className="bg-white  py-4  ">
                                                <p className="text-gray">CLOTH</p>
                                                <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                    Ribbed Button Vest
                                                </h1>
                                                <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                </h1>
                                                <small>128 Reviews</small>

                                                <div className="reamainingDiv">
                                                    <p className="reamaining">Reamaining:7</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="   focus:outline-none  " aria-label="card 2">
                                            <div className="overflow-hidden  h-80 ">
                                                <img
                                                    role="img"
                                                    aria-label="gaming"
                                                    className="focus:outline-none focus:outline-none  w-full"
                                                    src="https://media.istockphoto.com/photos/hipster-handsome-male-model-with-beard-wearing-black-blank-tshirt-picture-id925774200?k=20&m=925774200&s=170667a&w=0&h=gcmcsCGRKYilvz9HLcPEMrxoqoU78gGnqVkGGD59eDY="
                                                    alt="notes"
                                                />
                                            </div>

                                            <div className="bg-white  py-4  ">
                                                <p className="text-gray">CLOTH</p>
                                                <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                                    Ribbed Button Vest
                                                </h1>
                                                <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                    <AiFillStar className="starReview" />
                                                </h1>
                                                <small>128 Reviews</small>

                                                <div className="reamainingDiv">
                                                    <p className="reamaining">Reamaining:7</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="focus:outline-none" aria-label="card 1">
                                    <div className="ull overflow-hidden">
                                        <img
                                            role="img"
                                            aria-label="code editor"
                                            className="focus:outline-none w-full"
                                            src="https://images.unsplash.com/photo-1557788095-fb14c7c24bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                            alt="code editor"
                                        />
                                    </div>

                                    <div className=" py-6 ">
                                        <p className="text-gray">CLOTH</p>
                                        <h1 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                            Ribbed Button Vest
                                        </h1>
                                        <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider">
                                            <AiFillStar className="starReview" />
                                            <AiFillStar className="starReview" />
                                            <AiFillStar className="starReview" />
                                            <AiFillStar className="starReview" />
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
                    {/* home sho end */}
                    <p className="text-5xl mb-12">POPULAR STORES</p>
                    <div className=" w-full lex justify-center mx-auto ">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 ">
                            <div className="popularSdiv cursor-pointer">
                                <img
                                    role="img"
                                    aria-label="code editor"
                                    className="focus:outline-none   object-cover h-96  w-full "
                                    src="https://i.pinimg.com/736x/7f/8d/e4/7f8de4266996d52f2182ce462f5e7352.jpg"
                                    alt="code editor"
                                />
                            </div>

                            <div className="  cursor-pointer">
                                <img
                                    role="img"
                                    aria-label="code editor"
                                    className="focus:outline-none overflow-hidden object-cover h-96 w-full"
                                    src="https://i.pinimg.com/originals/03/05/8b/03058b460cfb957f09a0f2fe67e61747.jpg"
                                    alt="code editor"
                                />
                            </div>
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
            <PreOrder />
            <DealOfTheDay />
            <SlickCarousel
                arrData={imgArr}
                arrows
                responsive={responsive}
                slidesToShow={4}
                pauseOnHover
                customClass="testCustomClass"
                parentClass="testParentClass"
                sliderListClass="testLitsClass"
                hasPrev={<PrevArrow />}
                hasNext={<NextArrow />}
            />
            <Creators />
        </>
    );
};
export default AuroraHome;
