import React from 'react';
import { Button } from 'semantic-ui-react';
import Header from './header';
import Hero from './hero';
import FeaturedTutorials from './Featured_Tutorials';
import FeaturedArticles from './Featured_articles';
import SignupBar from './signup_bar'; // Import the SignupBar component
import Footer from './Footer';

const App = () => {
  const featuredArticles = [
    {
      title: 'Download Node.JS for IBM platforms',
      image: '/article1.png',
      description: 'NodeJS',
      rating: 4,
      author: 'Udit Karla',
      
    },
    {
      title: 'Introducing Hooks',
      image: '/article2.png',
      description: 'React Hooks',
      rating: 5,
      author: 'Vansh Tomer',
    
    },
    {
      title: 'CSS Link Hover Effect',
      image: '/qwerty.png',
      description: 'CSS',
      rating: 3,
      author: 'Aryan',
     
    },
    // Add more articles
  ];

  const featuredTutorials = [
    {
      title: 'Learn React from Scrath',
      image: '/Tutorial1.jpg',
      description: 'Learn React(Basic Course)',
      rating: 4, // Add the rating for Tutorial 1
      author: 'Rakshit', // Add the author's name for Tutorial 1
    },
    {
      title: 'Learn HTML - Advanced Course',
      image: '/Tutorial1.png',
      description: 'Learn HTML',
      rating: 5, // Add the rating for Tutorial 2
      author: 'Pranav', // Add the author's name for Tutorial 2
    },
    {
      title: 'Learn Python from scratch',
      image: '/Tutorial3.png',
      description: 'Learn Python',
      rating: 5, // Add the rating for Tutorial 2
      author: 'Yugam', // Add the author's name for Tutorial 2
    },
    // Add more tutorials
  ];

  return (
    <div>
      <Header />
      <Hero />
      <FeaturedArticles articles={featuredArticles} />
      <div style={{ marginBottom: '20px' }}>
        <FeaturedTutorials tutorials={featuredTutorials} />
      </div>
      <SignupBar /> {/* Place SignupBar component here */}
      <Footer />
    </div>
  );
};

export default App;
