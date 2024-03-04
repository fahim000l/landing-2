import "@/styles/globals.css";

// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { useEffect } from "react";
import React from 'react'

export default function App({ Component, pageProps }) {


  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: false
  //   })
  // }, [])


  return <Component {...pageProps} />;
}
