import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/layout/layout'

// Hooks功能演示
export default function thirdPage() {
  const [count, setCount] = useState(0);
  // useEffect 会在每次渲染完成后，根据第二个参数指定的数值是否有变化，调用第一个参数的方法
  // 第一个参数的方法a可return一个清理方法b，用于清理方法a产生的副作用，如方法a中请求资源，方法b中释放资源
  // 第二个参数为 [] 时替代的为类组件的   替代componnetDidMount  componnetWillUnmount  功能
  useEffect(() => {
    // 替代componnetDidMount
    console.log('初始化');

    return () => {
      // 替代componnetWillUnmount
      console.log('销毁');
    }
  }, []);

  useEffect(() => {
    // 替代componentWillReceiveProps
    console.log('count改变');
    return () => {
      // 下方处理该effect的清理工作
      // 例如：effect是点击地图时，在地图上画一个点，
      // 那么清理工作就是删除地图上的这个点，以便确保多次点击后，地图上只会保留最后的点
      console.log('count清理');
    }
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