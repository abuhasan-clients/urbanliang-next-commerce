import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import NavLink from '../../Reuseable/NavLink';
// import logo_black from '../../../public/assets/logoIcon/logo/LOVIE AURORA LOGO BLACK.png';

const MainNavBar = () => {
    const location = useRouter();
    const [scrollTrue, setScrollTrue] = useState(false);
    // console.log(scrollTrue);

    // if (typeof window !== 'undefined') {
    //     document.cookie = 'i18next=bn';
    // }

    const { pathname } = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scrollingChange = () => {
                const header = document.querySelector('.main-header');
                window.addEventListener('scroll', () => {
                    const scrollPos = window.scrollY;
                    if (scrollPos > 10) {
                        header?.classList.add('scrolled');
                    } else {
                        header?.classList.remove('scrolled');
                    }
                });
            };

            window.onscroll = () => {
                scrollingChange();
                if (window.scrollY > 10) {
                    return setScrollTrue(true);
                }
                return setScrollTrue(false);
            };
        }
    }, []);

    const myRef = useRef(null);
    useEffect(() => {
        const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
        const executeScroll = () => scrollToRef(myRef);
        if (pathname === '/home') {
            executeScroll();
        } else if (pathname === '/products') {
            executeScroll();
        }
    }, [pathname]);

    const navigations = [
        {
            name: 'Valentine Day',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Handmade',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Home',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Clothing & Accessories',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Jewelry',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Gifts',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Pets',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Art',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Custom',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Pre-order',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Auction',
            child: [
                { name: 'Dropdown_Items1', path: '/logo1' },
                { name: 'Dropdown_Items2', path: '/logo2' },
                { name: 'Dropdown_Items3', path: '/logo3' }
            ]
        },
        {
            name: 'Other',
            child: [
                { name: 'My Account', path: '/my-account' },
                { name: 'Product', path: '/product/pre-order' },
                { name: 'Join As Seller', path: '/join-as-seller' },
                { name: 'About Us', path: '/pages/about-us' },
                { name: 'Sellers', path: '/pages/sellers' },
                { name: 'Blog', path: '/pages/blogs' },
                { name: 'Contact', path: '/help/contact' },
                { name: 'Creator Grow', path: '/help/help-creators-grow' },
                { name: 'Return&Refund', path: '/help/return-refund' },
                { name: 'Shipping_Delivery', path: '/help/shipping-delivery' },
                { name: 'Sign Up', path: '/auth/signup' }
            ]
        }
    ];

    return (
        <div className="main-header" ref={myRef}>
            <div className="container px-3 mx-auto flex items-center justify-between">
                <div className="nav_logo hidden z-50">
                    <NavLink href="/">
                        <img
                            src={`${!scrollTrue ? '/static/images/logoSingle/LOGO_BLACK.png' : '/static/images/logoSingle/LOGO_WHITE.png'}`}
                            alt="LOGO"
                        />
                    </NavLink>
                </div>
                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label htmlFor="menu-btn" className="menu-icon">
                    <span className="menu-icon__line p" />
                </label>
                <ul className="nav-links m-0 flex flex-col w-full">
                    <div className="flex justify-between header_top_nav">
                        <div className="logoBrand">
                            <NavLink href="/">
                                <img
                                    src={`${
                                        !scrollTrue
                                            ? '/static/images/logoSingle/LOGO_BLACK.png'
                                            : '/static/images/logoSingle/LOGO_WHITE.png'
                                    }`}
                                    alt="LOGO"
                                />
                            </NavLink>
                            {/* <Link href="/">
                                
                                
                            </Link> */}
                        </div>
                        <div className="icons_parent flex items-center">
                            <div className="search_button">
                                <input type="text" placeholder="what are you Looking for?" />
                                <img src="/static/images/Icons/ICONS_BLACK/SEARCH_BTN.png" className="cursorPointer" alt="search" />
                            </div>
                            <div className="header_icons ml-5 flex ">
                                <div className="icon_parent">
                                    <img
                                        src="/static/images/Icons/ICONS_BLACK/RIGHT ARROW BOLD.png"
                                        className="cursorPointer margin_decrement"
                                        alt="arrow"
                                    />
                                </div>
                                <div className="icon_parent">
                                    <img src="/static/images/Icons/ICONS_BLACK/TROLLEY_BOLD.png" className="cursorPointer" alt="arrow" />
                                </div>
                                <div className="icon_parent">
                                    <img src="/static/images/Icons/ICONS_BLACK/HEART A_BOLD.png" className="cursorPointer" alt="arrow" />
                                </div>
                                <div className="icon_parent">
                                    <img src="/static/images/Icons/ICONS_BLACK/MSG_BOLD.png" className="cursorPointer" alt="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center bottom_navigation">
                            {navigations?.map((data, i) => (
                                <div key={i} className="dropdown_parent grid grid-cols-1">
                                    <button className="">{data.name}</button>
                                    <div className="dropdown_menu">
                                        {data.child?.map((cd, i) => (
                                            <Link key={i} href={`${cd.path}`}>
                                                <a className={`nav-link ${location.pathname === cd.path ? 'activeRoute' : ''}`}>
                                                    {cd.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default MainNavBar;
