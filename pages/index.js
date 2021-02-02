import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, getVenData, getLayerControlData } from '../lib/posts'
import api from '../lib/api'
import EventList from '../components/EventList/EventList'
import LineVenTitle from '../components/LineVenTitle'

export default function Home({ allPostsData, venData, layerControlData }) {
  const [showPic, setShowPic] = useState(false);
  const [venClientData, setVenClientData] = useState({});
   
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>服务端文件读取测试:</h1>
      <h2>文件数据来源于node所在的服务器</h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <br />
      <h1>服务端接口调用测试:</h1>
      <h2>完全由服务器调用后端接口，直接将数据渲染到html文件</h2>
      <section>
        {JSON.stringify(venData)}
      </section>
      <br />
      <h1>点击测试:</h1>
      <h2>修改REACT的state，触发重新渲染</h2>
      <section>
        <button onClick={() => setShowPic(!showPic)}>点击测试</button>
        {showPic ? < img className={utilStyles.userPic} src="/images/profile.jpg"/> : null}
      </section>
      <br />
      <h1>客户端接口调用测试:</h1>
      <h2>由客户端调用接口，返回结果渲染到页面，可在F12中查看接口调用</h2>
      <section>
        <button onClick={async() => {
          // 在客户端执行，可在 F12 network中查看到
          const response = await api.get(`http://10.45.26.100:18888/event/task/queryOne`, {});
          if(response.data && response.data.data){
            setVenClientData(response.data.data);
          }
        }}>查询</button>
        <code>{JSON.stringify(venClientData)}</code>
      </section>
      <br />
      <h1>antd组件测试:</h1>
      <h2>可使用antd组件，并正常加载其样式</h2>
      <section>
        <EventList layerControlData={layerControlData}/>
      </section>
      <br />
      <h1>react15类组件测试：</h1>
      <h2>react15类组件</h2>
      <section>
        <LineVenTitle />
      </section>
      <br />
      <h1>路由测试:</h1>
      <h2>非整页刷新，不重复下载资源，同时具有预渲染功能</h2>
      <Link href="/posts/first-post">
        NEXT
      </Link>
      <br />
      <h1>动态路由测试:</h1>
      <h2>演示内容为将url末尾作为文件名，查询服务器上的对应文件并生成html，工程pages下并不存在pre-rendering和ssg-ssr两个页面文件</h2>
      <Link href="/posts/pre-rendering">
        pre-rendering
      </Link>
      <br />
      <Link href="/posts/ssg-ssr">
        ssg-ssr
      </Link>
      <br />
      <h1>结束</h1>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData();
  const venData = await getVenData();
  const layerControlData = await getLayerControlData();
  return {
    props: {
      allPostsData,
      venData,
      layerControlData
    }
  }
}