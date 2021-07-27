import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { SOCIAL_NETWORKS } from '../constants/SOCIAL'

export default function Footer () {
  return (
    <footer className='text-center mt-20'>
      <div className='flex items-center justify-center'>
        {SOCIAL_NETWORKS.map(item => (
          <Link href={item.link} key={item.link}>
            <a className='mx-2' target='_blank' aria-label={item.link} rel='noreferrer'>
              <FontAwesomeIcon className='w-8 h-8 dark:text-white' icon={item.icon} />
            </a>
          </Link>
        ))}
      </div>
      <div className='p-6'>
        <p>Hecho por <Link href='/'><a className='text-green-900 dark:text-green-500'>Manuel Zambrano</a></Link> © { new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}
