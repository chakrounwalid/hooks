import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../moviecard/MovieCards.css';
import { Rating } from '@mui/material';

const MovieCard = ({elm})=> {
    return (
    <Card style={{ width: '18rem'}}>
      <Rating name="read-only" value={elm.rating} readOnly />
      <Card.Img style={{width:'286px',height:'400px'}} variant="top" src={elm.posterURL}/>
      <Card.Body>
        <Card.Title>{elm.title}</Card.Title>
        <Card.Text>
          {elm.description}
        </Card.Text>
        <Button variant="primary">Bande Annonce</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;