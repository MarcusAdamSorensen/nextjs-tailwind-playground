import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen overflow-y-hidden bg-slate-50">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
