import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import Sidebar from './Sidebar';
import contextCreate from '../context/contextCreate.js';
import Dropdown from './Dropdown';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';

const Header = () => {
  const context = useContext(contextCreate);
  const { isShow, setIsShow } = context;
  const size = '40px';
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    setWindowWidth(screen.width);
  }, []);
  const onClickf9eh424 = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <header className='select-none sticky top-0 z-20 flex p-5 justify-between m-1 backdrop-filter backdrop-blur-lg border-b-2 border-gray-200'>
        <div className='md:ml-20 ml-2 flex cursor-pointer'>
          <Link href='/'>
            <a>
              <Image src='/paepr.svg' height={size} width={size} alt='logo' />
            </a>
          </Link>
        </div>
        <nav
          itemScope
          itemType='https://schema.org/SiteNavigationElement'
          className='flex mr-5 transition duration-300 '
        >
          <div className='flex gap-5'>
            <Link href='/continue' itemProp='url'>
              <a>
                <button className='cursor-pointer bg-white border-2 border-black rounded-paper p-3 font-readex transition ease-in-out duration-500 hover:bg-paper hover:text-white  '>
                  Continue
                </button>
              </a>
            </Link>
            {windowWidth > 500 ? (
              <div>
                <Dropdown />
              </div>
            ) : (
              ''
            )}

            {windowWidth > 500 ? (
              ''
            ) : (
              <button
                onClick={onClickf9eh424}
                className={'flex mt-4'}
                aria-label='Navigation bar full screen'
              >
                {isShow ? (
                  <XIcon className={'h-5 w-5'} />
                ) : (
                  <MenuAlt3Icon className={'h-5 w-5'} />
                )}
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
