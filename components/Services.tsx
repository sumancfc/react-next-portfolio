import HeroIcons from "./Icons";
import services from "../data/services";

const Services: React.FC = () => {
  return (
    <>
      <div className='row'>
        <div className='section-title'>
          <h2 className='title'>What i do?</h2>
        </div>
      </div>

      <div className='row'>
        {services.map((service) => {
          return (
            <div key={service.id} className='service-items'>
              <div className='service-item'>
                <div className='icon'>
                  <HeroIcons icon={service.icon} />
                </div>
                <h4 className='title'>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
