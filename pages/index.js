import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, getVenData, getLayerControlData } from '../lib/posts'
import api from '../lib/api'
import EventList from '../components/EventList/EventList'

export default function Home({ allPostsData, venData, layerControlData }) {
  const [showPic, setShowPic] = useState(false);
  const [venClientData, setVenClientData] = useState({});
   
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>服务端文件读取测试:</h1>
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
      <h1>服务端接口调用测试:</h1>
      <section>
        {JSON.stringify(venData)}
      </section>
      <h1>路由测试:</h1>
      <Link href="/posts/first-post">
        <a>NEXT</a>
      </Link>
      <h1>点击测试:</h1>
      <section>
        <button onClick={() => setShowPic(!showPic)}>点击测试</button>
        {showPic ? < img className={utilStyles.userPic} src="/images/profile.jpg"/> : null}
      </section>
      <h1>客户端接口调用测试:</h1>
      <section>
        <button onClick={async() => {
          const response = await api.get(`http://10.45.26.100:17777/duty/info/ven/querySingle?venId=410100000000`, {});
          if(response.data && response.data.data){
            setVenClientData(response.data.data);
          }
        }}>查询</button>
        <code>{JSON.stringify(venClientData)}</code>
      </section>
      <h1>antd组件测试:</h1>
      <section>
        <EventList layerControlData={layerControlData}/>
      </section>
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