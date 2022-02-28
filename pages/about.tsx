import type { NextPage } from 'next';
import { PageSeo } from '../components/Seo/PageSeo';
import Link from 'next/link';

const about: NextPage = () => {
    return (
        <>
            <PageSeo title={`About — `} />
            <h1 className="text-orange-500">This is about</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    );
};

export default about;
