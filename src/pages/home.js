import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react'

const Home = () => {
    return (
      <Container className="home" text>
        <Header
          as='h1'
          content='Sakila DB webpage'
          inverted
          style={{
            fontSize:  '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        />
        <Header
          as='h2'
          content='Search for actors, films, add new actors and so much more :)'
          inverted
          style={{
            fontSize:  '1.7em',
            fontWeight: 'normal',
            marginTop:  '1.5em',
          }}
        />
      
        
          <Link to="/actors">
          <Button primary size='huge' >
            Get Started
            <Icon name='right arrow' />
          </Button>
        </Link>
  </Container>
    );
  };
    
  export default Home;