import React from 'react';
import Title from './Title';
import { services } from '../data';
import Service from './Service';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((link) => {
          return <Service key={link.id} {...link}/>
        })}
      </div>
    </section>
  );
};

export default Services;
