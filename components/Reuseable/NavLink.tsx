import Link from 'next/link';

const NavLink = ({ href, children }: any) => {
    return (
        <Link href={href} passHref>
            {children}
        </Link>
    );
};

export default NavLink;
