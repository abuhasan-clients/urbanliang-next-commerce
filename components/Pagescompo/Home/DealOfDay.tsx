import type { NextPage } from 'next';

const DealOfTheDay: NextPage = () => {
    return (
        <>
            <p className="text-5xl mb-8 ml-3 mt-12">DEAL OF THE DAY</p>
            <div className="grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-1  px-4  mb-8 ">
                <div className="relative overflow-hidden  cursor-pointer">
                    <img
                        className="object-cover w-full imgReSize"
                        src="https://media.istockphoto.com/photos/close-up-photo-of-a-bearded-man-with-a-large-smile-on-black-picture-id1223053882?k=20&m=1223053882&s=612x612&w=0&h=h2mVqfdeR85fuZqdTmVRY6qD43IvOsAiQRnDbr7SmSU="
                        alt="Flower and sky"
                    />

                    <div className="absolute  bottom-0 left-0 px-12 py-4">
                        <p className="text-white">CLOTH</p>
                        <h1 className="focus:outline-none text-lg text-white font-semibold tracking-wider">Ribbed Button Vest</h1>
                        <p className="text-white">$128</p>

                        <div className="reamainingDiv">
                            <p className="reamaining text-white text-sm">Reamaining:7</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default DealOfTheDay;
