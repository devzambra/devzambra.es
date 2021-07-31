import Head from 'next/head'
import Header from '../components/Header'
import '../styles/prism.css'
import '../styles/tailwind.css'
import '../styles/x-globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>devzambra | Frontend Developer</title>
        <meta name='description' content='Blog personal con artículos tecnológicos y de programación' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div style={{ zIndex: 999 }} className='bg-white w-4/5 absolute inset-0 h-screen shadow-xl' />
      <Header />
      <div className='container flex flex-col justify-between px-3'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
