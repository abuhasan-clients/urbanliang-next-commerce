import type { NextPage } from 'next';

const Creators: NextPage = () => {
    return (
        <>
            <p className="text-5xl mt-12 titleMargin mb-8 TITLE_BODONI">MEET YOUR AMAZING CREATORS</p>
            <div className="w-full flex justify-center mx-auto ">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 ">
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/0k8ljlnBAQI"
                            title="YouTube video player"
                            frameBorder="0"
                            className="imgReSize"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div>
                        <img
                            role="img"
                            aria-label="code editor"
                            className="focus:outline-none imgReSize"
                            src="https://thumbs.dreamstime.com/b/have-wonderful-weekend-word-written-wood-block-text-wooden-table-your-desing-top-view-concept-174283020.jpg"
                            alt="code editor"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Creators;
