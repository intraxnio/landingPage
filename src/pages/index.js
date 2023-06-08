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
        <title>Micro Influencer Platform for Brands and Creators: Buzzreach</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Best Micro Influencer Platform for Brands and Content Creators in India. Hassle free
        Influencer Marketing for Marketers." />
        <meta content="Micro Influencer Platform for Brands and Creators: Buzzreach" property="og:title" />
        <meta content="Best Micro Influencer Platform for Brands and Content Creators in India. Hassle free
        Influencer Marketing for Marketers." property="og:description" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.buzzreach.in" />
        <meta name="google-site-verification" content="UI3gs4PUXaE4yjtRrG71nJUQ-yWwyzyEDN-TDwSp0M0" />
       
        
      </Head>
      <Navbar />
      <BodyMain />
      <BodyBlocks />
      <BodyCards />
      <Accordian />
      <Footer />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LDVV1R1TVX"></Script>

        <Script id="analytics-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){
                dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-LDVV1R1TVX');`}}></Script>
         </>
  )
}
