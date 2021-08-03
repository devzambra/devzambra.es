import Image from 'next/image'
import { PODCAST_NETWORKS } from '../constants/PODCASTS'

export default function PodcastNetworks () {
  return (
    <ul className='flex justify-start items-center flex-wrap my-4'>
      {PODCAST_NETWORKS.map(network => (
        <li key={network.url} className={'mr-4 border-2 p-2 rounded-lg flex justify-start items-center my-2 ' + network.borderColor}>
          <a className='flex justify-start items-center' href={network.url} target='_blank' aria-label={network.url} rel='noreferrer'>
            <Image src={`/assets/icons/${network.icon}`} alt={network.alt} width={32} height={32} />
            <span className='ml-2'>{network.alt}</span>
          </a>
        </li>
      ))}
      <style jsx>{`
        a {
            padding: 0;
            margin: 0;
            line-height: 1rem;
            font-size: 1rem;
        }  
        `}
      </style>
    </ul>
  )
}
