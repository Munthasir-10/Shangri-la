import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.cinnamon} alt="chef_image" />
      
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Cinnamon Life" />
      <h1 className="headtext__cormorant">Our Destinations</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.</p>
        </div>
        <p className="p__opensans"> No matter where you choose to stay, we make sure you enjoy every minute of it. Be it the ocean, the forest or even the city, you’ll be able to soak it all in, with your feet up, hands down! </p>
      </div>

      <div className="app__chef-sign">
        <p>John Keells</p>
        <p className="p__opensans">Founder</p>
        <br></br>
        <button type="button" className="custom__button">Discover More</button>
      </div>
    </div>
  </div>
);

export default Chef;