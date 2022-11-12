import "../styles/about.css";
import Card from 'react-bootstrap/Card';
import React from "react";
import { Link } from "react-router-dom";
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
    <Card className="card">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className ="title">Florencia Miguez Oliverio</Card.Title>
        <Card.Text className="text row">
        <Link to="https://github.com/fmiguezo/"> <BsGithub/> Github </Link>
        <Link to="https://www.linkedin.com/in/florencia-miguez-oliverio/"> <BsLinkedin/> LinkedIn </Link>
        <div><BsFillGeoAltFill/> CABA - Buenos Aires</div> 
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="card">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className ="title">Ignacio Benitez</Card.Title>
        <Card.Text className="text row">
        <Link to="https://github.com/ignacio2194/"> <BsGithub/> Github </Link>
        <Link to="https://www.linkedin.com/in/ignaciobntz/"> <BsLinkedin/> LinkedIn </Link>
        <div><BsFillGeoAltFill/> Mar del Plata - Buenos Aires</div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="card">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className ="title">Enzo Marchesi</Card.Title>
        <Card.Text className="text row">
        <Link to="https://github.com/lemarchesi09"> <BsGithub/> Github </Link>
        <Link to="https://www.linkedin.com/in/lemarchesi/"> <BsLinkedin/> LinkedIn </Link>
        <div><BsFillGeoAltFill/> Córdoba - Córdoba</div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="card">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className ="title">Ian Noreiko</Card.Title>
        <Card.Text className="text row">
        <Link to="https://github.com/Ianbpn"> <BsGithub/> Github </Link>
        <Link to="https://www.linkedin.com/in/ian-pereyra-noreiko/"> <BsLinkedin/> LinkedIn </Link>
        <div><BsFillGeoAltFill/> Mar del Plata - Buenos Aires</div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="card">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className ="title">Cecilia Kuckiewicz</Card.Title>
        <Card.Text className="text row">
        <Link to="https://github.com/kucki90"> <BsGithub/> Github </Link>
        <Link to="https://www.linkedin.com/in/cecilia-kuckiewicz/"> <BsLinkedin/> LinkedIn </Link>
        <div><BsFillGeoAltFill/> Vicente López - Buenos Aires</div>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </div>
);
