import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavComponent from '../components/Nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HAG portfolio 2022</title>
        <meta name="description" content="made with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavComponent hostParent="home" />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
