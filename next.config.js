const withMdxEnhanced = require('next-mdx-enhanced')
const mdxPrism = require('mdx-prism')
const readingTime = require('reading-time')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [
    require('remark-slug'),
    [require('remark-autolink-headings'), {
      behavior: 'append'
    }],
    require('remark-code-titles')
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent)
    })
  }
})({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['d3t3ozftmdmh3i.cloudfront.net']
  }
})
