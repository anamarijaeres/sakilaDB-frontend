import axios from "axios";
import React, { useEffect, useState } from "react";
import {Card, Container, Grid, Button, CardContent, Icon,Section, Segment} from 'semantic-ui-react'
import FilmCard from "../films/FilmCard";

import "../../index.css"



function AllActors({films,func,vis}) {
    const [posts, setPosts] = useState([]);
    const [displayed,setDisplayed]= useState(false)
    
    

    const handleOnClick= () =>{
        if(displayed==false){
        console.log('All actors clicked')
        axios
        .get("http://localhost:8080/actors")
        .then((result) => {
          console.log(result.data);
          setPosts(result.data);
        })
        .catch((error) => console.log(error));
        setDisplayed(true)
        }else{
            setPosts([])
            setDisplayed(false)
        }
    }

    return (
        <Container>
            <Grid columns={1}>
                
                
                <Grid.Row className="row_allactor_cards">
                   
                    {films.map((data) => {
                        return (
                           < Card key={data.FilmId}>
                                <Card.Content header={data.Title} />
                                <Card.Content description={data.Description} />
                                <Card.Content extra>
                                    <div className="film_card_extra" >
                                        <p>Rating: {data.Rating}</p>
                                        <p>Rental rate: {data.RentalRate}$</p>
                                    </div>
                                </Card.Content>
                            </Card>
                        );
                    })}
                   
                </Grid.Row>
             </Grid>
        </Container>
    );
  }
  
  export default AllActors;