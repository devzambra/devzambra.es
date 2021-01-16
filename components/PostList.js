import { frontMatter as blogPosts } from '../pages/blog/*.mdx'

import Link from 'next/link'
import { convertDate, getReadingTime } from '../utils/timeUtils'

export default function PostList ({ limit }) {
  let posts = blogPosts
  if (limit) {
    posts = blogPosts.slice(0, limit)
  }
  return (
    <>
      <h2>Últimos artículos 📄</h2>
      {posts.map(frontMatter => {
        const slug = frontMatter.__resourcePath
          .replace('.mdx', '')
        return (
          <Link href={`/${slug}`} as={`/${slug}`} key={slug}>
            <a>
              <article
                className='flex flex-col justify-start rounded p-5 my-6 hover:bg-gray-400 cursor-pointer bg-gray-300 dark:hover:bg-gray-800 dark:bg-gray-700'
              >
                <h3>{frontMatter.title}</h3>
                <small>🗓 {convertDate(frontMatter.publishedAt)} - ⏳ {getReadingTime(frontMatter.readingTime.time)}
                </small>
                <p>{frontMatter.description}</p>
              </article>
            </a>
          </Link>
        )
      })}
      <style jsx>{`
        .description {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </>
  )
}
