import HeroIcons from "../components/Icons";
import Layout from "../components/Layout";

const ContactMe = () => {
  const details = [
    {
      id: "1",
      info: "Kupandole, Lalitpur",
      icon: "LocationMarkerIcon",
    },
    {
      id: "2",
      info: "+977-9860088834",
      icon: "DeviceMobileIcon",
    },
    {
      id: "3",
      info: "sumanstha999@gmail.com",
      icon: "MailIcon",
    },
  ];
  return (
    <Layout pageTitle='Contact Me'>
      <section className='contact-section section' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='w-35'>
              <div className='contact-info'>
                <h4>
                  What’s your story?
                  <br /> Get in touch
                </h4>
                <p>
                  Always available for freelancing if the right project comes
                  along, Feel free to contact me.
                </p>

                <div className='media'>
                  <ul>
                    {details.map((detail) => (
                      <li key={detail.id} className='d-flex align-center'>
                        <HeroIcons icon={detail.icon} />
                        <span className='media-info'>{detail.info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className='w-60 ml-auto'>
              <form className='contact-form'>
                <h4>Say Something</h4>
                <div className='row'>
                  <div className='col-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                        required
                      />
                    </div>
                  </div>

                  <div className='col-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Subject'
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <textarea
                        className='form-control'
                        placeholder='Message'
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className='col-12'>
                  <div className='form-group'>
                    <button type='submit' className='btn'>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactMe;
