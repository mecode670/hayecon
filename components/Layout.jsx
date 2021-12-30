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
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
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
