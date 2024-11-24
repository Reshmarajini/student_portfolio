const { experimental_taintObjectReference } = require('react')

/** @type {import('next').NextConfig} */
const nextConfig = {
      experimental: {
instrumentationHook: true,
      },
    }
module.exports = nextConfig
