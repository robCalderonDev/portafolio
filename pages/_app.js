import '@/styles/globals.css'
import Head from 'next/head'
import { I18nProvider } from '@/i18n/I18nProvider'

export default function App({ Component, pageProps }) {
  return (
    <I18nProvider>
      <Head>
        <title>Robert Calderon</title>
      </Head>
      <Component {...pageProps} />
    </I18nProvider>
  )
}
