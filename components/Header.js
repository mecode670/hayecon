import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  const size = '40px';
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Readex+Pro&display=swap'
          rel='stylesheet'
        />
      </Head>
      <header className='select-none sticky top-0 flex p-5 justify-between m-2 backdrop-filter backdrop-blur-lg border-1 border-gray-400'>
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
        <nav className='flex mr-5 transition duration-300'>
          <div className=''>
            <Link href='/continue'>
              <a>
                <button className='cursor-pointer bg-white border-2 border-black rounded-paper p-3 font-readex transition ease-in-out duration-500 hover:bg-paper hover:text-white  '>
                  Continue
                </button>
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
