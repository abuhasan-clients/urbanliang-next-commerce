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
                        <div key={index} className={`inline-block ${customClass}`}>
                            <img className="object-cover" src={`${image?.img}`} alt={`img - ${index}`} />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default SlickCarousel;
