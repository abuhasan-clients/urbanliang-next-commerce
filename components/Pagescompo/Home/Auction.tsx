import type { NextPage } from 'next';
import SlickCarousel from '../../Reuseable/MainCarousel/SlickCarousel';

const Autction: NextPage = () => {
    const imgArr = [
        {
            img: 'https://img.etimg.com/thumb/msid-88634316,width-525,height-393,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg'
        },
        {
            img: 'https://img.etimg.com/thumb/msid-88634316,width-525,height-393,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg'
        },

        {
            img: 'https://img.etimg.com/thumb/msid-88634316,width-525,height-393,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg'
        },

        {
            img: 'https://img.etimg.com/thumb/msid-88634316,width-525,height-393,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg'
        },
        {
            img: 'https://img.etimg.com/thumb/msid-88634316,width-525,height-393,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg'
        },
        {
            img: 'https://img.etimg.com/thumb/msid-88634316,width-525,height-393,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg'
        }
    ];

    return (
        <>
            <div className="">
                <SlickCarousel arrData={imgArr}></SlickCarousel>
            </div>
        </>
    );
};

export default Autction;
