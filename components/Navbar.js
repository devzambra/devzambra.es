import Link from 'next/link'

export default function Navbar () {
  return (
    <nav className='flex items-center'>
      <ul className='text-center flex'>
        <li className='px-2 border-r-2 links'>
          <Link href='/' className='link'> Inicio </Link>
        </li>
        <li className='px-2 border-r-2 links'>
          <Link href='/blog' className='link'> Blog </Link>
        </li>
        <li className='px-2 border-r-2 links'>
          <Link href='/podcast' className='link'> Podcast </Link>
        </li>
        <li className='px-2 links'>
          <Link href='/about' className='link'> Sobre mí </Link>
        </li>
      </ul>
    </nav>
  )
}
