import Image from 'next/image'

export default function VideosList ({ videos, mode }) {
  const commonClasses = 'flex flex-col justify-center items-center'
  const classname = mode === 'full' ? 'sm:grid sm:grid-cols-3 sm:col-gap-2 ' + commonClasses : commonClasses
  return (
    <>
      {mode === 'full'
        ? (
          <h2 className='flex items-center mb-4'>Videos de Youtube </h2>
          )
        : (
          <h3 className='text-gray-600'>Último video</h3>
          )}
      <section className={classname}>
        {videos.map(item => (
          <a
            key={item.id}
            className='flex my-2'
            href={`https://youtube.com/watch?v=${item.id}`}
            target='_blank'
            aria-label={item.title} rel='noreferrer'
          >
            <Image
              alt={item.title} src={item.images.medium.url} width={item.images.medium.width}
              height={item.images.medium.height}
            />
          </a>
        ))}
      </section>
    </>
  )
}
