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
        <div className={styles.logo}>
          <Link href='/'>
            <a>
              <Image
                src='/icon_dark_vercel.svg'
                height={size}
                width={size}
                alt='icon'
              />
            </a>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <div className={styles.links}>
            <Link href='/continue'>
              <a>
                <button className={styles.btn}>Continue</button>
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
