import Icon from "../data/enum";
import ButtonLink from "./ButtonLink";

const Hero = () => {
  return (

        <div className='col-6 introduction'>
          <div className='type-text'>
            <h6>Hello, My name is</h6>
            <h1>Suman Shrestha</h1>
            <h4>Software Engineer</h4>
            <p className='desc'>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>

            <div className='home-btn'>
              <ButtonLink
                textTitle='Download CV'
                icon={Icon.DownloadIcon}
                link='#'
              />
            </div>
          </div>
        </div>
  );
};

export default Hero;
