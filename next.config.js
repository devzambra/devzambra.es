const withMDX = require('@next/mdx')

module.exports = {
  images: {
    domains: ['d3t3ozftmdmh3i.cloudfront.net']
  },
  plugins: [
    withMDX({
      pageExtensions: ['js', 'mdx']
    })]
}
