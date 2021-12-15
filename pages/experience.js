import Image from "next/image";
import CustomHead from "../components/CustomHead";
import BackgroundImage from "../components/BackgroundImage";
import Services from "../components/Services";

const ExperiencePage = () => {
  return (
    <>
      <CustomHead
        title='Experience - Suman Shrestha | Frontend Developer From Nepal'
        description=''
      />
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

                {/* <div className='row'>
                      <div className='buttons'>
                        <a
                          href='#contact'
                          data-section='1'
                          className='btn btn-primary btn-hire'
                        >
                          Hire
                        </a>

                        <a href='#' className='btn btn-secondary'>
                          Download CV
                        </a>
                      </div>
                    </div> */}
              </div>

              {/* <div className='row'>
                {/* <div className='skills'>
                  <div className='row'>
                    <div className='skill-item'>
                      <h5>SCSS</h5>
                      <div className='progress-bar'>
                        <div className='progress-in' style='width: 76%'></div>
                        <div className='skill-per'>76%</div>
                      </div>
                    </div>

                    <div className='skill-item'>
                      <h5>SCSS</h5>
                      <div className='progress-bar'>
                        <div className='progress-in' style='width: 76%'></div>
                        <div className='skill-per'>76%</div>
                      </div>
                    </div>

                    <div className='skill-item'>
                      <h5>SCSS</h5>
                      <div className='progress-bar'>
                        <div className='progress-in' style='width: 76%'></div>
                        <div className='skill-per'>76%</div>
                      </div>
                    </div>

                    <div className='skill-item'>
                      <h5>SCSS</h5>
                      <div className='progress-bar'>
                        <div className='progress-in' style='width: 76%'></div>
                        <div className='skill-per'>76%</div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>

              <div className='row'>
                <div className='education'>
                  <h3 className='title'>Education</h3>
                  <div className='row'>
                    <div className='box-timeline'>
                      <div className='timeline shadow-dark'>
                      
                        <div className='timeline-item'>
                          <div className='timeline-circle'></div>
                          <h6 className='timeline-date'>
                            <i className='fa fa-calendar'></i> 2017
                          </h6>
                          <h4 className='timeline-title'>Advance</h4>
                          <p className='timeline-text'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quae praesentium nostrum consectetur ipsa
                            blanditiis amet, nemo fugiat voluptas temporibus
                            saepe id dolor ratione minima reiciendis eos
                            repellat commodi, porro consequatur?
                          </p>
                        </div>
                       
                        <div className='timeline-item'>
                          <div className='timeline-circle'></div>
                          <h6 className='timeline-date'>
                            <i className='fa fa-calendar'></i> 2017
                          </h6>
                          <h4 className='timeline-title'>Advance</h4>
                          <p className='timeline-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Optio eos blanditiis adipisci hic repellat
                            inventore similique fugiat quisquam officiis
                            mollitia iusto consequatur, laboriosam possimus
                            dignissimos delectus facere nam ex illo.
                          </p>
                        </div>
                    
                        <div className='timeline-item'>
                          <div className='timeline-circle'></div>
                          <h6 className='timeline-date'>
                            <i className='fa fa-calendar'></i> 2017
                          </h6>
                          <h4 className='timeline-title'>Advance</h4>
                          <p className='timeline-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Optio eos blanditiis adipisci hic repellat
                            inventore similique fugiat quisquam officiis
                            mollitia iusto consequatur, laboriosam possimus
                            dignissimos delectus facere nam ex illo.
                          </p>
                        </div>
                     
                      </div>
                    </div>
                  </div>
                </div>

                <div className='experience'>
                  <h3 className='title'>Experience</h3>
                </div>
              </div> */}
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

export default ExperiencePage;
