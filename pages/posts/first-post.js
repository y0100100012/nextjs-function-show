import Head from 'next/head'
import Layout from '../../components/layout/layout'
import { queryLayer } from '../../lib/mysqlConnect'

export default function FirstPost({ layerList }) {
  return (
    <Layout pageId="FirstPost">
      <Head>
        <title>FirstPost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>第二个页面</h1>
        <div>{layerList.map(item => <div><span>{item.layerCode}</span><span>{item.layerName}</span></div>)}</div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  //查询sql
  let layerList = await queryLayer();
  if(!layerList){
    layerList = [];
  }
  return {
    props: {
      layerList
    }
  }
}