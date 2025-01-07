import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import BackgroundImage from "../../components/BackgroundImage";
import Services from "../../components/Services";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage: React.FC = () => {
  return (
    <>
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
                  Experienced and innovative software engineer with over 5 years
                  in the software development industry. Specializing in
                  requirements gathering, development, debugging,
                  troubleshooting, testing, and deployment. Skilled in creating
                  detailed, intuitive, robust, and scalable web applications
                  within cross-functional teams. Proven track record in problem
                  identification and analysis, consistently meeting deadlines.
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
                        <label>Address:</label>{" "}
                        <span>73732, Esslingen, Germany</span>
                      </li>
                    </ul>
                  </div>

                  <div className='col-6'>
                    <ul>
                      <li>
                        <label>Phone:</label> <span>+4917685985727</span>
                      </li>
                      <li>
                        <label>Email:</label>
                        <span>sumanstha999@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/**<BackgroundImage
            className='separated'
            imageSrc='/img/border-dark.png'
          /> */}

          {/*  <Services /> */}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
