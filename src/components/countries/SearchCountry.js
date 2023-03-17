import React, { useState } from "react";
import { Grid,Input ,Button, GridColumn} from "semantic-ui-react";
import axios from "axios";

import "../../index.css"

import CountryCard from "./CountryCard";


function SearchCountry ({func}){
    const [text, setText] =useState('')
    const [countries,setCountries]= useState([]);
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8081";
 

    const handleOnClick= () =>{
        console.log('Search countries clicked')
        const url=`${apiUrl}/country/search?s=`+text
        console.log(url)
        axios
        .get(url)
        .then((result) => {
            console.log(result.data);
            setCountries(result.data);
        
        })
        .catch((error) => console.log(error));
        console.log("Search countries bar")
       

        
    }



    return(
        <Grid >
            <Grid verticalAlign="left" columns="equal"  >
                <Grid.Row  stretched="true">
                    <Grid.Column >
                        <Input placeholder='Search...' type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
                    </Grid.Column>
                    <GridColumn>
                        <Button  onClick={handleOnClick}>Search countries by name</Button>
                    </GridColumn>
                </Grid.Row>
            
            
                <Grid.Row>
                    
                        {countries.map((data) => {
                            return (
                                <CountryCard key={data.CountryId} data={data} func={func} />
                        );
                    })}
                   
                </Grid.Row>
            
            </Grid>
        </Grid>
    )
}

export default SearchCountry;