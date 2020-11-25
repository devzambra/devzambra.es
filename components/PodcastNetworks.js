import Image from 'next/image'
import { PODCAST_NETWORKS } from '../constants/PODCASTS'

export default function PodcastNetworks () {
  return (
    <div className='flex justify-between items-center bg-gray-200 px-4 py-2 rounded-t-3xl shadow-lg p-2'>
      {PODCAST_NETWORKS.map(network => (
        <a href={network.url} key={network.url} target='_blank' rel='noreferrer'>
          <Image src={`/assets/icons/${network.icon}`} alt={network.alt} width={32} height={32} />
        </a>
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
    </div>
  )
}
