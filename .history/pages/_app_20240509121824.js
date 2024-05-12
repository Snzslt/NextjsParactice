import '../styles/globals.css';
import '../components'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
    </Layout>
}

export default MyApp
