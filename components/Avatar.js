import Image from 'next/image'

const Avatar = () => {
  return (
    <div className='w-24 h-24 sm:w-40 sm:h-40 relative'>
      <Image
        className='rounded rounded-full' src='/assets/images/avatar.png' layout='fill' objectFit='fill'
      />
    </div>
  )
}

export default Avatar
