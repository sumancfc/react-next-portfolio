import HeroIcons from "./Icons";
import { services } from "../data/services";

const Services = () => {
  return (
    <>
      <div className='row'>
        <div className='section-title'>
          <h2 className='title'>What i do?</h2>
        </div>
      </div>

      <div className='row'>
        {services.map((service) => {
          console.log(service);
          return (
            <div key={service.id} className='service-items'>
              <div className='service-item'>
                <div className='icon'>
                  <HeroIcons icon={service.icon} />
                </div>
                <h4 className='title'>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
