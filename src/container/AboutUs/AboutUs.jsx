import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">A personal tropical sanctuary that is perfect for escaping the city, Shangri-La Colombo overlooks the Indian Ocean in the heart of the business district with direct access to the most extensive international shopping mall in Sri Lanka, Shangri-La’s 
        own One Galle Face Mall. The hotel offers the finest accommodation in Colombo, an exciting new dining and social scene and the largest and extensive hotel conference and event facilities.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Pioneers of Asian Hospitality</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Ours is a story driven by an enduring passion for customer service. From pioneering the concept of Asian hospitality, we have radically changed the face of Asia's urban landscape and influenced the way people connect and engage with each other.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;