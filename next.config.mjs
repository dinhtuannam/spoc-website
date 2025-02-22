/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.matsaigon.com',
            },
        ],
        domains: ['res.cloudinary.com', 'www.matsaigon.com'],
    },
};

export default nextConfig;
