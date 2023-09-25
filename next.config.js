/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
// const repository = "https://timesky82.github.io/timesky-react/";
const nextConfig = {
    reactStrictMode: false,
    // basePath: "/timesky82.github.io/timesky-react/",
    // assetPrefix: !debug ? `/${repository}/` : "",
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true
    }
};


module.exports = nextConfig
