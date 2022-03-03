import type { NextPage } from 'next';
import { PageSeo } from '../components/Seo/PageSeo';
import Link from 'next/link';
import Loader from '../components/Layouts/Parent/Loader';
import { UseAppDispatch, UseAppSelector } from '../services/hooks/hooks';
import { useEffect } from 'react';
import { getProductList } from '../services/redux/product/productActions';
import { addToCart } from '../services/redux/cart/cartActions';
import { addToWishlist } from '../services/redux/wishList/wishlistActions';
const About: NextPage = () => {
    const dispatch = UseAppDispatch();
    const { products, /*pages: totalPage,*/ loading }: any = UseAppSelector((state) => state.productList);

    const addToCartHandler = (id: any, quantity: any) => {
        dispatch(addToCart(id, quantity));
    };
    const addToWishlistHandler = (id: any, quantity: any) => {
        dispatch(addToWishlist(id, quantity));
    };

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    return (
        <>
            <PageSeo title={`About — `} />
            <h1 className="text-orange-500">This is about</h1>
            {loading && <Loader />}
            <Link href="/">
                <a>Home</a>
            </Link>
            {products?.map((data: any, i: any) => (
                <div key={i}>
                    <button
                        className={`bg-red-400 mx-5 ${data?.countInStock === 0 && 'opacity-50 pointer-events-none'} btn`}
                        disabled={data?.countInStock === 0}
                        onClick={() => {
                            addToCartHandler(data._id, 1);
                        }}
                    >
                        Add to {data._id}
                    </button>
                    <button
                        className={`bg-green-400 mx-5 ${data?.countInStock === 0 && 'opacity-50 pointer-events-none'} btn`}
                        disabled={data?.countInStock === 0}
                        onClick={() => {
                            addToWishlistHandler(data._id, 1);
                        }}
                    >
                        Add to {data._id}
                    </button>
                </div>
            ))}
        </>
    );
};

export default About;
