import React, { useState } from "react";
import { Card,Button,Icon, Popup} from "semantic-ui-react";
import axios from "axios";

import "../../index.css"


function ActorCard({ data ,func,vis}){
    const [open,setOpen]=useState(true)
    const [open2,setOpen2]=useState(true)
    const [open3,setOpen3]=useState(true)
    const [no,setNo]=useState("")
    const apiUrl0 = process.env.REACT_APP_API_URL || "http://localhost:8080";
    const apiUrl1 = process.env.REACT_APP_API_URL || "http://localhost:8081";
 

    const handleClickOpen = (id) => {
        setOpen(!open)

        if(open){
        console.log("card")

        console.log(open)

        axios
        .get(`${apiUrl0}/actors/filmsById/`+id)
        .then((result) => {
            console.log(open)
            console.log(result.data);
            
            func(open,result.data)
            
        })
        .catch((error) => console.log(error));

        }else{
            func(open,[]) 
        }

        console.log(vis)
        console.log(vis)


    }

    const handleClickSort = (id) => {
        
        setOpen2(!open2)
        if(open2){
            console.log("One more day")
        axios
        .get(`${apiUrl1}/actors/filmsByLength?id=`+id)
        .then((result) => {
            console.log(open)
            console.log(result.data);
            
            func(open2,result.data)
            
        })
        .catch((error) => console.log(error));

        }



    }

    const handleDelete= (id)=>{
        const tit=data.Title
        console.log(tit)
        console.log('Delete clicked')
        const url=`${apiUrl0}/actors/` +id
        console.log(url)
        axios
        .delete(url)
        .then((result) => {
            console.log(result.data);
            console.log(result.status)
            alert("You have deleted actor "+data.FirstName+" "+data.LastName)
            
        })
        .catch((error) =>{
        alert("You cannot delete actor "+data.FirstName+" "+data.LastName+", since you haven't created it!")
        console.log(error)});
    

    }
    const numberOfFilms=(id)=>{
        setOpen3(!open3)

        if(open3){
        console.log("card")
        console.log(open)
        axios
        .get(`${apiUrl1}/actors/numfilms?id=`+data.ActorId)
        .then((result) => {
            console.log(result.data);
            setNo(result.data);
        
        })
        .catch((error) => console.log(error));
        }else{
            setNo("")
        }
    }





    return(
        <Card key={data.ActorId}>
        <Card.Content header={data.FirstName} />
        <Card.Content description={data.LastName} />
        
        <Card.Content extra textAlign="ceter" streched>
             <Button className=".btn" basic color='blue' content={ open3?'Number of films':'Close'} onClick={()=>numberOfFilms(data.ActorId)} / > 
             <p> </p>
             <p> {no}</p>
        </Card.Content>
        <Card.Content extra textAlign="left">
            <Button className=".btn" basic color='blue' content={vis ?  'Show films':(open?'Show films':'Close') } onClick={()=>handleClickOpen(data.ActorId)} / >
           
            <Button className=".btn" basic color='blue' disabled={open} content={ 'Sort by length'} onClick={()=>handleClickSort(data.ActorId)} / >
            <div className="delete_btn">
                

                
                <Popup
                    trigger={<Icon name="delete" onClick={()=>handleDelete(data.ActorId)} />}
                    content='Delete actor :('
                    inverted
                    position="right center"
                    />
               
            </div>
            
        </Card.Content>
    </Card>

    );
}
export default ActorCard