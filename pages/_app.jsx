import '../styles/main.scss'
import { SiteContextProvider } from '../context/site-context'
import { useRouter } from 'next/router'
import { Layout } from '../components/layout/layout'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isStudieAdminRoute = router.route.includes('admin')

  if (isStudieAdminRoute)
    return (
      <SiteContextProvider>
        <Component {...pageProps} />
      </SiteContextProvider>
    )

  return (
    <SiteContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SiteContextProvider>
  )
}
