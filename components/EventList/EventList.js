import Head from 'next/head'
import { Table } from 'antd'
import styles from './EventList.module.css'

export default function EventList({ layerControlData }) {
  
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
  return (
    <div className={styles.eventListTable}>
      <h1>图层列表</h1>
      <Table dataSource={layerControlData} columns={columns} />
    </div>
  )
}