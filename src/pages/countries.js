import React,{useState} from "react";
import { Container, Grid } from "semantic-ui-react";

import AllCities from "../components/countries/AllCities";
import SearchCountry from "../components/countries/SearchCountry";
import AddCountry from "../components/countries/AddCountry";
import "../index.css"




const Countries = () => {
    const [city,setCity]= useState([]);
  
    const pull_data=(open,data)=>{
      console.log("Cities")
      console.log(data)
      console.log(open)
      setCity(data)
     
  
    }
  
    return (
      <div>
        <Container className="actor_container">
          <h1> Countries</h1>
  
          <Grid columns={3} divided>
              <Grid.Row>
                  <Grid.Column>
                      <SearchCountry func={pull_data} />
                  </Grid.Column>
                  <Grid.Column>
                      <AllCities cities={city}  />
                  </Grid.Column>
                  <Grid.Column>
                    <AddCountry />
                </Grid.Column>
                  
              </Grid.Row>
          </Grid>
        </Container>
        
      </div>
    );
  };
    
  export default Countries;