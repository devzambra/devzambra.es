import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { SOCIAL_NETWORKS } from '../constants/SOCIAL'

export default function Networks () {
  return (
    <div className='flex items-center justify-center'>
      {SOCIAL_NETWORKS.map(item => (
        <Link href={item.link} key={item.link}>
          <a className='mx-2' target='_blank' aria-label={item.link} rel='noreferrer'>
            <FontAwesomeIcon className='w-6 h-6 dark:text-white' icon={item.icon} />
          </a>
        </Link>
      ))}
    </div>
  )
}
