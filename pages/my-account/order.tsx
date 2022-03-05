import type { NextPage } from 'next';
import UserAccountLayout from '../../components/Layouts/UserAccountLayout/UserAccountLayout';
import { PageSeo } from '../../components/Seo/PageSeo';

const Order: NextPage = () => {
    return (
        <>
            <PageSeo title={`Order — `} />
            <UserAccountLayout>
                <div>
                    <h1 className="text-3xl">Order List</h1>
                </div>
            </UserAccountLayout>
        </>
    );
};

export default Order;
