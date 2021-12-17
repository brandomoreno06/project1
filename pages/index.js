import Head from 'next/head';
import Header from '../components/Landing/Header';
import Content from '../components/Landing/Content';
import Footer from '../components/Landing/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Oqulo | Space Management Software</title>
        <meta name="description" content="The only platform you'll need to run smart coworking spacesand services offers." />
        <link rel="icon" href="/images/favicon_oqulo.png" />
      </Head>

      <Header />
      <Content />
      <Footer />
    </div>
  )
}
