import { POSTS } from '../constants/POSTS'

import Link from 'next/link'
import { convertDate, getReadingTime } from '../utils/timeUtils'

export default function PostList () {
  return (
    <>
      <h2>Últimos artículos 📄</h2>
      {POSTS.map(post => (
        <Link href={`/blog/${post.slug}`} as={`/blog/${post.slug}`} key={post.slug}>
          <a>
            <article
              className='flex flex-col justify-start rounded p-5 my-6 hover:bg-gray-400 cursor-pointer bg-gray-300 dark:hover:bg-gray-800 dark:bg-gray-700'
            >
              <h3>{post.title}</h3>
              <small>🗓 {convertDate(post.createdAt)} - ⏳ {getReadingTime(post.readingTime)}
              </small>
              <p>{post.description}</p>
            </article>
          </a>
        </Link>
      ))}
    </>
  )
}
