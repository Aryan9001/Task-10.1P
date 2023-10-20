import React from 'react';
import { Card, Image, Header, Button, Container, Rating, Divider } from 'semantic-ui-react';
import './featured_articles.css'; // Import the CSS file for custom styles

const FeaturedArticlesComponent = ({ articles }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Header as="h2" textAlign="center">
        Featured Articles
      </Header>
      <Container>
        <Card.Group itemsPerRow={3} stackable>
          {articles.map((article, index) => (
            <Card key={index} className="article-card">
              <Image src={article.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{article.title}</Card.Header>
                <Card.Description>{article.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Rating icon="star" defaultRating={1} maxRating={1} disabled style={{ marginRight: '5px' }} />
                  <span style={{ marginLeft: '10px', marginRight: '10px' }}>{article.rating.toFixed(1)}</span>
                  <span style={{ marginLeft: '145px' }}>By: {article.author}</span>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
        <Divider />
        <Button fluid style={{ marginTop: '20px', marginBottom: '20px' }}>
          See All Articles
        </Button>
      </Container>
    </div>
  );
};

export default FeaturedArticlesComponent;
