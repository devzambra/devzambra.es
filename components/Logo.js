import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Logo () {
  return (
    <>
      <div className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faBars} className='sm:hidden w-8 h-8 mx-2 dark:text-white' />
        <Image src='/assets/icons/logo.svg' width={40} height={40} />
        <h4 className='hidden sm:block text-gray-700 ml-2'>devzambra</h4>
      </div>
    </>
  )
}
