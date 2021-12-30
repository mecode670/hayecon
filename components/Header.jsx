import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import Sidebar from './Sidebar';
import contextCreate from '../context/contextCreate.js';

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
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Readex+Pro&display=swap'
          rel='stylesheet'
        />
      </Head>
      <header className='select-none sticky top-0 flex p-5 justify-between m-2 backdrop-filter backdrop-blur-lg border-b-2 border-gray-200'>
        <div className='md:ml-20 ml-2 flex cursor-pointer'>
          <Link href='/'>
            <a>
              <Image
                src='/vercel-icon-dark.svg'
                height={size}
                width={size}
                alt='icon'
              />
            </a>
          </Link>
        </div>
        <nav className='flex mr-5 transition duration-300 '>
          <div className='flex gap-5'>
            <Link href='/continue'>
              <a>
                <button className='cursor-pointer bg-white border-2 border-black rounded-paper p-3 font-readex transition ease-in-out duration-500 hover:bg-paper hover:text-white  '>
                  Continue
                </button>
              </a>
            </Link>
            <button
              onClick={onClickf9eh424}
              // className={`${
              //   windowWidth > 500 ? 'hidden' : 'visible'
              //  } flex mt-4`}
              className={`flex mt-4`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 8h16M4 16h16'
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
