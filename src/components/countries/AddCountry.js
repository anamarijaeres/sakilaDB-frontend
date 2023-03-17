import React from 'react';
import axios from "axios";
import { Button,  Form,Input} from 'semantic-ui-react'




class AddCountry extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            country: "",
        };
        this.onSubmit=this.onSubmit.bind(this);
    }
        apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8081";
    
    
        onChange =  (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            });
            this.onSubmit.bind(this);
        };
        onSubmit =() => {
            
            if(this.state.country.length===0){
                alert("You cannot add a country with blank country name!")
            }else{
            
            axios
            .post(
                    `${this.apiUrl}/country`,
                    {
                        Country:this.state.country
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        
                        },
                    }
                )
                .then((res) => {
                    this.setState({
                        country: ""
                    });
                    console.log(res);
                    console.log(res.status);
                    alert("You've added a new country!")
                }).catch((error) =>{
                    console.log(error)});
                }
            
        };

        render() {
            return(
            <div>
                <h3>Add a new country</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Country Name</label>
                        <Input placeholder='Country Name' name="country" type="text" value={this.state.country} onChange={this.onChange}/>
                    </Form.Field>
                   
                    <Button type='submit'>Submit</Button>

                </Form>
            </div>
            )
        };
    
}

export default AddCountry