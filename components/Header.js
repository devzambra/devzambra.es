import Navbar from '../components/Navbar'
import ColorSwitch from './ColorSwitch'

export default function Header () {
  return (
    <>
      <header className='py-5 sticky top-0 bg-white'>
        <div className='container flex justify-between items-center'>
          <ColorSwitch />
          <Navbar />
        </div>
      </header>
      <style jsx>{`
        header {
            backdrop-filter: blur(6px);
            opacity: .9;
            z-index: 99;
        }
        `}
      </style>
    </>
  )
}
