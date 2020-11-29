const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['d3t3ozftmdmh3i.cloudfront.net']
  }
})
