import type { NextPage } from 'next';
import AuroraHome from '../components/Pagescompo/Home/AuroraHome';
import SignupMail from '../components/Pagescompo/Home/SignupMail';
import BannerForCenter from '../components/Reuseable/BannerForCenter';
import { PageSeo } from '../components/Seo/PageSeo';

const Home: NextPage = () => {
    // const { t } = useTranslation();

    return (
        <>
            <PageSeo title={`Home — `} />
            {/* <h4 className="">{t('name')}</h4> */}

            <BannerForCenter
                image="https://i.ibb.co/Rz9vXx4/room-chair-vase-wall-66323-1280x720.jpg"
                title={
                    <h5 className="TITLE_BODONI">
                        <span>MEET THE &nbsp;</span>
                        <span>MAKERS</span>
                    </h5>
                }
                textColor="default_dark"
                desc={
                    <p className="px-2">
                        {/* We&sbquo;re LOVIE AURORA, a company-driven online marketplace that connects
                        <br /> you with unique, exciting creators and their products from all over the world <br /> you with unique,
                        exciting creators and their products from all over the world */}
                    </p>
                }
                icon="/static/images/loveIcon/LOVIE AURORA ICON BLACK.png"
            />

            <AuroraHome />
            <SignupMail />
        </>
    );
};

export default Home;
