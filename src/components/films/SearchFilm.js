import React, { useState } from "react";
import {Grid,Input ,Button, GridColumn,Dropdown,Label} from "semantic-ui-react";
import axios from "axios";
import "../../index.css"
import FilmCard from "./FilmCard";
import AddFilm from "./AddFilm";


function SearchFilm ({ func,vis}){
    const [text, setText] =useState('')
    const [films,setFilms]= useState([]);
    const [amount, setAmount] =useState('')
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
   
    const options = [
        { key: 'G', value: 'G',  text: 'G' },
        { key: 'PG', value: 'PG',  text: 'PG' },
        { key: 'PG-13', value: 'PG-13',  text: 'PG-13' },
        { key: 'R', value: 'R', text: 'R' },
        { key: 'NC-17', value: 'NC-17', text: 'NC-17' },
    
    ]

    const categoryOptions = [
        { key: 'Action', value: 'Action',  text: 'Action' },
        { key: 'Children', value: 'Children',  text: 'Children' },
        { key: 'Classics', value: 'Classics', text: 'Classics' },
        { key: 'Comedy', value: 'Comedy', text: 'Comedy' },
        { key: 'Documentary', value: 'Documentary',  text: 'Documentary' },
        { key: 'Drama', value: 'Drama',  text: 'Drama' },
        { key: 'Family', value: 'Family',  text: 'Family' },
        { key: 'Foreign', value: 'Foreign', text: 'Foreign' },
        { key: 'Games', value: 'Games', text: 'Games' },
        { key: 'Horror', value: 'Horror', text: 'Horror' },
        { key: 'Music', value: 'Music',  text: 'Music' },
        { key: 'New', value: 'New',  text: 'New' },
        { key: 'Sci-Fi', value: 'Sci-Fi',  text: 'Sci-Fi' },
        { key: 'Sports', value: 'Sports', text: 'Sports' },
        { key: 'Travel', value: 'Travel', text: 'Travel' },
    
    ]

    

    const handleOnClick= () =>{
        console.log('Search clicked')
        const url=`${apiUrl}/films/?search=`+text
        console.log(url)
        axios
        .get(url)
        .then((result) => {
            console.log(result.data);
            setFilms(result.data);
        
        })
        .catch((error) => console.log(error));
    }

   

    const handleOnClickRentalRate= () =>{
        console.log('Renatl rate clicked')
        const url=`${apiUrl}/films/rent?rent=`+amount
        console.log(url)
        axios
        .get(url)
        .then((result) => {
            console.log(result.data);
            setFilms(result.data);
        
        })
        .catch((error) => console.log(error));
    }

    

    const getRating = (event, {value}) => {
        console.log(value);
        console.log('Rating clicked')
        const url=`${apiUrl}/films/rating?rating=`+value
        console.log(url)
        axios
        .get(url)
        .then((result) => {
            console.log(result.data);
            setFilms(result.data);
           
        
        })
        .catch((error) => console.log(error));
    }

    const getCategory = (event, {value}) => {
        console.log(value);
        console.log('Category clicked')
        const url=`${apiUrl}/films/category?c=`+value
        console.log(url)
        axios
        .get(url)
        .then((result) => {
            console.log(result.data);
            setFilms(result.data);
           
        
        })
        .catch((error) => console.log(error));
    }

    return(
        <Grid>
            <Grid  verticalAlign="left" columns="equal" >
                <Grid.Row className="addfilm_row"stretched="true" >
                    <AddFilm/>
                </Grid.Row>
                <Grid.Row className="search_row" stretched="true">
                    <Grid.Column >
                        <Input placeholder='Search...' type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
                    </Grid.Column>
                    <GridColumn >
                        <Button onClick={handleOnClick}>Search films by title</Button>
                    </GridColumn>
                </Grid.Row>

                <Grid.Row className="addfilm_row" stretched="true">
                    <Dropdown
                        placeholder='Select Rating'
                        fluid
                        search
                        selection
                        options={options}
                        onChange={getRating}
                    />
                </Grid.Row>

                <Grid.Row className="addfilm_row" stretched="true">
                    <Dropdown
                        placeholder='Select Category'
                        fluid
                        search
                        selection
                        options={categoryOptions}
                        onChange={getCategory}
                    />

                </Grid.Row>
            
                <Grid.Row className="search_row" stretched="true" columns="equal">
                    <Grid.Column>
                        <Input labelPosition='right' type='text' placeholder='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)}>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input>
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={handleOnClickRentalRate}>Search films by rate</Button>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row >
                    
                        {films.map((data) => {
                            return (

                            <FilmCard key={data.FilmId} data={data} func={func} vis={vis}/>
                        );
                    })}
                   
                </Grid.Row>
            
            </Grid>
        </Grid>
    )
}

export default SearchFilm;
