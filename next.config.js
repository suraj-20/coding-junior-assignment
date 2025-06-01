/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add trailingSlash for better routing handling
  trailingSlash: true,
  
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    unoptimized: true, // Disable image optimization for static export
  },
  output: "export",
  
  // Add basePath if you're not deploying to root domain
  // basePath: '',
  
  // Enable this if you need to handle dynamic routes in static export
  // generateStaticParams: true,
};

module.exports = nextConfig;