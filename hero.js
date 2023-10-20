import React from 'react';
import { Segment, Container, Image } from 'semantic-ui-react';
import './Hero.css';

const HeroComponent = () => {
  return (
    <Segment inverted textAlign="center" vertical style={{ marginTop: -13 }}> {/* Remove top margin */}
      <Container className="hero-container">
        <Image src="/qwertyu.jpg" className="hero" />
      </Container>
    </Segment>
  );
};

export default HeroComponent;
