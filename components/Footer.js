import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer () {
  const socialNetworks = [
    { icon: faGithub, link: 'https://github.com/devzambra' },
    { icon: faTwitter, link: 'https://twitter.com/devzambra' },
    { icon: faInstagram, link: 'https://www.instagram.com/devzambra/' },
    { icon: faYoutube, link: 'https://www.youtube.com/channel/UCtvgF3KrDStweE50YqzLJSg?view_as=subscriber' },
    { icon: faEnvelope, link: 'mailto:dev.mzambrano@gmail.com' }
  ]

  return (
    <footer className='text-center'>
      <div className='flex items-center justify-center'>
        {socialNetworks.map(item => (
          <Link href={item.link} key={item.link}>
            <a className='mx-2' target='_blank'>
              <FontAwesomeIcon className='w-8 h-8 dark:text-white' icon={item.icon} />
            </a>
          </Link>
        ))}
      </div>
      <div className='p-6'>
        <p>Hecho por <Link href='/'>Manuel Zambrano</Link> © 2020</p>
      </div>
    </footer>
  )
}
