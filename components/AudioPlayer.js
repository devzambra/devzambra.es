import PodcastNetworks from './PodcastNetworks'

const AudioPlayer = ({ audioItem }) => {
  return (
    <>
      <PodcastNetworks />
      <section className='rounded-b-3xl bg-transparent shadow-lg flex flex-col w-full justify-between items-center h-auto'>
        <div className='background flex w-full justify-center items-center' />
        <h2 className='text-white w-full h-full flex justify-center items-center p-6'>{audioItem.title}</h2>
        <audio controls className='flex w-full' controlsList='nodownload'>
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
