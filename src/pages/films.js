import React,{useState} from "react";
import { Container,Card, Grid ,TransitionablePortal,Segment} from "semantic-ui-react";
import SearchFilm from "../components/films/SearchFilm";
import "../index.css"

  
const Films = () => {
  const [open,setOpen]=useState(true)
  const [film,setFilm]= useState([]);

  const pull_data_from_card=(open,data)=>{
 
    console.log(data)
    console.log(open)
    setFilm(data)
    setOpen(open)

  }


  return (
    <div>
      <Container className="actor_container">
        <h1> Films</h1>

        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <SearchFilm func={pull_data_from_card} vis={true}/>
                </Grid.Column>
                <Grid.Column>
                     <TransitionablePortal
                          open={!open}
                        >
                          <Segment
                            style={{
                              left: '60%',
                              position: 'fixed',
                              top: '30%',
                              zIndex: 1000,
                            }}
                          >
                            <Card key={film.FilmId}>
                              <Card.Content header={film.Title} />
                              <Card.Content description={film.Description} />
                              <Card.Content textAlign="left" >
                                <p>Release year: {film.ReleaseYear}</p>
                                <p>Length: {film.Length} min</p>
                                <p>Rating: {film.Rating}</p>
                                <p>Rental rate: {film.RentalRate}$</p>

                              </Card.Content>
                                  <Card.Content extra>
                                      <div className="film_card_extra" >
                                          <p>Last update: {film.LastUpdate}</p>
                                      </div>
                                  </Card.Content>
                            </Card>
                          </Segment>
                        </TransitionablePortal>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </Container>
     
    </div>
  );
};
  
export default Films;