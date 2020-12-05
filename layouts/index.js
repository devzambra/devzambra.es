import { convertDate, getReadingTime } from '../utils/timeUtils'

const Layout = ({ children, frontMatter }) => {
  return (
    <div className='blog'>
      <h1 className='mt-10 mb-4 title'>{frontMatter.title}</h1>

      <div className='sm:flex sm:justify-between grid grid-col-1'>
        <span className='info sm:mb-10 mb-0'>🗓 {convertDate(frontMatter.publishedAt)} - ⏳ {getReadingTime(frontMatter.readingTime.time)}</span>
        <small className='sm:mb-0 mb-10'>
          <a className='text-green-500 dark:text-green-500' href={frontMatter.github} target='_blank' rel='noreferrer'>¿Hay una errata? Edita este artículo.</a>
        </small>
      </div>
      {children}
    </div>
  )
}

export default Layout
