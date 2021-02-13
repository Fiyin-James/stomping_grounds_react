import React from 'react';
import { Card, CardImg, CardBody, CardDeck, CardTitle, Col, Row, Container  } from 'reactstrap';


function MenuPage(){
    return(
       <Container fluid>
            <Row className="m-3">
                <Col>
                    <h1 className="text-center">Food Menu</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center">Click from the options down below to view our menu</p>
                </Col>
            </Row>
            <Row className="m-5">
                <Col>
                    <CardDeck>
                        <Card>
                            <CardImg top width="100%" src="/assets/imgs/counterculture-coffee.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Cafe</CardTitle>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardImg top width="100%" src="/assets/imgs/wine.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Bar</CardTitle>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardImg top width="100%" src="/assets/imgs/eggs-bennedict.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Breakfast</CardTitle>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardImg top width="100%" src="/assets/imgs/fancyfood.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Lunch &amp; Dinner</CardTitle>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    )
}

export default MenuPage;   