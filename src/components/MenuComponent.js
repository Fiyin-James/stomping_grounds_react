import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Row, Container  } from 'reactstrap';




function Menu(){
    return(
       <Container fluid>

            <Row className="mt-3">
                <Col>
                    <h1 className="text-center">Food Menu</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center">Click from the options down below to view our menu</p>
                </Col>
            </Row>

        </Container>
    )
}

export default Menu;   