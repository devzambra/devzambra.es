import Link from 'next/link'

export default function Navbar () {
  return (
    <nav className='flex items-center'>
      <ul className='text-center flex'>
        <li className='p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700'>
          <Link href='/' className='link'> Inicio </Link>
        </li>
        <li className='p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700'>
          <Link href='/blog' className='link'> Blog </Link>
        </li>
        <li className='p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700'>
          <Link href='/podcast' className='link'> Podcast </Link>
        </li>
        <li className='p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700'>
          <Link href='/videos' className='link'> Videos </Link>
        </li>
      </ul>
    </nav>
  )
}
