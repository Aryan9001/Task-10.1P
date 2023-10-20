import React from 'react';
import { Card, Image, Header, Button, Container, Rating, Divider } from 'semantic-ui-react';
import './featured_Tutorials.css'; // Import the CSS file for custom styles

const FeaturedTutorialsComponent = ({ tutorials }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Header as="h2" textAlign="center">
        Featured Tutorials
      </Header>
      <Container>
        <Card.Group itemsPerRow={3} stackable>
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="tutorial-card">
              <Image src={tutorial.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{tutorial.title}</Card.Header>
                <Card.Description>{tutorial.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="extra">
                  <Rating icon="star" defaultRating={1} maxRating={1} disabled />
                  <span style={{ marginLeft: '10px' }}>{tutorial.rating.toFixed(1)}</span>
                  <span style={{ marginLeft: '210px' }}>By: {tutorial.author}</span>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
        <Button fluid style={{ marginTop: '20px' }}>
          See All Tutorials
        </Button>
      </Container>
    </div>
  );
};

export default FeaturedTutorialsComponent;
