import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardDeck, CardTitle, Col, Modal, ModalHeader, ModalBody, Row, Container, UncontrolledCollapse  } from 'reactstrap';
import { MENUDATA } from '../shared/menudata';


class MenuPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            // isCafeModalOpen: false,
            menudata: MENUDATA
            
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render(){
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
                        <Card as="a" onClick={this.toggleModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/counterculture-coffee.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Cafe</CardTitle>
                            </CardBody>
                        </Card>

                        <Card as="a" onClick={this.toggleModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/wine.png" alt="Card image cap" />
                            <CardBody>
                                {console.log(this.state)}
                            <CardTitle className="text-center" tag="h5">Bar</CardTitle>
                                <Modal size="lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                    <ModalHeader toggle={this.toggleModal}>Cafe Menu</ModalHeader>
                                    <ModalBody>
                                          <CafeMenu menudata = {this.state.menudata} />
                                    </ModalBody>
                              </Modal>
                            </CardBody>
                        </Card>

                        <Card as="a" onClick={this.toggleModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/eggs-bennedict.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Breakfast</CardTitle>
                            </CardBody>
                        </Card>

                        <Card as="a" onClick={this.toggleModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/fancyfood.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Lunch &amp; Dinner</CardTitle>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    )}
}

function CafeMenu(props){
    const cafe = props.menudata.filter(menu => menu.menu === "cafe");
    return(
        <Row>
            <Col>
                <DripMenu menudata = {cafe}/>
                <EspressoMenu menudata = {cafe}/>
            </Col>
        </Row>
    )
  }
  
  function DripMenu(props){
    const drip = props.menudata.filter(menu => menu.submenu === "drip coffee");
    return(
        <div id="driptoggler"  style={{ cursor: "pointer" }}>
        <h3 className="text-center">Drip Coffee</h3>
        <UncontrolledCollapse defaultOpen toggler="#driptoggler">
            <Menu menudata = {drip}/>
        </UncontrolledCollapse>
    </div>
    )
  }
  
  function EspressoMenu(props){
    const espresso = props.menudata.filter(menu => menu.submenu === "espresso");
    return(
        <div id="estoggler"  style={{ cursor: "pointer" }}>
            <h3 className="text-center">Espresso</h3>
            <UncontrolledCollapse toggler="#estoggler">
                <Menu menudata = {espresso}/>
            </UncontrolledCollapse>
        </div>
    )
  }
  
  function Menu(props){
        return(
            <Row>
            
            {props.menudata.map(menu => (
                 <Col sm={3}>
                <h3>{menu.item}</h3>
                <p>{menu.description}</p>
                  <p>
                    <span className="mr-3">{menu.price.small}</span>
                      <span className="mr-3">{menu.price.medium}</span>
                      <span>{menu.price.large}</span>
                  </p>
                
                  </Col>
            ))}
          
                </Row>
          )
  }
  

export default MenuPage;   