import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/layout/layout'

export default function FirstPost() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('初始化')
    return () => {console.log('销毁')}
  }, []);
  useEffect(() => {
    console.log('count改变')
  }, [count]);
  return (
    <Layout pageId="thirdPage">
      <h1>第三个页面</h1>
      <br />
      <div>{count}</div>
      <button onClick={() => {setCount(count + 1)}}>点击</button>
      <br />
      <h1>服务端查数据后渲染到html，与先下载html后客户端查数据渲染效果对比</h1>
      <Link href="/thirdPage/clientRender">客户端</Link>
      <br />
      <Link href="/thirdPage/serverRender">服务端</Link>
    </Layout>
  )
}