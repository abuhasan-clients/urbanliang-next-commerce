import type { NextPage } from 'next';
import AuroraHome from '../components/Pagescompo/Home/AuroraHome';
// import BestSellers from '../components/Pagescompo/Home/BestSellers';
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
                defaultInfo
                icon="fa-solid fa-heart-pulse"
                title="MEET THE MAKERS"
            />

            <AuroraHome />
            {/* <BestSellers /> */}
            <SignupMail />
        </>
    );
};

export default Home;
