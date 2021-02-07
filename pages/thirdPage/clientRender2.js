import Head from 'next/head'
import { Table } from 'antd'
import { useEffect, useState } from 'react'

export default function clientRender2({ }) {
  const [count, setCount] = useState(0);
  const [layerControlData, setLayerControlData] = useState([]);
  useEffect(async() => {
    setCount(300);
    setLayerControlData([{"layerCode":"yongdu","layerName":"拥堵","layerType":"1","parentType":"common","layerIconCode":"haoj-jam"},{"layerCode":"shigu","layerName":"事故","layerType":"2","parentType":"common","layerIconCode":"haoj-shigu"},{"layerCode":"jiankong","layerName":"监控","layerType":"80","parentType":"common","layerIconCode":"haoj-jiankong"},{"layerCode":"gaowei","layerName":"高位","layerType":"82","parentType":"common","layerIconCode":"haoj-qiuji1"},{"layerCode":"jingyuan","layerName":"警员","layerType":"1","parentType":"common","layerIconCode":"haoj-jingyuan"},{"layerCode":"xiejing","layerName":"协警","layerType":"2","parentType":"common","layerIconCode":"haoj-xiejing"},{"layerCode":"jingche","layerName":"警车","layerType":"1","parentType":"common","layerIconCode":"haoj-jingche"},{"layerCode":"tieqi","layerName":"铁骑","layerType":"2","parentType":"common","layerIconCode":"haoj-tieqi"},{"layerCode":"youdaoping","layerName":"诱导屏","layerType":"70","parentType":"common","layerIconCode":"haoj-youdaoping"},{"layerCode":"signal","layerName":"信号机","layerType":"13","parentType":"common","layerIconCode":"haoj-add-"}]);
    
  }, []);
  const columns = [
    {
      title: '图层代码',
      dataIndex: 'layerCode',
      key: 'layerCode',
    },
    {
      title: '图层名称',
      dataIndex: 'layerName',
      key: 'layerName',
    },
    {
      title: '图标名称',
      dataIndex: 'layerIconCode',
      key: 'layerIconCode',
    },
  ];
  let tableList = [];
  for(let i = 0;i < count;i++){
    tableList.push(<Table key={i} dataSource={layerControlData} columns={columns} rowKey="layerCode" />);
  }
  return (
    <div>
      <Head>
        <title>ANTD组件服务端渲染测试</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>ANTD组件服务端渲染测试</h1>
        {tableList}
      </main>
    </div>
  )
}