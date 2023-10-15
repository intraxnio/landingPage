import Head from 'next/head'
import Navbar from '@/components/Navbar'
import BodyMain from '@/components/BodyMain'
import Accordian from '@/components/Accordian'
import Footer from '@/components/Footer'
import BodyBlocks from '@/components/BodyBlocks'
import BodyCards from '@/components/BodyCards'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Micro-Influencer Marketing: Boost Your Brand with BroadReach</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The Go-To Micro-Influencer Platform for Indian Brands and Creators. Simplify Influencer Marketing for Your Brand." />
        <meta content="Micro-Influencer Marketing: Boost Your Brand with BroadReach" property="og:title" />
        <meta content="The Go-To Micro-Influencer Platform for Indian Brands and Creators. Simplify Influencer Marketing for Your Brand." property="og:description" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.broadreach.in" />
        <meta name="google-site-verification" content="UI3gs4PUXaE4yjtRrG71nJUQ-yWwyzyEDN-TDwSp0M0" />
       
        
      </Head>
      <Navbar />
      <BodyMain />
      <BodyBlocks />
      <BodyCards />
      <Accordian />
      <Footer />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y5N98TTBKC"></Script>

        <Script id="analytics-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){
                dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-Y5N98TTBKC');`}}></Script>

         </>
  )
}
