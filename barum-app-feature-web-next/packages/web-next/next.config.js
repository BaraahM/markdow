/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@udecode/plate',
    '@udecode/plate-ai',
    '@udecode/plate-basic-elements',
    '@udecode/plate-basic-marks',
  ],
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
//22