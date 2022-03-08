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
                images="https://images.unsplash.com/photo-1604702770018-55669959b124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80"
                title1="MEET THE"
                title2="MAKERS"
                description=""
                desClassName="text-lg text-white mt-3"
                className1="sm:text-lg  lg:text-8xl text-white"
                className2="sm:text-lg  lg:text-8xl  text-white"
                mainClassName="absolute  top-2 right-12 px-12 py-4"
                class
                icon="fa-solid fa-heart-pulse"
            />

            <AuroraHome />
            {/* <BestSellers /> */}
            <SignupMail />
        </>
    );
};

export default Home;
