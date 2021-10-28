import HeroIcons from "./Icons";

const Services = () => {
  const services = [
    {
      id: "1",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae doloribus error ex sapiente inventore quo ipsum praesentiusequi tempore veritatis, obcaecati in sunt fugiat exercitationem accusantium assumenda.",
      icon: "DesktopComputerIcon",
    },
    {
      id: "2",
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae doloribus error ex sapiente inventore quo ipsum praesentiusequi tempore veritatis, obcaecati in sunt fugiat exercitationem accusantium assumenda.",
      icon: "CodeIcon",
    },
    {
      id: "3",
      title: "Seo Optimization",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae doloribus error ex sapiente inventore quo ipsum praesentiusequi tempore veritatis, obcaecati in sunt fugiat exercitationem accusantium assumenda.",
      icon: "SpeakerphoneIcon",
    },
  ];
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
