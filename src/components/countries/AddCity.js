import React from 'react'
import { Button, Modal,Form,Input} from 'semantic-ui-react'
import axios from "axios";

import "../../index.css";



class AddCity extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            id: this.props.id
        };
        this.onSubmit=this.onSubmit.bind(this);
    }
    apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8081";
  

  
    

    onChange =  (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
   

    onSubmit =() => {
        if(this.state.name.length===0){
            alert("City must have a name!")
        }else{
        console.log(this.state)
        axios
        .post(`${this.apiUrl}/country/addCity?id=`+ this.state.id,
                    {
                       City:this.state.name
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        
                        },
                    }
                )
                .then((res) => {
                    
                    this.setState({
                        name: ""
                    });
                    console.log(res);
                    console.log(res.status);
                    this.setState({open:false})
                    alert("You've added a new city!")
                })
                .catch((error) => {
                    alert(error.error)
                    console.log(error)});
                }
    };

    

    render() {
        return (
            <Modal
            onClose={() => this.setState({open:false})}
            onOpen={() => this.setState({open:true})}
            open={this.state.open}
            trigger={<Button className=".btn" primary   >Add city</Button>}
            >
            <Modal.Header>Add a new city</Modal.Header>
            <Modal.Content image>
            <Form>
                <Form.Group widths='equal'>
                <Form.Field
                    control={Input}
                    label='Name'
                    placeholder='Name'
                    name="name" type="text" value={this.state.name} onChange={this.onChange}
                />
                
               
                </Form.Group>
              
                
            </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => this.setState({open:false})}>Cancel</Button>
                <Button type='submit'onClick={this.onSubmit} positive>Submit</Button>
                
            </Modal.Actions>
            </Modal>
        )
    }
}

export default AddCity