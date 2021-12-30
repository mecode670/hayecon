import Header from './Header';
import contextCreate from '../context/contextCreate';
import Sidebar from './Sidebar';
import { useContext } from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  const context = useContext(contextCreate);
  const { isShow } = context;
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='favicon.ico' />
        <link rel='apple-touch-icon' href='/apple_touch_icon.png' />
        <meta
          name='description'
          content='Join papergang with paepr. enjoy with the world, share it with others. Be Happy Like You Are'
        />
      </Head>
      <Header />
      <Sidebar />
      <main
        className={isShow ? 'blur-lg z-10' : ''}
        itemScope
        itemType='https://schema.org/WebSite'
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
