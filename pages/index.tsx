import type { NextPage } from 'next';
// import { useTrans../components/Reuseable/Banner
import BestSellers from '../components/Pagescompo/Home/BestSellers';
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
                defaultInfo
                images="https://i.ibb.co/zQPHsjq/addams-polar-bear-rug-1.jpg"
                title="OUR BEST, CHOSEN BY YOU"
                icon="fa-solid fa-heart-pulse"
            />
            <BestSellers />
            <SignupMail />
        </>
    );
};

export default Home;
