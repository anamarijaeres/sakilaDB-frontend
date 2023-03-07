
import React from "react";
import {Card, Container, Grid} from 'semantic-ui-react'


import "../../index.css"


function AllActors({films}) {
   
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