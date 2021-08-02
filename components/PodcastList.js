import { useRouter } from 'next/router'
import { useState } from 'react'
import AudioPlayer from './AudioPlayer'
import PodcastNetworks from './PodcastNetworks'

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

  const baseStyles = mode === 'full' ? 'mb-auto sm:grid grid-flow-col sm:grid-cols-3 gap-10 mt-10' : ''

  return (
    <div className={baseStyles}>
      <section className='col-span-2'>
      {mode === 'full'
        ? (
          <h3 className='flex items-center text-gray-600'>Aquí se habla de Código </h3>
          )
        : (
          <h3 className='text-gray-600'>Último podcast</h3>
          )}
      {episodes.map(item => (
        <article
          key={item.guid}
          className={`
          flex 
          flex-col 
          justify-between 
          items-center 
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
            <div className='ml-4 w-full sm:w-5/6'>
              <strong className='text-green-600 dark:text-white'>{item.title}</strong>
              {mode === 'full' && <p className='description'>{item.contentSnippet}</p>}
            </div>
          </div>
        </article>
      ))}
      </section>
       {mode === 'full' && (
         <section className='flex flex-col justify-start align-center'>
          <h3 className='text-gray-600'>Escúchalos en</h3>
          <div className='flex-1'>
            <PodcastNetworks />
          </div> 
          <div className='my-6'>
            <AudioPlayer audioItem={active} />
          </div>
          </section>
        )}
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
