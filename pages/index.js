import BackgroundImage from "../components/BackgroundImage";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TopHeader from "../components/TopHeader";

export default function Home() {
  return (
    <Layout pageTitle='Suman Shrestha | Frontend Developer From Nepal'>
      <section className='home-section section d-flex' id='home'>
        <TopHeader />

        <Hero />

        <BackgroundImage
          className='home-image'
          imageSrc='/img/home-banner.png'
        />
      </section>
    </Layout>
  );
}
