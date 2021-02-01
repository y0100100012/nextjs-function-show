import Head from 'next/head'
import Layout from '../../components/layout/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>FirstPost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>第二个页面</h1>
      </main>
    </Layout>
  )
}