import type { NextPage } from 'next';
import { PageSeo } from '../../components/Seo/PageSeo';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const SignUp: NextPage = () => {
    // const router = useRouter();

    return (
        <>
            <PageSeo title={`SignUp — `} />
            <h1 className="text-orange-500">This is Sign Up</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    );
};

export default SignUp;
