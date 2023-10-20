import React from 'react';
import { Segment, Container, Icon } from 'semantic-ui-react';

const FooterComponent = () => {
  return (
    <Segment inverted vertical style={{ padding: '30px 0', marginTop: '0' }}>
      <Container textAlign="center">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Explore</p>
            <ul>
              <li>Home</li>
              <li>Questions</li>
              <li>Articles</li>
              <li>Tutorials</li>
            </ul>
          </div>
          <div>
            <p>Support</p>
            <ul>
              <li>FAQs</li>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <p>Stay Connected</p>
            <div>
              <Icon name="instagram" />
              <Icon name="facebook" />
              <Icon name="twitter" />
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <p>&copy; {new Date().getFullYear()} DevDeakin. All rights reserved.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ margin: '0 10px' }}>
            <p>Privacy Policy</p>
          </div>
          <div style={{ margin: '0 10px' }}>
            <p>Terms</p>
          </div>
          <div style={{ margin: '0 10px' }}>
            <p>Code of Conduct</p>
          </div>
        </div>
      </Container>
    </Segment>
  );
};

export default FooterComponent;
