import type { NextPage } from 'next';
import UserAccountLayout from '../../components/Layouts/UserAccountLayout/UserAccountLayout';
import { PageSeo } from '../../components/Seo/PageSeo';

const Feed: NextPage = () => {
    return (
        <>
            <PageSeo title={`Feed — `} />
            <UserAccountLayout>
                <div>
                    <h1 className="text-3xl">Feed List</h1>
                </div>
            </UserAccountLayout>
        </>
    );
};

export default Feed;
