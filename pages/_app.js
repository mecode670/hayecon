import Layout from '../components/Layout';
import '../styles/globals.css';
import createState from '../context/createState';
function MyApp({ Component, pageProps }) {
  return (
    <createState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </createState>
  );
}

export default MyApp;
