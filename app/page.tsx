import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";

const HomePage: React.FC = () => {
  return (
    <>
      <section className='home-section section d-flex' id='home'>
        <TopHeader />

        <Hero />

        <BackgroundImage
          className='home-image'
          imageSrc='/img/home-banner.png'
        />
      </section>
    </>
  );
};

export default HomePage;
