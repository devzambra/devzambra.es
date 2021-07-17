import '../styles/tailwind.css'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/prism.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>devzambra | Frontend Developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='container flex flex-col min-h-screen justify-between px-3'>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
