import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar () {
  const router = useRouter()

  return (
    <nav className='hidden sm:flex items-center justify-center col-span-3'>
      <ul className='text-center flex'>
        <li className='font-bold text-gray-700 p-2'>
          <Link href='/' className='link'>
            <a className={router.pathname === '/' ? 'active' : ''}>INICIO</a>
          </Link>
        </li>
        <li className='font-bold text-gray-700 p-2'>
          <Link href='/blog' className='link'>
            <a className={router.pathname.startsWith('/blog') ? 'active' : ''}>BLOG</a>
          </Link>
        </li>
        <li className='font-bold text-gray-700 p-2'>
          <Link href='/podcast' className='link'>
            <a className={router.pathname.startsWith('/podcast') ? 'active' : ''}>PODCAST</a>
          </Link>
        </li>
        <li className='font-bold text-gray-700 p-2'>
          <a href='https://www.youtube.com/channel/UCtvgF3KrDStweE50YqzLJSg?view_as=subscriber' target='_blank' className='link' rel='noreferrer'>
            VIDEOS
          </a>
        </li>
      </ul>
    </nav>
  )
}
