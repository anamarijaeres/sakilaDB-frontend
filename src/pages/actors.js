import React,{useState} from "react";
import { Container, Grid } from "semantic-ui-react";
import AddActor from "../components/actors/AddActor";
import AllActors from "../components/actors/AllActors";
import SearchBar from "../components/actors/SearchBar";
import "../index.css"

  
const Actors = () => {
  const [vis,setVis]=useState(true)
  const [film,setFilm]= useState([]);

  const pull_data=(open,data)=>{
    console.log("Actors")
    console.log(data)
    console.log(open)
    setFilm(data)
    setVis(!open)

  }

  return (
    <div>
      <Container className="actor_container">
        <h1> Actors</h1>

        <Grid columns={3} divided>
            <Grid.Row>
                <Grid.Column>
                    <SearchBar func={pull_data} vis={vis}/>
                </Grid.Column>
                <Grid.Column>
                    <AllActors films={film} func={pull_data} vis={false}/>
                </Grid.Column>
                <Grid.Column>
                    <AddActor />
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </Container>
      
    </div>
  );
};
  
export default Actors;