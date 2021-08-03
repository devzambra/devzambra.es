import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MobileMenu = ({ toggleMenu, visible }) => {
  const router = useRouter()
  return (
    <div style={{ zIndex: 999 }} className={'mobileMenuContainer sm:hidden w-full absolute inset-0 h-screen bg-gray-900 bg-opacity-70 ' + (visible ? 'mVisible' : 'mHidden')}>
      <div className={'bg-white dark:bg-gray-700 w-4/5 h-screen shadow-lg p-5 mobileMenu ' + (visible ? 'mVisible' : 'mHidden')}>
        <div className='grid grid-cols-4 justify-start items-start'>
          <div className='flex start items-center col-span-3'>
            <Image src='/assets/icons/logo.svg' width={40} height={40} />
            <h4 className='text-gray-700 ml-2'>devzambra</h4>
          </div>
          <FontAwesomeIcon
            onClick={toggleMenu} icon={faTimes}
            className='sm:hidden text-green-600 w-6 h-6 mx-2 dark:text-white justify-self-end'
          />
        </div>
        <nav className='flex items-center justify-start mt-8'>
          <ul className='text-left flex flex-col'>
            <li className='font-bold text-gray-700 p-2' onClick={toggleMenu}>
              <Link href='/' className='link'>
                <a className={router.pathname === '/' ? 'active' : ''}>INICIO</a>
              </Link>
            </li>
            <li className='font-bold text-gray-700 p-2' onClick={toggleMenu}>
              <Link href='/blog' className='link'>
                <a className={router.pathname.startsWith('/blog') ? 'active' : ''}>BLOG</a>
              </Link>
            </li>
            <li className='font-bold text-gray-700 p-2' onClick={toggleMenu}>
              <Link href='/podcast' className='link'>
                <a className={router.pathname.startsWith('/podcast') ? 'active' : ''}>PODCAST</a>
              </Link>
            </li>
            <li className='font-bold text-gray-700 p-2' onClick={toggleMenu}>
              <a href='https://www.youtube.com/channel/UCtvgF3KrDStweE50YqzLJSg?view_as=subscriber' target='_blank' className='link'>
                VIDEOS
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .mobileMenu {
          transition: transform 0.2s;
        }
        .mVisible {
          transform: translateX(0%);
        }
        .mHidden {
          transform: translateX(-100%);
        }
      `}
      </style>
    </div>
  )
}

export default MobileMenu
