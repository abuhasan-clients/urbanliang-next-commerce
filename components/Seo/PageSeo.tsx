/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useRouter } from "next/router";
import { siteMetadata } from "./SiteMetaData";

export const PageSeo = ({ title, description }: any) => {
    const router = useRouter();
    return (
        <Head>
            <title>{`${title} ${siteMetadata.title}`}</title>
            <meta name="LOVIE AURORA" content="follow, index" />
            <meta name="description" content={`${description} ${siteMetadata.description}`} />
            <meta
                property="og:url"
                content={`${siteMetadata.siteUrl}${router.asPath}`}
            />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteMetadata.title} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            <meta
                property="og:image"
                content={`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={siteMetadata.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta
                name="twitter:image"
                content={`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`}
            />
        </Head>
    );
};