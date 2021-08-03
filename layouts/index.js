import { convertDate, getReadingTime } from '../utils/timeUtils'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const Layout = ({ children, frontMatter }) => {
  return (
    <div className='blog'>
      <Link href='/blog'>
        <a className='text-xl flex justify-start items-center'>
          <FontAwesomeIcon icon={faChevronLeft} className='w-6 h-6 mr-2' />
          <span>Volver a Todos los artículos</span>
        </a>
      </Link>
      <h1 className='mt-10 mb-4 title'>{frontMatter.title}</h1>
      <div className='info-container sm:flex justify-between grid grid-col-1'>
        <span className='info'>🗓 {convertDate(frontMatter.publishedAt)} - ⏳ {getReadingTime(frontMatter.readingTime.time)}</span>
        <small>
          <a className='text-green-500 dark:text-green-500' href={frontMatter.github} target='_blank' rel='noreferrer'>¿Hay una errata? Edita este artículo.</a>
        </small>
      </div>
      {children}
      <style jsx>{`
    .info-container {
      margin-bottom: 1.5rem;
    }
    `}
      </style>
    </div>
  )
}

export default Layout
