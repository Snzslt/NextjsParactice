import '../styles/globals.css';
import '../components/L'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
    </Layout>
}

export default MyApp
