import '../styles/globals.css';
import '../components/Layout/layout';


function MyApp({ Component, pageProps }) {
  return{ <Layout>
    <Component {...pageProps} />
    </Layout>
  }
}

export default MyApp
