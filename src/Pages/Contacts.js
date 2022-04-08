import { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class Contacts extends Component {
    render() {
        return(
            <Container style={{widht: '500px'}}>
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type="email" placeholder="Email email"/>
                        <Form.Text>
                            We newer share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textaria</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckBox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Button variant="primary" type="submit"/>

                </Form>
            </Container>
        )
    }
}