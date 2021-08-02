import Link from 'next/link'
import { frontMatter as blogPosts } from '../pages/blog/*.mdx'
import { compareDates, convertDate, getReadingTime } from '../utils/timeUtils'


export default function PostList ({ limit }) {
  let posts = blogPosts.sort((a, b) => compareDates(a.publishedAt, b.publishedAt))
  if (limit) {
    posts = blogPosts.slice(0, limit)
  }
  return (
    <>
      <h3 className='text-gray-600'>{limit ? 'Últimos artículos' : 'Todos los artículos'}</h3>
      {posts.map(frontMatter => {
        const slug = frontMatter.__resourcePath
          .replace('.mdx', '')
        return (
          <Link href={`/${slug}`} as={`/${slug}`} key={slug}>
            <a>
              <article
                className={`
                flex 
                flex-col 
                justify-start 
                rounded-xl 
                shadow-md 
                p-5 
                my-6 
                cursor-pointer 
                bg-gray-100 
                dark:bg-gray-700
                hover:bg-gray-300
                dark:hover:bg-gray-500
                `}
              >
                <h4 className='text-green-600'>{frontMatter.title}</h4>
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
      `}
      </style>
    </>
  )
}
