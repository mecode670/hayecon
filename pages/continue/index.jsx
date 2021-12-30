import Head from 'next/head';
const index = () => {
  return (
    <>
      <Head>
        <meta property='og:url' content='https://paepr.vercel.app/continue' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Continue To Paepr' />
        <meta
          property='og:description'
          content='Start Your Paper Now, By Continuing'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/mecode670/image/upload/v1640865597/paepr/paepr-big_ypaerg.png'
        />
      </Head>
      <h1 className='font-montserrat'>Login</h1>
    </>
  );
};

export default index;
