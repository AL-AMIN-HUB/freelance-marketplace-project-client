import Head from 'next/head'
import Banner from '../components/Home/Banner'
import Feature from '../components/Home/Feature'
import HowItWorks from '../components/Home/HowItWorks'
import Footer from '../components/Shared/Footer'
import Header from '../components/Shared/Header'
import Topseller from '../components/Shared/Topseller'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Freelance marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Header />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <Feature />
          <Topseller />
          <HowItWorks />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
