import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../moviecard/MovieCards.css';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';


 

const MovieCard = ({elm})=> {
  

    return (
      <div>
        
    <Card style={{ width: '18rem'}}>
      <Rating name="read-only" value={elm.rating} readOnly />
      <Card.Img style={{width:'286px',height:'400px'}} variant="top" src={elm.posterURL}/>
      <Card.Body>
        <Card.Title>{elm.title}</Card.Title>
        
        <Card.Text>
          {elm.description}<Link to={`/description/${elm.title}`}>Read More</Link>
        </Card.Text>
        <Button variant="primary"><Link style={{color:'white'}} to={`/description/${elm.title}`}>Bande Annonce</Link></Button>
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default MovieCard;