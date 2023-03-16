/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: ["static.vecteezy.com", "images.unsplash.com", "links.papareact.com"]
  }
}

module.exports = nextConfig
