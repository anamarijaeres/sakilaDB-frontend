import React, { Component } from "react";
import { useState, useEffect } from 'react';
import { Container } from "semantic-ui-react";
import axios from "axios";
import "./index.css";
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";

let endpoint = "http://localhost:8080";

function ActorList(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/actors/1")
      .then((result) => {
        
        console.log(result.data);
        setPosts(result.data);
        
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card className="actor_card" color="purple">
      <Card.Content >
        <h4>First name: {posts.FirstName}</h4>
        <p>Last name: {posts.LastName}</p>
        <p>Last update:{posts.LastUpdate}</p>
        <p >Id: {posts.ActorId}</p>
      </Card.Content>
    </Card>
  );
}

export default ActorList;