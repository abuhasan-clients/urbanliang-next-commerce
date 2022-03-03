import type { NextPage } from 'next';
import UserAccountLayout from '../../components/Layouts/UserAccountLayout/UserAccountLayout';
import { PageSeo } from '../../components/Seo/PageSeo';

export const getServerSideProps = async () => {
    const user = true;
    if (!user) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }
    return {
        props: { user }
    };
};

const MyAccount: NextPage = () => {
    return (
        <>
            <PageSeo title={`My Account — `} />
            <UserAccountLayout>
                <div>
                    <h1 className="text-3xl">My Account</h1>
                </div>
            </UserAccountLayout>
        </>
    );
};

export default MyAccount;
