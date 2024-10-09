/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "n6ex5dyrtzbs9rq2.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
