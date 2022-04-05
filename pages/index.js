import Head from "next/head";
import React from "react";
import Banner from "../components/Home/Banner";
import Feature from "../components/Home/Feature";
import HomeServicesSlider from "../components/Home/HomeServicesSlider";
import HowItWorks from "../components/Home/HowItWorks";
import Topseller from '../components/Home/Topseller';
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import BreakdownFirst from "./Breakdown/BreakdownFirst";
import BreakdownSecond from "./Breakdown/BreakdownSecond";
import BreakdownThird from "./Breakdown/BreakdownThird";
import CountUp from "./CountUp/CountUp";
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
          <BreakdownFirst/>
          <BreakdownSecond/>
          <BreakdownThird/>
          <CountUp/>
        </div>
        <div>
          <HomeServicesSlider />
          <Feature />
          <Topseller />
          <HowItWorks />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
    // </AuthProvider>
  );
}
