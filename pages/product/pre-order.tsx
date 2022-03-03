import type { NextPage } from 'next';
import { PageSeo } from '../../components/Seo/PageSeo';
import Link from 'next/link';
const PreOrder: NextPage = () => {
    return (
        <>
            <PageSeo title={`About — `} />
            <h1 className="text-orange-500">This is Pre Order</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    );
};

export default PreOrder;
