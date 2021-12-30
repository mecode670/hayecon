import Header from './Header';
import Sidebar from './Sidebar';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main itemScope itemType='https://schema.org/WebSite'>
        {children}
      </main>
    </>
  );
};

export default Layout;
