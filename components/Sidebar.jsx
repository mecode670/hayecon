import { useContext } from 'react';
import contextCreate from '../context/contextCreate';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

const Sidebar = (props) => {
  // {`${isShow ? 'visible' : 'hidden'}`}
  const context = useContext(contextCreate);
  const { isShow, setIsShow } = context;
  return (
    <>
      <div
        className={`${
          isShow ? 'visible' : 'hidden'
        } flex fixed w-full items-center justify-between px-6 h-16 text-gray-700 z-10`}
      >
        <aside
          className={`transform top-60 bg-opacity-30 left-14 w-64 rounded-3xl fixed h-64 overflow-auto ease-in-out transition-all duration-1000 backdrop-filter backdrop-blur-lg bg-gray-400 z-30 ${
            isShow ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className={'flex  mt-20 flex-col items-center'}>
            <Link href='/contact' itemScope itemType='https://schema.org/URL'>
              <a>
                <button
                  itemProp='url'
                  className='cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white mt-6 border-2 border-black rounded-paper p-3 font-readex transition ease-in-out duration-200 hover:bg-paper hover:text-white'
                >
                  Contact
                </button>
              </a>
            </Link>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
