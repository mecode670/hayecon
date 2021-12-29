import { useContext } from 'react';
import contextCreate from '../context/contextCreate';

const Sidebar = (props) => {
  const context = useContext(contextCreate);
  const { isShow } = context;
  return (
    <div className={`${isShow ? 'visible' : 'hidden'} `}>
      <ul>
        <li>Home</li>
        <li>Hello</li>
        <li>Hey</li>
      </ul>
    </div>
  );
};

export default Sidebar;
