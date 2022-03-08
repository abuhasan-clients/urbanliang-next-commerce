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
                images="https://media.istockphoto.com/photos/close-up-photo-of-a-bearded-man-with-a-large-smile-on-black-picture-id1223053882?k=20&m=1223053882&s=612x612&w=0&h=h2mVqfdeR85fuZqdTmVRY6qD43IvOsAiQRnDbr7SmSU="
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
