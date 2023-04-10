import '@/styles/bootstrap.css'
import '@/styles/own.css'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" ></Script>

    </>
  )


}
