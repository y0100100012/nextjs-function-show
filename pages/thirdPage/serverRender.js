import Head from 'next/head'
import Link from 'next/link'
import api from '../../lib/api'
export default function serverRender({ layerList }) {
  return (
    <div>
      <Head>
        <title>serverRender</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>数据展示<Link href="/thirdPage/thirdPage">返回</Link></h1>
        <div>{layerList?JSON.stringify(layerList):''}</div>
        
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  let layerList = [];
  const response = await api.get(`http://10.45.26.100:17777/duty/rt/query`, {});
  if(response.data){
    layerList = response.data;
  }
  return {
    props: {
      layerList
    }
  }
}