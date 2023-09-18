/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "https://timesky82.github.io/timesky-react";
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: !debug ? `/${repository}/` : "",
    trailingSlash: true,
    output: 'export',
};
// export const prefix =
//     process.env.NODE_ENV === "production"
//         ? "https://timesky82.github.io/timesky-react"
//         : "";

module.exports = nextConfig
