/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: isProd ? 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' : '',
    env: { NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL }
};

module.exports = nextConfig;
