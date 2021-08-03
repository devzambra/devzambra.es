import Image from 'next/image'

export default function NotFound () {
  return (
    <main className='mb-auto sm:flex sm:justify-center sm:items-center grid grid-cols-1'>
      <span className='flex flex-col justify-center sm:flex-row sm:justify-around items-center'>
        <Image alt='Not Found' src='/assets/images/cat.png' width='200' height='200' />
        <h1 className='sm:w-1/2 text-center'>Oops! No hemos encontrado lo que buscabas...</h1>
      </span>
      <style jsx>{`
        main {
            height: calc(100vh - 192px - 5rem)
        }
    `}</style>
    </main>
  )
}
