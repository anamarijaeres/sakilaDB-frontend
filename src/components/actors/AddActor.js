import React from 'react';
import axios from "axios";
import { Button,  Form,Input} from 'semantic-ui-react'




class AddActor extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
        };
        this.onSubmit=this.onSubmit.bind(this);
    }
        apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
    
    
        onChange =  (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            });
            this.onSubmit.bind(this);
        };
        onSubmit =() => {
            
            if(this.state.firstName.length==0 || this.state.lastName.length==0){
                alert("You cannot add an actor with blank first/last name!")
            }else{

           
            console.log(this.state.firstName)
            console.log(this.state.lastName)
            
            axios
            .post(
                    `${this.apiUrl}/actors/`,
                    {
                        FirstName:this.state.firstName,
                        LastName:this.state.lastName
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        
                        },
                    }
                )
                .then((res) => {
                    this.setState({
                        firstName: "",
                        lastName:""
                    });
                    console.log(res);
                    console.log(res.status);
                    alert("You've added new actor!")
                }).catch((error) =>{
                    console.log(error)});
                }
            
        };

        render() {
            return(
            <div>
                <h3>Add a new Actor</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>First Name</label>
                        <Input placeholder='First Name' name="firstName" type="text" value={this.state.firstName} onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' name="lastName" type="text" value={this.state.lastName} onChange={this.onChange}/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>

                </Form>
            </div>
            )
        };
    
}

export default AddActor