import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import "../styles/itemList.css";

const Item = ({item, index}) => {

  console.log('item' , item.id);
  return (
    <>
      <Link key={index} to={`/itemDetails/${item.id}`} className="cursor-pointer" item={item} >
      <div className="cardContainer">
        <Card className="card-item" key={index}>
          <div className="imgContainer">
            <Card.Img className="image" variant="top" src={`${item.image}`} />
          </div>
          <Card.Body>
            <Card.Title className="card-title" >{item.title}</Card.Title>
            <Card.Text className="text row">
              <p>${item.price}</p>
              <p>
                <i className="bi bi-truck "></i> Envio gratis!
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
    </>
  )
}

export default Item