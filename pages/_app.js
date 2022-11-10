import { Router } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../components/layout";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useRouter } from 'next/router'
import { useEffect , useState } from 'react'
import LoadingCompunent from '../components/loading/Loading';



function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
    {loading && <LoadingCompunent />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
