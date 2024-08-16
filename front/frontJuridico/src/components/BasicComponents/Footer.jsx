import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className=" container pt-2 rounded-top">
      <Row>
        <Col xl>
          <p>
            Estudio Leyria & De Menezes. Copyright 2024. Todos los derechos
            reservados.
          </p>
        </Col>
        <Col>
          <Button href="#inicio" className="btn btn-dark">
            Ir arriba
          </Button>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
Footer;
