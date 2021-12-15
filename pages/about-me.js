import Image from "next/image";
import CustomHead from "../components/CustomHead";
import BackgroundImage from "../components/BackgroundImage";
import Services from "../components/Services";

const AboutPage = () => {
  return (
    <>
      <CustomHead title='About Me' description='' />
      <section className='about-section section' id='about'>
        <div className='container'>
          <div className='row d-flex justify-between align-center'>
            <div className='about-image w-35'>
              <div className='about-me'>
                <div className='img'>
                  <Image
                    src='/img/home-banner.png'
                    alt='Me'
                    width={358}
                    height={358}
                    quality={100}
                    layout='responsive'
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>

            <div className='about-info w-60'>
              <div className='section-title'>
                <h2 className='title'>About</h2>
              </div>
              <div className='about-text'>
                <p>
                  I am a Freelancer Front-end Developer with over 3 years of
                  experience. I am from San Francisco. I code and create web
                  elements for amazing people around the world. I like work with
                  new people. New people new Experiences.
                </p>
              </div>

              <div className='about-content'>
                <div className='row'>
                  <div className='col-6'>
                    <ul>
                      <li>
                        <label>Name:</label> <span>Suman Shrestha</span>
                      </li>
                      <li>
                        <label>Birthday:</label> <span>31 January 1996</span>
                      </li>
                      <li>
                        <label>Age:</label> <span>26 Years</span>
                      </li>
                      <li>
                        <label>Address:</label> <span>Kupandole, Lalitpur</span>
                      </li>
                    </ul>
                  </div>

                  <div className='col-6'>
                    <ul>
                      <li>
                        <label>Phone:</label> <span>+977-9860088834</span>
                      </li>
                      <li>
                        <label>Email:</label>
                        <span>sumanstha999@gmail.com</span>
                      </li>
                      <li>
                        <label>Twitter:</label> <span>@sumancfc</span>
                      </li>
                      <li>
                        <label>Freelance:</label> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BackgroundImage
            className='separated'
            imageSrc='/img/border-dark.png'
          />

          <Services />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
