import Head from 'next/head'
import Link from 'next/link'
import cn from 'classnames'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, pageId }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      </header>
      <div className={styles.backToHome}>
        <Link href="/">
          <div className={cn({
            [styles.linkTab]: true,
            [styles.linkTabActive]: pageId === 'Home'
          })}>首页</div>
        </Link>
        <Link href="/posts/first-post">
          <div className={cn({
            [styles.linkTab]: true,
            [styles.linkTabActive]: pageId === 'FirstPost'
          })}>文档页</div>
        </Link>
        <Link href="/antdTest/antdTest">
          <div className={cn({
            [styles.linkTab]: true,
            [styles.linkTabActive]: pageId === 'List'
          })}>列表页</div>
        </Link>
        <Link href="/thirdPage/thirdPage">
          <div className={cn({
            [styles.linkTab]: true,
            [styles.linkTabActive]: pageId === 'thirdPage'
          })}>第三页</div>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  )
}