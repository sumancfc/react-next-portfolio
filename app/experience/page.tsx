import React from "react";
import { Metadata } from "next";
import experiences from "../../data/experience";

export const metadata: Metadata = {
  title: "Experience",
};

const ExperiencePage: React.FC = () => {
  return (
    <>
      <section className='experience-section section' id='experience'>
        <div className='container'>
          <div className='section-title'>
            <h2 className='title'>Experience</h2>
          </div>
          {experiences.map((experience) => (
            <div className='experience-box'>
              <div className='experience-row'>
                <div className='row'>
                  <div className='w-35'>
                    <div className='ex-left'>
                      <h5>{experience.company} </h5>
                      <label>{experience.role}</label>
                      <p>
                        {experience.startDate} - {experience.endDate}
                      </p>
                      <div className='btn ex-btn'>{experience.type}</div>
                    </div>
                  </div>

                  <div className='w-60 ml-5'>
                    <div className='ex-right'>
                      <h5>Responsibilities</h5>
                      <ul>
                        {experience.responsibilities.map(
                          (responsibility, index) => (
                            <li key={index}>
                              {index + 1}. {responsibility.task}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
