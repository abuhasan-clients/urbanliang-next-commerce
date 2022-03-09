import type { NextPage } from 'next';
import SignupMail from '../../../components/Pagescompo/Home/SignupMail';
import Banner from '../../../components/Reuseable/Banner';
import CreatorsBlog from './CreatorsBlog';

const BlogHome: NextPage = () => {
    const imgArr = [
        {
            img: 'https://cdn.shopify.com/s/files/1/0162/2116/files/5_Best_Shirt_And_Pant_Combinations_For_Men_7.jpg?v=1541421691'
        },
        {
            img: 'https://media.istockphoto.com/photos/hipster-handsome-male-model-with-beard-wearing-black-blank-tshirt-picture-id925774200?k=20&m=925774200&s=170667a&w=0&h=gcmcsCGRKYilvz9HLcPEMrxoqoU78gGnqVkGGD59eDY='
        },

        {
            img: 'https://cdn.shopify.com/s/files/1/0162/2116/files/5_Best_Shirt_And_Pant_Combinations_For_Men_7.jpg?v=1541421691'
        },

        {
            img: 'https://i.pinimg.com/originals/e1/94/0a/e1940a6bf16b6f2b1ac2fdcf50397893.jpg'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0162/2116/files/5_Best_Shirt_And_Pant_Combinations_For_Men_7.jpg?v=1541421691'
        }
    ];
    return (
        <>
            <Banner
                layer
                defaultInfo
                images="https://i.ibb.co/zQPHsjq/addams-polar-bear-rug-1.jpg"
                title="OUR BEST, CHOSEN BY YOU"
                icon="fa-solid fa-heart-pulse"
            />
            <h1 className="text-center  text-5xl mt-5 mb-8">POPULAR</h1>
            <div className="lg:w-5/6 xl:w-5/6 md:w-full sm:w-full flex  mx-auto ">
                <div className="grid sm:grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6   ">
                    {imgArr &&
                        imgArr?.map((image: any, index: number) => (
                            <div key={index} className="focus:outline-none cardAll  blogCard" aria-label="card 2" id=" ">
                                <img
                                    role="img"
                                    aria-label="gaming"
                                    className="focus:outline-none focus:outline-none  w-full object-cover"
                                    src="https://www.totalphase.com/media/blog/2017/04/brain_cog.jpg"
                                    alt="notes"
                                />

                                <div className="bg-white  py-3  ">
                                    <p className="text-gray text-xl mt-3">Title Of The Blog Post</p>
                                    <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider"></h1>
                                    <small>creator</small> <br />
                                    <small className="">United Kingdom</small> <br />
                                    <small className="">12/01/2021</small>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            {/* creator blog post */}
            <CreatorsBlog></CreatorsBlog>
            <SignupMail />
        </>
    );
};
export default BlogHome;
