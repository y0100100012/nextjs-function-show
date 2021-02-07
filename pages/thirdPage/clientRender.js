import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import api from '../../lib/api'

export default function clientRender({ }) {
  const [layerList, setLayerList] = useState([]);

  useEffect(async() => {
    let layerListResult = [];
    const response = await api.get(`http://10.45.26.100:17777/duty/rt/query`, {});
    if(response.data){
      layerListResult = response.data;
    }
    setLayerList(layerListResult);
  }, [])

  return (
    <div>
      <Head>
        <title>FirstPost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>数据展示<Link href="/thirdPage/thirdPage">返回</Link></h1>
        <div>{layerList?JSON.stringify(layerList):''}</div>
        
      </main>
    </div>
  )
}