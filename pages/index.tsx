import type { NextPage } from 'next';
import AuroraHome from '../components/Pagescompo/Home/AuroraHome';
import SignupMail from '../components/Pagescompo/Home/SignupMail';
import Banner from '../components/Reuseable/Banner';
import { PageSeo } from '../components/Seo/PageSeo';

const Home: NextPage = () => {
    // const { t } = useTranslation();

    return (
        <>
            <PageSeo title={`Home — `} />
            {/* <h4 className="">{t('name')}</h4> */}

            <Banner
                // layer
                image="https://png.pngtree.com/background/20210715/original/pngtree-sell-banner-background-picture-image_1280025.jpg"
                // rightInfo
                // icon="fa-solid fa-heart-pulse"
                title={
                    <h5 className="TITLE_BODONI">
                        MEET THE <br /> MAKERS
                    </h5>
                }
                desc={
                    <p>
                        We&sbquo;re LOVIE AURORA, a company-driven online marketplace that connects
                        <br /> you with unique, exciting creators and their products from all over the world <br /> you with unique,
                        exciting creators and their products from all over the world
                    </p>
                }
            // defaultClasses="rightInfo absolute right-20 top-40"
            />

            <AuroraHome />
            <SignupMail />
        </>
    );
};

export default Home;
