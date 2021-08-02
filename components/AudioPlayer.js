import PodcastNetworks from './PodcastNetworks'

const AudioPlayer = ({ audioItem }) => {
  return (
    <>
      <section className='rounded-b-3xl bg-transparent flex flex-col w-full justify-between items-start h-auto'>
        <h4 className='text-gray-600 dark:text-white m-0'>Reproduciendo ahora</h4>
        <p className='text-gray-500 dark:text-white'>{audioItem.title}</p>
        <audio controls className='flex w-full mt-4' controlsList='nodownload'>
          <source key={audioItem.guid} src={audioItem.enclosure.url} type={audioItem.enclosure.type} />
          Your browser does not support the audio element.
        </audio>
      </section>
      <style jsx>{`
        section {
            overflow: hidden;
            position: relative;
        }
        .background {
            position: absolute;
            overflow: hidden;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(90deg, rgba(23,25,3,1) 0%, rgba(51,55,77,1) 100%);

        }
        button {
            outline: none;
        }

        audio {
          background: transparent;
          outline: none;
        }
        `}
      </style>
    </>
  )
}

export default AudioPlayer
