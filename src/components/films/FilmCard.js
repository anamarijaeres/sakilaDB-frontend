import React, { useState } from "react";
import { Card ,Button,Icon,Reveal,Popup} from "semantic-ui-react";
import axios from "axios";

import "../../index.css"



function FilmCard({ data ,func,func_category}){
    const [open,setOpen]=useState(false)
    const [open3,setOpen3]=useState(true)
    const [category, setCategory]=useState("")
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
    const apiUrl1 = process.env.REACT_APP_API_URL || "http://localhost:8081";

    const handleClickOpen = (id) => {
        setOpen(!open)
        console.log("card")
        console.log(open)

       axios
        .get(`${apiUrl}/films/`+id)
        .then((result) => {
            console.log(open)
            console.log(result.data);
            func(open,result.data)
            
        })
        .catch((error) => console.log(error));

        axios
        .get(`${apiUrl}/films/category/`+id)
        .then((result)=>{
            console.log(result.data)
            func_category(result.data)

        })
        .catch((error)=>console.log(error))

    }

    const handleDelete= (id)=>{
        const tit=data.Title
        console.log(tit)
        console.log('Delete clicked')
        const url=`${apiUrl}/films/`+id
        console.log(url)
        axios
        .delete(url)
        .then((result) => {
            console.log(result.data);
            alert("You have deleted film "+data.Title)
            
        })
        .catch((error) =>{
        alert("You cannot delete film "+data.Title+", since you haven't created it!")
        console.log(error)});
    }

    const categoryClicked= (id)=>{
        setOpen3(!open3)

        if(open3){
        
        axios
        .get(`${apiUrl1}/films/category?id=`+data.FilmId)
        .then((result) => {
            console.log(result.data);
            setCategory(result.data[0].Name);
        
        })
        .catch((error) => console.log(error));
        }else{
            setCategory("")
        }
    }





    return(
        <Card key={data.FilmId}>
        <Card.Content header={data.Title} />
        <Card.Content description={data.Description} />
            <Card.Content extra>
                <div className="film_card_extra" >
                    <p>Rating: {data.Rating}</p>
                    <p>Rental rate: {data.RentalRate}$</p>
                </div>
            </Card.Content>
            <Card.Content extra textAlign="ceter" streched>
             <Button className=".btn" basic color='blue' content={ open3?'Get category':'Close'} onClick={()=>categoryClicked(data.FilmId)} / > 
             <p> </p>
             <p> {category}</p>
        </Card.Content>
        <Card.Content extra visible >
        
            <div className="more_btn">
            <Reveal animated='move down'>
            <Reveal.Content visible>
                <Button className=".btn" primary color='blue' content='Read' onClick={()=>handleClickOpen(data.FilmId)} >
                    
                </Button>
            </Reveal.Content>
            <Reveal.Content hidden>
                <Button className=".btn" basic color='blue' content={open ? 'Less' : 'More'} onClick={()=>handleClickOpen(data.FilmId)}  >
            
                </Button>
            </Reveal.Content>
            </Reveal>
            </div>
            
            <div className="delete_btn">
                <a>
                <Popup
                    trigger={<Icon name="delete" onClick={()=>handleDelete(data.FilmId)} />}
                    content='Delete film :('
                    inverted
                    position="right center"
                    />
                </a>
            </div>
            
        </Card.Content>
    </Card>

    )




}
export default FilmCard