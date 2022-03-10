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
                image="https://i.ibb.co/Rz9vXx4/room-chair-vase-wall-66323-1280x720.jpg"
                title={
                    <h5 className="TITLE_BODONI">
                        MEET THE <br /> MAKERS
                    </h5>
                }
                textColor="default_dark"
                desc={
                    <p className="px-2">
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
