/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    API_PATH : 'http://127.0.0.1:8083'
  }
};

module.exports = nextConfig;
