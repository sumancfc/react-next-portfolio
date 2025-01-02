import CustomHead from "../../components/CustomHead";
import BackgroundImage from "../../components/BackgroundImage";
import NepaliDate from "nepali-date/cjs/NepaliDate";

const ExperiencePage = () => {
  // const dates = ["2021-12-02T04:35:49.586Z", "2021-12-01T13:22:26.928"];
  // const date = new Date("2021-12-02T04:35:49.586Z");
  // const nepaliDate = new NepaliDate(date);

  // // Format date in nepali
  // const presentTime = nepaliDate.format("mmmm d yyyy, dddd");

  return (
    <>
      <CustomHead
        title='Experience - Suman Shrestha | Frontend Developer From Nepal'
        description=''
      />
      <section className='experience-section section' id='experience'>
        <div className='container'>
          <div className='section-title'>
            <h2 className='title'>Services</h2>
          </div>
          <div className='experience-box'>
            <div className='experience-row'>
              <div className='row'>
                <div className='w-35'>
                  <div className='ex-left'>
                    <h5>Sr. Frontend Developer</h5>
                    <label>Google</label>
                    <p>2021 - Present</p>
                    <div className='btn ex-btn'>Full Time</div>
                  </div>
                </div>

                <div className='w-60 ml-5'>
                  <div className='ex-right'>
                    <h5>Google Inc</h5>
                    <p>
                      Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
