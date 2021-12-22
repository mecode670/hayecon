import Layout from '../components/Layout';
import '../styles/globals.css';
import CreateState from '../context/createState';
function MyApp({ Component, pageProps }) {
  return (
    <CreateState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CreateState>
  );
}

export default MyApp;
