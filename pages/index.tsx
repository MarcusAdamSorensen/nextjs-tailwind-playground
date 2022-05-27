import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Login from '../components/Login'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen flex-col overflow-y-auto">
      <Head>
        <title>Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-[100vh]">
        <Login />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default Home
