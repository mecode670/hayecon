import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

import Link from 'next/link';
export default function Home() {
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    setWindowWidth(screen.width);
  }, []);
  return (
    <>
      <Head>
        <title>Home - Hayecon</title>
        <meta property='og:url' content='https://hayecon.vercel.app' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Hayecon' />
        <meta
          property='og:description'
          content='Hey from hayecon, join us because we never gonna give you up, never gonna let you down and desert you'
        />
        <meta property='og:image:width' content='1500' />
        <meta property='og:image:height' content='1500' />

        <meta
          property='og:image'
          content='https://res.cloudinary.com/mecode670/image/upload/v1640970759/paepr/logo_paepr_2_qvx7y7.png'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@600&display=swap'
          rel='stylesheet'
        />

        <link href='favicon.ico' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='zacc_X_' />
        <meta name='twitter:title' content='Hayecon' />
        <meta
          name='twitter:description'
          content='Hey from hayecon, join us because we never gonna give you up, never gonna let you down and desert you'
        />
      </Head>
      <section className='mt-32 px-4 lg:px-8'>
        <div className='text-center lg:text-left'>
          {windowWidth > 1200 ? (
            <>
              <h1 className='font-giga text-4xl text-paper'>
                <span className={'font-sans mr-2'}>Welcome to</span>
                <span className={'font-giga'}>Hayecon</span>
              </h1>
              <p className='mt-6 text-gray-600 max-w-xl'>
                Here you get to see all the blogs free and ad-free. blogs are
                really helpful to some, maybe you need something, checkout our
                blogs.
              </p>
            </>
          ) : (
            <h1 className='relative top-32 md:top-10  md:mb-56 lg:mb-0 font-giga text-4xl text-paper'>
              Hayecon
            </h1>
          )}
          <div className='mt-96 md:mt-8 flex justify-center lg:justify-start'>
            <div className='rounded-2xl shadow-lg'>
              <Link href='/blogs'>
                <a className='flex px-10 py-4 text-base font-medium rounded-2xl text-white bg-paper hover:bg-white shadow-lg hover:text-paper transition duration-500 md:text-lg'>
                  Explore Blogs
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
