import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick';

// carousel next arrow icon on the right position
// const NextArrow = ({ onClick }) => {
//     return (
//         <div className="nextArrow commonArrow" onClick={onClick}>
//             <i className="fa-solid fa-angle-left" />
//         </div>
//     );
// };

// carousel previous arrow icon on the left position
// const PrevArrow = ({ onClick }) => {
//     return (
//         <div className="prevArrow commonArrow" onClick={onClick}>
//             <i className="fa-solid fa-angle-right" />
//         </div>
//     );
// };
// responsive: [
//     {
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true
//         }
//     },
//     {
//         breakpoint: 800,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//         }
//     },
//     {
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//     }
// ];

const SlickCarousel = ({
    arrData,
    arrows,
    responsive,
    slidesToShow,
    autoplay,
    dots,
    pauseOnHover,
    customClass,
    parentClass,
    hasPrev,
    hasNext,
    sliderListClass
}: any) => {
    // carousel settings
    const settings = {
        dots,
        infinite: true,
        speed: 500,
        autoplay,
        pauseOnHover,
        slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows,
        nextArrow: hasPrev,
        prevArrow: hasNext,
        responsive
    };

    return (
        <div id="slickCarouselWrapper" className={`${parentClass}`}>
            <Slider {...settings} className={`${sliderListClass}`}>
                {arrData &&
                    arrData?.map((image: any, index: number) => (
                        <div key={index} className={`inline-block cardMotherDiv relative ${customClass}`} aria-label="card 2">
                            <div className="overflow-hidden  ">
                                <AiFillHeart className="absolute top-5 right-8   addWish" />
                                <img
                                    role="img"
                                    aria-label="gaming"
                                    className="focus:outline-none focus:outline-none object-cover h-80 w-full "
                                    src={image.img}
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
                        // <div key={index} className={`inline-block ${customClass}`}>
                        //     <img className="object-cover" src={`${image?.img}`} alt={`img - ${index}`} />
                        // </div>
                    ))}
            </Slider>
        </div>
    );
};

export default SlickCarousel;
