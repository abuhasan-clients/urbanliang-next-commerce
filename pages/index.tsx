import type { NextPage } from 'next';
// import { useTranslation } from 'react-i18next';
import BestSellers from '../components/Pagescompo/Home/BestSellers';
import SignupMail from '../components/Pagescompo/Home/SignupMail';
import { PageSeo } from '../components/Seo/PageSeo';

const Home: NextPage = () => {
    // const { t } = useTranslation();

    return (
        <>
            <PageSeo title={`Home — `} />
            {/* <h4 className="">{t('name')}</h4> */}
            <BestSellers />
            <SignupMail />
        </>
    );
};

export default Home;
