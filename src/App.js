import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

function App() {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/menu")
        .then(res => res.json())
        .then(
          (result) => {
            setMenu(result);
          },
        )
    }, [])
    return (
      <div >
        <Carousel  >
      <Carousel.Item interval={500}>
        <Image src="https://server-service66.s3.ap-southeast-1.amazonaws.com/kaopad.jpg" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src="https://server-service66.s3.ap-southeast-1.amazonaws.com/kaopad.jpg" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src="https://server-service66.s3.ap-southeast-1.amazonaws.com/kaopad.jpg" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <Container>
          <Row>
            {menu.map(menu => (
              <Col xs={12} sm={4} key={menu.id}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={menu.image} />
                  <Card.Body>
                    <Card.Title>{menu.namemenu}</Card.Title>
                    <Card.Text>
                      {menu.detail}
                    </Card.Text>
                    <Card.Text>
                      {menu.price}
                    </Card.Text>
                    <Button variant="primary">add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}


          </Row>
        </Container>
      </div>
    );
  }


export default App;
