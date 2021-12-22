import { useContext } from 'react';
import contextCreate from '../context/contextCreate';

const Sidebar = (props) => {
  const context = useContext(contextCreate);
  const { isShow } = context;
  return <div className={`${isShow ? 'visible' : 'hidden'}`}>gefef</div>;
};

export default Sidebar;
