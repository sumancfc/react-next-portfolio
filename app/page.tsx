import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TechBackground from "../components/TechBackground";
import { HOME_ICONS } from "../data/backgroundIcons";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <section className='home-section section' id='home'>
        <div className='hero-glow' />
        <div className='hero-grid-bg' />
        <TechBackground icons={HOME_ICONS} />
        <div className='container'>
          <Hero />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
