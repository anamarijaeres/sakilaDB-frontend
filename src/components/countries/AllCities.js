
import React from "react";
import {Card, Container, Grid, Icon, Popup} from 'semantic-ui-react'
import axios from "axios";

import "../../index.css"


function AllCities({cities}) {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8081";

    const handleDelete= (id,dataCity)=>{
     
     
        console.log('Delete city clicked')
        const url=`${apiUrl}/country/deleteCity?id=` +id
        console.log(url)
        axios
        .delete(url)
        .then((result) => {
            console.log(result.data);
            console.log(result.status)
            alert("You have deleted city "+dataCity.City)
            
        })
        .catch((error) =>{
        alert("You cannot delete city "+dataCity.City)
        console.log(error)});
    

    }

   
    return (
        <Container>
            <Grid columns={1}>
                <Grid.Row className="row_allactor_cards">
    
                    {cities.map((data) => {
                        return (
                           < Card key={data.CityId}>
                                <Card.Content header={data.City} />
                                <Card.Content extra textAlign="left">

                               
                                <div className="delete_btn">
                                    <Popup
                                        trigger={<Icon name="delete" onClick={()=>handleDelete(data.CityId,data)} />}
                                        content='Delete city :('
                                        inverted
                                        position="right center"
                                        />
                                
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
  
  export default AllCities;