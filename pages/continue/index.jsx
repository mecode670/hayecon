import Head from 'next/head';
const index = () => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap'
          rel='stylesheet'
        />
        <meta property='og:url' content='https://paepr.vercel.app/continue' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Continue To Paepr' />
        <meta
          property='og:description'
          content='Start Your Paper Now, By Continuing'
        />
        <meta property='og:image' content='' />
      </Head>
      <h1 className='font-montserrat'>Login</h1>
    </>
  );
};

export default index;
