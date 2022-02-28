import type { NextPage } from 'next';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import BestSellers from '../components/Pagescompo/Home/BestSellers';
import SignupMail from '../components/Pagescompo/Home/SignupMail';
import { PageSeo } from '../components/Seo/PageSeo';

const Home: NextPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageSeo title={`Home — `} />
            <h1 className="text-orange-500">Abu hasan</h1>
            <h4 className="">{t('name')}</h4>
            <h1 className="text-yellow-400">New Add</h1>
            <Link href="/about">
                <a>About</a>
            </Link>
            <i className="fa-solid fa-house-user" />
            <BestSellers />
            <SignupMail />
        </>
    );
};

export default Home;
