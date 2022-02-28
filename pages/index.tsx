import type { NextPage } from 'next';
import { PageSeo } from '../components/Seo/PageSeo';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

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
        </>
    );
};

export default Home;
