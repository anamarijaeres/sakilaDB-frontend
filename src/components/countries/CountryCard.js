import React, { useState} from "react";
import { Card,Button,Icon, Popup} from "semantic-ui-react";
import axios from "axios";
import AddCity from "./AddCity";


import "../../index.css"


function CountryCard({ data ,func}){
    const [open,setOpen]=useState(true)
    const [id]=useState(data.CountryId)
    

    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8081";
 

    const handleClickOpen = (id) => {
        setOpen(!open)

        if(open){
  

        axios
        .get(`${apiUrl}/country/cities?id=`+id)
        .then((result) => {
            console.log(open)
            console.log(result.data);
            
            func(open,result.data)
            
        })
        .catch((error) => console.log(error));

        }else{
            func(open,[]) 
        }



    }



    const handleDelete= (id)=>{
     
     
        console.log('Delete country clicked')
        const url=`${apiUrl}/country/id?id=` +id
        console.log(url)
        axios
        .delete(url)
        .then((result) => {
            console.log(result.data);
            console.log(result.status)
            alert("You have deleted country "+data.Country)
            
        })
        .catch((error) =>{
        alert("You cannot delete country "+data.Country)
        console.log(error)});
    

    }

   
 





    return(
        <Card key={data.CountryId}>
        <Card.Content header={data.Country} />
        
        
       
        <Card.Content extra textAlign="left">
            <Button className=".btn" basic color='blue' content={open?'Show cities':'Close' } onClick={()=>handleClickOpen(data.CountryId)} / >
      

            <AddCity id={id}/>
            <div className="delete_btn">
                

                
                <Popup
                    trigger={<Icon name="delete" onClick={()=>handleDelete(data.CountryId)} />}
                    content='Delete country :('
                    inverted
                    position="right center"
                    />
               
            </div>
            
        </Card.Content>
    </Card>

    );
}
export default CountryCard