import "./ItemDetail.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export const ItemDetail = ({producto}) => {
    const {imagen, nombre, stock, descripcion} = producto;
    return(     
    <div className="cardPosicion">
    <Card   style={{ width: '35rem' }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body className="cardDescripcion">
      <Card.Title>{nombre}</Card.Title> <hr />
      <Card.Text className="cardText">
        {descripcion}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Stock: {stock}</ListGroup.Item>
    </ListGroup>
  </Card>
    </div>
)};

