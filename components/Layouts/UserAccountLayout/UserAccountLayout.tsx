import type { NextPage } from 'next';
import Link from 'next/link';

const UserAccountLayout: NextPage = ({ children }: any) => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link href="/my-account/feed">
                            <a>Your Feed</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/my-account/wishlist">
                            <a>WishList</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/my-account/order">
                            <a>Your Order</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/my-account">
                            <a>Your Account</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
            {children}
        </>
    );
};

export default UserAccountLayout;
