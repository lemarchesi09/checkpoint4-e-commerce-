import "../styles/about.css";
import React from "react";
import Contactanos from "./Contactanos.jpg";
import user1 from "./user1.jpeg";
import user2 from "./user2.jpeg";
import user3 from "./user3.jpeg";
import user4 from "./user4.jpeg";
import Card from 'react-bootstrap/Card';

export const AboutUs = () => (
  <div className="about">
    <img src={Contactanos}/>
    <h2>Te contamos un poco sobre nosotros...</h2>
    <p>
      Somos un grupo de desarrolladores que pudo encontrar un maraviloso ritmo y coordinación a la hora de trabajar.
      Apoyándonos en las fortalezas de cada uno pudimos llegar a éste proyecto final que esperamos hayan podido disfrutar.
      Ante cualquier duda o consulta les dejamos nuestros datos para que puedan ponerse en contacto
    </p>
    <div className="cards">
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={user1} />
      <Card.Body>
        <Card.Title>Florencia Miguez Oliverio</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={user2} />
      <Card.Body>
        <Card.Title>Ignacio Benitez</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={user3} />
      <Card.Body>
        <Card.Title>Enzo Marchesi</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={user4} />
      <Card.Body>
        <Card.Title>Ian Noreiko</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={user1} />
      <Card.Body>
        <Card.Title>Cecilia Kuckiewicz</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </div>
);
