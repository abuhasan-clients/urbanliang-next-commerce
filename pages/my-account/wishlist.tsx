import type { NextPage } from 'next';
import UserAccountLayout from '../../components/Layouts/UserAccountLayout/UserAccountLayout';
import { PageSeo } from '../../components/Seo/PageSeo';

const WishList: NextPage = () => {
    return (
        <>
            <PageSeo title={`Wishlist — `} />
            <UserAccountLayout>
                <div>
                    <h1 className="text-3xl">Wish List</h1>
                </div>
            </UserAccountLayout>
        </>
    );
};

export default WishList;
