import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout/layout'

export default function FirstPost({ layerList }) {
  return (
    <Layout pageId="FirstPost">
      <Head>
        <title>FirstPost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>第二个页面</h1>
        <Link href="/posts/pre-rendering">
          pre-rendering
        </Link>
        <br />
        <Link href="/posts/ssg-ssr">
          ssg-ssr
        </Link>
      </main>
    </Layout>
  )
}