import Networks from './Networks'
import Avatar from './Avatar'

export default function Intro () {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center'>
      <Avatar />
      <div className='flex flex-col justify-center items-center mx-2'>
        <h4 className='uppercase'>Mi nombre es</h4>
        <h3 className='uppercase font-bold text-green-600 dark:text-green-600'>
          Manuel Zambrano
        </h3>
        <h4 className='uppercase'>
          Frontend Developer
        </h4>
        <Networks />
      </div>
    </div>
  )
}
