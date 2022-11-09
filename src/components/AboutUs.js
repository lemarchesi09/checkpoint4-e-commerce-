import "../styles/about.css";
import Card from 'react-bootstrap/Card';
import React from "react";
import { Link } from "react-router-dom";
import user1 from "./user1.jpeg";
import user2 from "./user2.jpeg";
import user3 from "./user3.jpeg";
import user4 from "./user4.jpeg";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";

export const AboutUs = () => (
  <div className="about">
    <h2>Te contamos un poco sobre nosotros...</h2>
    <p>
      Somos un grupo de desarrolladores que pudo encontrar un maraviloso ritmo y coordinación a la hora de trabajar.
      Apoyándonos en las fortalezas de cada uno pudimos llegar a éste proyecto final que esperamos hayan podido disfrutar.
      Ante cualquier duda o consulta les dejamos nuestros datos para que puedan ponerse en contacto
    </p>
    <div className="cards">
    <Card className="card card1">
      <Card.Img variant="top" src={user1} />
      <Card.Body>
        <Card.Title className ="title">Florencia Miguez Oliverio</Card.Title>
        <Card.Text className="text row">
        <Link to="https://github.com/fmiguezo/" className=""> <BsGithub/> Github </Link>
        <Link to="https://www.linkedin.com/in/" className=""> <BsLinkedin/> LinkedIn </Link>
        <div><BsFillGeoAltFill/> Ubicación</div> 
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="card card2">
      <Card.Img variant="top" src={user2} />
      <Card.Body>
        <Card.Title className ="title">Ignacio Benitez</Card.Title>
        <Card.Text className="text row">
        <Link to="https://github.com/ignacio2194/" className=""> <BsGithub/> Github </Link>
        <Link to="https://www.linkedin.com/in/" className=""> <BsLinkedin/> LinkedIn </Link>
        <div><BsFillGeoAltFill/> Ubicación</div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="card card3">
      <Card.Img variant="top" src={user3} />
      <Card.Body>
        <Card.Title className ="title">Enzo Marchesi</Card.Title>
        <Card.Text className="text row">
        <Link to="https://github.com/lemarchesi09" className=""> <BsGithub/> Github </Link>
        <Link to="https://www.linkedin.com/in/" className=""> <BsLinkedin/> LinkedIn </Link>
        <div><BsFillGeoAltFill/> Ubicación</div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="card card4">
      <Card.Img variant="top" src={user4} />
      <Card.Body>
        <Card.Title className ="title">Ian Noreiko</Card.Title>
        <Card.Text className="text row">
        <Link to="https://github.com/Ianbpn" className=""> <BsGithub/> Github </Link>
        <Link to="https://www.linkedin.com/in/" className=""> <BsLinkedin/> LinkedIn </Link>
        <div><BsFillGeoAltFill/> Ubicación</div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="card card1">
      <Card.Img variant="top" src={user1} />
      <Card.Body>
        <Card.Title className ="title">Cecilia Kuckiewicz</Card.Title>
        <Card.Text className="text row">
        <Link to="https://github.com/kucki90" className=""> <BsGithub/> Github </Link>
        <Link to="https://www.linkedin.com/in/cecilia-kuckiewicz/" className=""> <BsLinkedin/> LinkedIn </Link>
        <div><BsFillGeoAltFill/> Vicente López - Buenos Aires</div>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </div>
);
