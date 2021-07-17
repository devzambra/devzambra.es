import Image from 'next/image'

export default function Logo () {
  return (
    <div className='flex justify-center items-center'>
      <Image src='/assets/icons/logo.svg' width={40} height={40} />
      <h4 className='text-gray-700 ml-2'>devzambra</h4>
    </div>
  )
}
