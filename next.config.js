/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's3-alpha-sig.figma.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'www.ikea.com',
            port: '',
            pathname: '/**',
          },
        ],
      }
}

module.exports = nextConfig
