import Header from './Header';
import contextCreate from '../context/contextCreate';
import Sidebar from './Sidebar';
import { useContext } from 'react';

const Layout = ({ children }) => {
  const context = useContext(contextCreate);
  const { isShow } = context;
  return (
    <>
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
