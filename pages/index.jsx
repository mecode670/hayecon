import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Paepr</title>
        <meta property='og:url' content='https://paepr.vercel.app' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Paepr' />
        <meta
          property='og:description'
          content='Join papergang with paepr. enjoy with the world, share it with others. Be Happy Like You Are'
        />
        <meta property='og:image:width' content='1500' />
        <meta property='og:image:height' content='1500' />

        <meta
          property='og:image'
          content='https://res.cloudinary.com/mecode670/image/upload/v1640865597/paepr/paepr-big_ypaerg.png'
        />

        <link href='favicon.ico' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='zacc_X_' />
        <meta name='twitter:title' content='Paepr' />
        <meta
          name='twitter:description'
          content='Join papergang with paepr. enjoy with the world, share it with others. Be Happy Like You Are'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <section className='mt-32 px-4 lg:px-8'>
        <div className='text-center lg:text-left'>
          <h1 className='text-4xl font-extrabold text-paper'>
            <span>Welcome To Paepr </span>
          </h1>
          <p className='mt-6 text-gray-600 max-w-xl'>
            Here you get to see all the blogs free and ad-free. blogs are really
            helpful to some, maybe you need something, checkout our blogs.
          </p>
          <div className='mt-60 md:mt-8 flex justify-center lg:justify-start'>
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
