import React, { useState } from "react";
import { Grid,Input ,Button, GridColumn} from "semantic-ui-react";
import axios from "axios";

import "../../index.css"
import ActorCard from "./ActorCard";


function SearchBar ({func,vis}){
    const [text, setText] =useState('')
    const [actors,setActors]= useState([]);
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
   

    const handleOnClick= () =>{
        console.log('Search clicked')
        const url=`${apiUrl}/actors/search?s=`+text
        console.log(url)
        axios
        .get(url)
        .then((result) => {
            console.log(result.data);
            setActors(result.data);
        
        })
        .catch((error) => console.log(error));
        console.log("Search bar")
        console.log(vis)
    }



    return(
        <Grid >
            <Grid verticalAlign="left" columns="equal"  >
                <Grid.Row  stretched="true">
                    <Grid.Column >
                        <Input placeholder='Search...' type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
                    </Grid.Column>
                    <GridColumn>
                        <Button  onClick={handleOnClick}>Search actors by name</Button>
                    </GridColumn>
                </Grid.Row>
            
            
                <Grid.Row>
                    
                        {actors.map((data) => {
                            return (
                                <ActorCard key={data.FilmId} data={data} func={func} vis={vis}/>
                        );
                    })}
                   
                </Grid.Row>
            
            </Grid>
        </Grid>
    )
}

export default SearchBar;
