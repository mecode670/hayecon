import Header from './Header';
import Sidebar from './Sidebar';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
