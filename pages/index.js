import CustomHead from "../components/CustomHead";
import BackgroundImage from "../components/BackgroundImage";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";

const HomePage = () => {
  return (
    <>
      <CustomHead
        title='Suman Shrestha | Frontend Developer From Nepal'
        description=''
      />
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
