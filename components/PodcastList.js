import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AudioPlayer from './AudioPlayer'

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
      {mode === 'full'
        ? (
          <h2 className='flex items-center'>Aquí se habla de Código 🎙 </h2>
          )
        : (
          <h3 className='text-gray-600'>Último podcast</h3>
          )}
      {mode === 'full' && (
        <div className='my-6'>
          <AudioPlayer audioItem={active} />
        </div>
      )}
      {episodes.map(item => (
        <article
          key={item.guid}
          className={`
          flex 
          flex-col 
          justify-between 
          items-center 
          rounded 
          rounded-xl 
          p-5 
          my-6 
          cursor-pointer 
          bg-gray-100 
          shadow-md 
          dark:bg-gray-700
          hover:bg-gray-300
          dark:hover:bg-gray-500
          `}
          onClick={() => toggleActive(item)}
        >
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <div className='sm:mb-0 mb-4 flex justify-center'>
              <Image alt={item.title} src={item.itunes.image} width={100} height={100} />
            </div>
            <div className='ml-4 w-full sm:w-5/6'>
              <strong className='dark:text-white'>{item.title}</strong>
              {mode === 'full' && <p className='description'>{item.contentSnippet}</p>}
            </div>
          </div>
        </article>
      ))}
      <style jsx>{`
        .description {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      `}
      </style>
    </div>
  )
}
