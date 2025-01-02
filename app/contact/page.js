import CustomHead from "../../components/CustomHead";
import HeroIcons from "../../components/Icons";
import { contacts } from "../../data/contacts";

const ContactPage = () => {
  return (
    <>
      <CustomHead
        title='Contact - Suman Shrestha | Frontend Developer From Nepal'
        description=''
      />
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
                    {contacts.map((contact) => (
                      <li key={contact.id} className='d-flex align-center'>
                        <HeroIcons icon={contact.icon} />
                        <span className='media-info'>{contact.info}</span>
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
    </>
  );
};

export default ContactPage;
