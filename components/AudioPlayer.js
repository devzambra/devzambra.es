import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

const AudioPlayer = ({ audioItem }) => {
  const [playing, setPlaying] = useState(false)

  const [currentStats, setCurrentStats] = useState(0)

  useEffect(() => {
    if (process.browser) {
      const audio = document.querySelector('audio')
      setPlaying(!audio.paused)
    }
  })

  useEffect(() => {
    let sub
    let audio

    if (process.browser) {
      audio = document.querySelector('audio')

      sub = audio.addEventListener('timeupdate', updateTime)
    }
    return () => {
      if (sub && audio) {
        audio.removeEventListener(updateTime)
      }
    }
  }, [])

  const updateTime = () => {
    if (process.browser) {
      const audio = document.querySelector('audio')
      const current = audio.currentTime

      setCurrentStats(current)
    }
  }

  const getPlayIcon = () => {
    return !playing ? faPlay : faPause
  }

  const playAudio = () => {
    if (process.browser) {
      const audio = document.querySelector('audio')

      if (playing) {
        audio.pause()
      } else {
        audio.play()
      }

      setPlaying(!playing)
    }
  }

  return (
    <>
      <section className='rounded-lg shadow-xl flex flex-col w-full mt-2 justify-between items-center'>
        <div className='background flex w-full justify-center items-center'>
          <audio controls className='flex w-full rounded hidden' controlsList='nodownload'>
            <source key={audioItem.guid} src={audioItem.enclosure.url} type={audioItem.enclosure.type} />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className='p-2  grid grid-cols-4 sm:flex w-full h-5/6 flex items-center'>
          <div className='sm:w-1/6 flex justify-center col-span-1'>
            <button className='bg-green-500 text-white sm:p-6 p-4 rounded-full' onClick={playAudio}>
              <FontAwesomeIcon className='w-8 h-8 dark:text-white' icon={getPlayIcon()} />
            </button>
          </div>
          <h3 className='text-white flex sm:w-5/6 col-span-3'>{audioItem.title}</h3>
        </div>
        <ProgressBar currentStats={{ current: currentStats, duration: audioItem.itunes.duration }} />
      </section>
      <style jsx>{`
        section {
            overflow: hidden;
            position: relative;
            height: 200px;
        }
        .background {
            position: absolute;
            overflow: hidden;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-image: url('/assets/images/podcast_background.jpg');
            background-size: cover;
            background-position: 50%;
            filter: blur(6px);
        }
        button {
            outline: none;
        }
        `}
      </style>
    </>
  )
}

export default AudioPlayer
