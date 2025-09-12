import React from "react";
 import BackgroundImage from "../components/BackgroundImage";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <section className='home-section section d-flex' id='home'>
          <div className='container'>
              <div className='row full-screen d-flex justify-between align-center'>
        <Hero />
        {/*<BackgroundImage*/}
        {/*  className='home-image'*/}
        {/*  imageSrc='/img/home-banner.png'*/}
        {/*/>*/}
              </div>
          </div>
      </section>
    </Layout>
  );
};

export default HomePage;
