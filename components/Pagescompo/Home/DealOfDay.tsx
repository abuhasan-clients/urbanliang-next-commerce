import type { NextPage } from 'next';

const DealOfTheDay: NextPage = () => {
    return (
        <>
            <p className="text-5xl mb-8 ml-3 mt-12">DEAL OF THE DAY</p>
            <div className="grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  px-4  mb-8 ">
                <div className="relative overflow-hidden  cursor-pointer">
                    <div className=" overflow-hidden">
                        <img
                            className="w-full  "
                            src="https://i.pinimg.com/736x/23/5c/d1/235cd179e3eec4cd5efb74e2a887b292.jpg"
                            alt="Flower and sky"
                        />
                    </div>

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
