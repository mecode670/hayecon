import { useContext } from 'react';
import contextCreate from '../context/contextCreate';

const Sidebar = (props) => {
  const context = useContext(contextCreate);
  const { isShow, setIsShow } = context;
  return (
    <div className={`${isShow ? 'visible' : 'hidden'} h-48`}>
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

export default Sidebar;
