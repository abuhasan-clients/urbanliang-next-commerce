/* eslint-disable prettier/prettier */
import { AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
// Import css files for react-slick carousel
import 'slick-carousel/slick/slick.css';



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
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div id="slickCarouselWrapper" className="">
            <Slider {...settings} className={`${sliderListClass} `}>
                {arrData &&
                    arrData?.map((image: any, index: number) => (
                        <div key={index} className="focus:outline-none   " aria-label="card 2" id=" ">
                            <img
                                role="img"
                                aria-label="gaming"
                                className="focus:outline-none focus:outline-none w-full"
                                src={image.img}
                                alt="notes"
                            />

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
                    ))}

            </Slider>
        </div>
    );
};

export default SlickCarousel;
