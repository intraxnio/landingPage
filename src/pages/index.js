import Head from 'next/head'
import Navbar from '@/components/Navbar'
import BodyMain from '@/components/BodyMain'
import Accordian from '@/components/Accordian'
import Footer from '@/components/Footer'
import BodyBlocks from '@/components/BodyBlocks'
import BodyCards from '@/components/BodyCards'
import Script from 'next/script'
import { useEffect } from 'react';

export default function Home() {

  // useEffect(() => {
  //   const pathArray = window.location.pathname.split('/');
  //   const shortcode = pathArray[pathArray.length - 1];
    
  //   // List of paths that trigger redirection
  //   const redirectPaths = ['/contact', '/pricing'];
    
  //   // Check if the path is in the list of paths that trigger redirection
  //   if (shortcode && shortcode !== "" && redirectPaths.includes(`/${shortcode}`)) {
  //     // Redirect to the corresponding URL on the app.linck.one subdomain
  //     // const redirectUrl = `https://app.linck.one/${shortcode}`;
  //     // window.location.href = redirectUrl;
  //   } else {
  //     // No redirection needed, stay on the current page (www.linck.one)
  //     console.log("No redirection needed, staying on the current page.");
  //     const redirectUrl = `https://app.linck.one/${shortcode}`;
  //     window.location.href = redirectUrl;
  //   }
    
  // }, []);


  return (
    
    <>
      <Head>
        <title>Short link Generator: linck</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Create Free short links, link-in-bio pages and fast URL Shortener online. Short URL links from Facebook, Instagram, YouTube, LinkedIn and WhatsApp." />
        <meta content="Short link Generator: linck" property="og:title" />
        <meta content="Create Free short links, link-in-bio pages and fast URL Shortener online. Short URL links from Facebook, Instagram, YouTube, LinkedIn and WhatsApp." property="og:description" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.broadreach.in" />
        <meta name="google-site-verification" content="aiicCQWh3cvzxmXsmX1XJSXD1nmXnhbrTvovzK1c7vo" />
       
        
      </Head>
      <Navbar />
      <BodyMain />
      <BodyBlocks />
      <BodyCards />
      <Accordian />
      <Footer />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D0SY7XGY0L"></Script>

        <Script id="analytics-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){
                dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-D0SY7XGY0L');`}}></Script>

         </>
  )
}
