import Head from 'next/head'
import Layout from '../../components/layout/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  if(!postData){
    return (
      <Layout>
        <Head>
          <title>{'无数据'}</title>
        </Head>
        <h1>无该文档数据</h1>
      </Layout>
    )
  }
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

// 生成动态路由路径，会在应用build时生成
// 本演示中将 /posts 下的所有文本文件名作为url末尾路径
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    // fallback 为 false 时，无效的路径访问会到 404页面
    fallback: true
  }
}

// 静态生成，会在应用build时生成html
// 不可与 getServerSideProps 同时存在
// 本示例中的 params.id 参数来源于 getStaticPaths 生成的 paths
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}