import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service">
          <h3>Personal Training</h3>
          <p>Customized workout plans to help you achieve your personal goals.</p>
        </div>
        <div className="service">
          <h3>Group Classes</h3>
          <p>Fun and engaging fitness classes for all levels.</p>
        </div>
        <div className="service">
          <h3>Nutrition Plans</h3>
          <p>Personalized meal plans to complement your fitness routine.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
