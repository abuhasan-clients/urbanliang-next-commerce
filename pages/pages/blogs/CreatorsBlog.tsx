import type { NextPage } from 'next';

const CreatorsBlog: NextPage = () => {
    const imgArr = [
        {
            img: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        },
        {
            img: 'https://images.unsplash.com/photo-1467238307002-480ffdd260f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        },

        {
            img: 'https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80'
        },
        {
            img: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }
    ];
    return (
        <>
            <h1 className="text-center  text-5xl mt-12 mb-8">CREATORS BLOG POST</h1>
            <div className="lg:w-5/6 xl:w-5/6 md:w-full sm:w-full mx-auto ">
                <div className="grid sm:grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 pb-6   ">
                    {imgArr &&
                        imgArr?.map((image: any, index: number) => (
                            <div key={index} className=" overflow-hidden   iii">
                                <img className=" imgBlog w-full object-cover " src={image.img} alt="" />

                                <div className="bg-white    ">
                                    <p className="text-gray text-xl mt-3 ">Title Of The Blog </p>
                                    <h1 className="focus:outline-none flex mt-1   text-lg text-gray-900 font-semibold tracking-wider"></h1>
                                    <small>creator</small> <br />
                                    <small className="">United Kingdom</small> <br />
                                    <small className="">12/01/2021</small>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};
export default CreatorsBlog;
