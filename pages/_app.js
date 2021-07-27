import Head from 'next/head'
import Footer from '../components/Footer'
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
      <div className='container flex flex-col min-h-screen justify-between px-3'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
