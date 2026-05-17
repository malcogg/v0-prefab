/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/tiny-homes/success",
        destination: "/escape-tiny-homes/success",
        permanent: true,
      },
      {
        source: "/tiny-homes/:slug",
        destination: "/escape-tiny-homes/:slug",
        permanent: true,
      },
      {
        source: "/tiny-homes",
        destination: "/escape-tiny-homes",
        permanent: true,
      },
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "prefabricated.co" }],
        destination: "https://www.prefabricated.co/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
