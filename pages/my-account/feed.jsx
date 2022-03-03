import UserAccountLayout from '../../components/Layouts/UserAccountLayout/UserAccountLayout';
import { PageSeo } from '../../components/Seo/PageSeo';

const Feed = () => {
    return (
        <>
            <PageSeo title={`Feed — `} />
            <UserAccountLayout>
                <div>
                    <h1 className="text-3xl">Your Feed</h1>
                </div>
            </UserAccountLayout>
        </>
    );
};

export default Feed;
