'use client'
import Image from 'next/image'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';
import AOS from 'aos';


export default function Home() {

  const backgroundStyle = {
    backgroundImage: `url('/image/background.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  };
   const btnNormal = '#911002';
   const btnHover = '#A80720';
   const text = '#762B00';

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <main className='min-h-screen w-full absolute overflow-hidden'>

      <div class="h-screen w-full flex flex-row absolute justify-between">
    
        <div class="flex flex-col justify-between">

            <img
            data-aos="fade-down-right"
            data-aos-duration="1000"
            class="h-[150px] w-auto lg:h-[250px]"
            src="/image/Kiri atas.png"/>
            <img
            data-aos="fade-up-right"
            data-aos-duration="1000"
            class="h-[150px] w-auto lg:h-[250px]"
            src="/image/Kiri Bawah.png"/>

        </div>

        <div class="flex flex-col justify-between">

            <img
            data-aos="fade-down-left"
            data-aos-duration="1000"
            class="h-[150px] w-auto lg:h-[250px]"
            src="/image/Kanan Atas.png"/>
            <img
            data-aos="fade-up-left"
            data-aos-duration="1000"
            class="h-[150px] w-auto lg:h-[250px]"
            src="/image/kanan bawah asset.png"/>

        </div>

      </div>

      <div 
      className='min-h-screen w-full flex items-center justify-center'
      style={backgroundStyle}>

        <div
        data-aos="zoom-in"
        data-aos-duration="1000">
          <div 
          className='hidden absolute w-[440px] my-40 text-center items-center justify-center ms-[400px] lg:flex lg:flex-col lg:flex-wrap'>
            <p className='text-3xl font-bold text-brown'
            style={{fontFamily: 'rock-bold', color:{text}}}>
              DAFTARKAN ATLET TERBAIKMU SEKARANG
            </p>
            <button
            className='btn-cust flex h-14 w-60 mt-5 items-center justify-center text-base font-bold hover:text-sm'>
              <a href='#'>DAFTAR SEKARANG</a>
            </button>
          </div>
          <img
          className='hidden h-[450px] lg:flex'
          src={'/image/Frame Desktop.png'}/>
        </div>

        <div
        className='flex justify-center items-center'
        data-aos="zoom-in"
        data-aos-duration="1000">
          <div 
          className='absolute text-center w-48 mt-52 lg:hidden'>
            <p className='text-brown font-bold'
            style={{fontFamily: 'rock-bold'}}>
              DAFTARKAN ATLET TERBAIKMU SEKARANG
            </p>
            <button 
            className='btn-cust mt-4 h-7 w-36 text-xs font-semibold hover:text-[10px]'>
              <a href='#'>DAFTAR SEKARANG</a>
            </button>
          </div>
          <img
          className='h-[450px] -mt-10 lg:hidden'
          src={'/image/Frame mobile.png'}/>
        </div>

      </div>

    </main>
  )
}
