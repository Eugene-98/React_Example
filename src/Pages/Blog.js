import { Component } from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";

export default class Blog extends Component {
    render() {
        return(
            <>
            <CarouselBox />
            <Container>
            <h2 className="text-center m-4" >Our Team</h2>
                <CardGroup className="m-4">
                    <Card border="success">
                        <Card.Img variant="top" 
                            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum rutrum quisque mauris congue nam enim orci pharetra congue pellentesque fusce 
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    
                    <Card bg="warning">
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum rutrum quisque mauris congue nam enim orci pharetra congue pellentesque fusce 
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        <Card.Img variant="bottom" 
                            src="https://images.pexels.com/photos/7163354/pexels-photo-7163354.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        />
                    </Card>

                    <Card border="success">
                        <Card.Img variant="top" 
                            src="https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem ipsum rutrum quisque mauris congue nam enim orci pharetra congue pellentesque fusce 
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            </>
        )
    }
}