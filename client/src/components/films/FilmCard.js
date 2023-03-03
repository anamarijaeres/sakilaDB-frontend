import React, { useState } from "react";
import { Card ,Button,Icon,Reveal,Popup} from "semantic-ui-react";
import axios from "axios";

import "../../index.css"



function FilmCard({ data ,func,vis}){
    const [open,setOpen]=useState(false)
    const [post, setPost] = useState([]);




    const handleClickOpen = (id) => {
        setOpen(!open)

        
        console.log("card")

        console.log(open)

       axios
        .get("http://localhost:8080/films/"+id)
        .then((result) => {
            console.log(open)
            console.log(result.data);
            setPost(result.data);
            func(open,result.data)
            
        })
        .catch((error) => console.log(error));

        





    }

    const handleDelete= (id)=>{
        const tit=data.Title
        console.log(tit)
        console.log('Delete clicked')
        const url="http://localhost:8080/films/"+id
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
        <Card.Content extra visible >
        
            <div className="more_btn">
            <Reveal animated='move down'>
            <Reveal.Content visible>
                <Button className=".btn" primary color='blue' content={open ? 'Read' : 'Read'} onClick={()=>handleClickOpen(data.FilmId)} >
                    
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