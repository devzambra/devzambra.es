import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

export default function Logo () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <div className='flex justify-center items-center'>
        <FontAwesomeIcon
          onClick={toggleMenu} icon={faBars}
          className='sm:hidden w-8 h-8 mx-2 text-gray-600 dark:text-white'
        />
        <div className='logo flex sm:hidden'><Image alt="devzambra" src='/assets/icons/logo.svg' width={40} height={40} /></div>
        <div className='hidden sm:flex'><Image alt="devzambra" src='/assets/icons/logo.svg' width={40} height={40} /></div>
        <h4 className='hidden sm:block text-gray-700 ml-2'>devzambra</h4>
      </div>
      <MobileMenu toggleMenu={toggleMenu} visible={isMenuOpen} />
      <style jsx>{`
        .logo {
            position: absolute;
            right: calc(50% - 20px);
        }
      `}</style>
    </>
  )
}
