
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import AudioPlayer from './AudioPlayer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

export default function PodcastList ({ episodes, mode }) {
  const router = useRouter()

  const getQueryItem = () => {
    if (router.query.id) {
      const item = episodes.find(i => i.guid === router.query.id)

      if (item) {
        return item
      }
    }
    return null
  }

  const [active, setActive] = useState(getQueryItem() || episodes[0])

  const toggleActive = (item) => {
    if (mode === 'full') {
      setActive(item)

      const audio = document.querySelector('audio')
      audio.src = item.enclosure.url
      audio.load()
    } else {
      router.push(`/podcast?id=${item.guid}`)
    }
  }

  return (
    <div>
      {mode === 'full' ? (<h3 className='flex items-center'>Aquí se habla de Código <FontAwesomeIcon icon={faTerminal} className='ml-2 w-8 h-8 dark:text-white' /> </h3>) : (<h4>Podcast 📡</h4>)}
      {mode === 'full' && (<AudioPlayer audioItem={active} />)}
      {episodes.map(item => (
        <article
          key={item.guid}
          className='flex flex-col justify-between items-center rounded shadow-lg p-5 my-5 hover:shadow-xl dark:bg-gray-900'
          onClick={() => toggleActive(item)}
        >
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <div className='sm:mb-0 mb-4 flex justify-center'>
              <Image src={item.itunes.image} width={100} height={100} />
            </div>
            <div className='ml-4 w-full sm:w-5/6'>
              <strong className='dark:text-white'>{item.title}</strong>
              {mode === 'full' && <p className='description'>{item.contentSnippet}</p>}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
