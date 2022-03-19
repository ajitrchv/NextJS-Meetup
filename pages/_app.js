import '../styles/globals.css'
import Layout from '../components/layout/Layout'
//import MainNavigation from '../components/layout/MainNavigation';
function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
