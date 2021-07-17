import Navbar from '../components/Navbar'
import ColorSwitch from './ColorSwitch'
import Logo from './Logo'

export default function Header () {
  return (
    <>
      <header className='p-5 sticky top-0'>
        <div className='grid grid-flow-col grid-cols-5 items-center justify-center'>
          <Logo />
          <Navbar />
          <ColorSwitch />
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
