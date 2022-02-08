import Head from 'next/head'
import previewImage from '../public/imgs/preview.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HAG portfolio 2022</title>
        <meta name="description" content="HAG portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content='../public/imgs/preview.png' key="ogimage" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>

      <footer>
      </footer>
    </div>
  )
}
