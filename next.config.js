/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    SANITY_PROJECT_ID: "7ncnu8yj",
    SANITY_CONFIG: "production"
  }
}

module.exports = nextConfig
