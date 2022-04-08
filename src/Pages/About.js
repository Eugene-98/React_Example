import { Component } from "react";
import { Container, Nav, Tab, Row, Col, NavItem } from "react-bootstrap";
import moduleName from 'react-bootstrap';

export default class About extends Component {
    render() {
        return(
            <Container >
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <NavItem>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link eventKey="fourth">Freameworks</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://s3.envato.com/files/307344662/preview/00_cover.__large_preview.jpg" 
                                        width="800" height="800"
                                    />
                                    <p>
                                    Lorem ipsum molestie gravida lorem pharetra urna elementum 
                                    metus lorem in non proin justo risus pharetra maecenas pharetra
                                     donec tempus nibh adipiscing lorem in tempus 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="second">
                                    <img src="https://cdn.vox-cdn.com/thumbor/jNeIBb8YfrcNq2O9BqhrbyXTOYk=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg" 
                                        width="800" height="800"
                                    />
                                    
                                    <p>
                                    Lorem ipsum molestie gravida lorem pharetra urna elementum 
                                    metus lorem in non proin justo risus pharetra maecenas pharetra
                                     donec tempus nibh adipiscing lorem in tempus 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="third">
                                    <img src="https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png" 
                                        width="800" height="800"
                                    />
                                    <p>
                                    Lorem ipsum molestie gravida lorem pharetra urna elementum 
                                    metus lorem in non proin justo risus pharetra maecenas pharetra
                                     donec tempus nibh adipiscing lorem in tempus 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://static.wixstatic.com/media/96edd2_7724b185c486497eac2694520001fbc7~mv2.png/v1/fill/w_512,h_301,al_c/96edd2_7724b185c486497eac2694520001fbc7~mv2.png" 
                                        width="800" height="800"
                                    />
                                    <p>
                                    Lorem ipsum molestie gravida lorem pharetra urna elementum 
                                    metus lorem in non proin justo risus pharetra maecenas pharetra
                                     donec tempus nibh adipiscing lorem in tempus 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://miro.medium.com/max/1200/1*4cFhtuq6zRDqJ6p4s2pQ6g.jpeg" 
                                        width="800" height="800"
                                    />
                                    <p>
                                    Lorem ipsum molestie gravida lorem pharetra urna elementum 
                                    metus lorem in non proin justo risus pharetra maecenas pharetra
                                     donec tempus nibh adipiscing lorem in tempus 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}