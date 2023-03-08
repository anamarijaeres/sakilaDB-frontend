import React from 'react'
import { Button, Modal,Form,Input,Select,TextArea } from 'semantic-ui-react'
import axios from "axios";

import "../../index.css"
import { apiUrl } from '../../config/constants';
let endpoint = "http://localhost:8080";

class AddFilm extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            rating:"",
            year:"",
            open:false,
        };
        this.onSubmit=this.onSubmit.bind(this);
    }
  

    options = [
    { key: 'G', value: 'G',  text: 'G' },
    { key: 'PG', value: 'PG',  text: 'PG' },
    { key: 'PG-13', value: 'PG-13',  text: 'PG-13' },
    { key: 'R', value: 'R', text: 'R' },
    { key: 'NC-17', value: 'NC-17', text: 'NC-17' },

    ]
    

    onChange =  (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    getRating = (event, {value}) => {
        console.log(value);
        this.setState({rating:value})
        console.log('Rating clicked')
    };

    onSubmit =() => {
        if(this.state.title.length==0){
            alert("Film must have a title!")
        }else{
        console.log(this.state)
        axios
        .post(endpoint + "/films",
                    {
                       Title:this.state.title,
                       Description:this.state.description,
                       ReleaseYear:parseInt(this.state.year),
                       Rating:this.state.rating
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        
                        },
                    }
                )
                .then((res) => {
                    
                    this.setState({
                        title: "",
                        description: "",
                        rating:"",
                        year:""
                    });
                    console.log(res);
                    console.log(res.status);
                    this.setState({open:false})
                    alert("You've added new film!")
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
            trigger={<Button primary fluid  >Add film</Button>}
            >
            <Modal.Header>Add a new film</Modal.Header>
            <Modal.Content image>
            <Form>
                <Form.Group widths='equal'>
                <Form.Field
                    control={Input}
                    label='Title'
                    placeholder='Title'
                    name="title" type="text" value={this.state.title} onChange={this.onChange}
                />
                
                <Form.Field
                    control={Select}
                    label='Rating'
                    options={this.options}
                    placeholder='Rating'
                    name="rating" value={this.state.rating} onChange={this.getRating}
                />
                <Form.Field
                    control={Input}
                    label='Release year'
                    placeholder='Release year'
                    name="year"  value={this.state.year} onChange={this.onChange}
                />
                </Form.Group>
                <Form.Field
                control={TextArea}
                label='Description'
                placeholder='A short summary...'
                name="description" type="text" value={this.state.description} onChange={this.onChange}
                />
                
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

export default AddFilm