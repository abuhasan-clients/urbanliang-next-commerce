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
                layer
                image="https://images.unsplash.com/photo-1604702770018-55669959b124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80"
                rightInfo
                icon="fa-solid fa-heart-pulse"
                title={
                    <h5 className="TITLE_BODONI">
                        MEET THE <br /> MAKERS
                    </h5>
                }
                desc={
                    <p>
                        We&sbquo;re LOVIE AURORA, a company-driven online marketplace that connects you with unique, exciting creators and
                        their products from all over the world
                    </p>
                }
                defaultClasses="rightInfo absolute right-20 top-40"
            />

            <AuroraHome />
            <SignupMail />
        </>
    );
};

export default Home;
