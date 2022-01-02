import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
export default function Home() {
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
      <section className='mt-32 px-4 lg:px-8 flex justify-center lg:justify-start'>
        <div className='text-center lg:text-left'>
          <h1 className='text-4xl mb-5 text-paper'>
            <span className={'font-mono'}>Welcome To </span>

            <br className='block lg:hidden' />
            <span className={'font-giga relative top-3 md:top-0'}>Hayecon</span>
          </h1>
          <p className='mt-6 text-gray-600 max-w-xl'>
            Here you get to see all the blogs free and ad-free. blogs are really
            helpful to some, maybe you need something, checkout our blogs.
          </p>
          <div className='mt-52 md:mt-80 lg:mt-8 flex justify-center lg:justify-start'>
            <div className='rounded-2xl shadow-lg'>
              <Link href='/blogs'>
                <a className='flex px-10 py-4  text-base font-medium rounded-2xl text-white bg-paper hover:bg-white shadow-lg hover:text-paper transition duration-500 md:text-lg'>
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
