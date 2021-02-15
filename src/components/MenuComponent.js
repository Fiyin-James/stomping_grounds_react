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
                <CardDeck>
                    <Col md="6" lg="3">
                        <Card as="a" onClick={this.toggleModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/counterculture-coffee.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Cafe</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" lg="3">
                        <Card as="a" onClick={this.toggleModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/wine.png" alt="Card image cap" />
                            <CardBody>
                                {console.log(this.state)}
                            <CardTitle className="text-center" tag="h5">Bar</CardTitle>
                                <Modal size="lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                    <ModalHeader toggle={this.toggleModal}>Cafe Menu</ModalHeader>
                                    <p className="top-menu-hours text-center">Available 8am-6:30pm</p>
                                    <ModalBody>
                                          <CafeMenu menudata = {this.state.menudata} />
                                    </ModalBody>
                              </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" lg="3">
                        <Card as="a" onClick={this.toggleModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/eggs-bennedict.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Breakfast</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" lg="3">
                        <Card as="a" onClick={this.toggleModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/fancyfood.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center card-title" tag="h5">Lunch &amp; Dinner</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </CardDeck>
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
                <TeaMenu menudata = {cafe}/>
                <HotDrinksMenu menudata = {cafe}/>
                <SmoothieMenu menudata = {cafe}/>
                <IceCreamMenu menudata = {cafe}/>
                <ColdDrinksMenu menudata = {cafe}/>
            </Col>
        </Row>
    )
  }
  
  function DripMenu(props){
    const drip = props.menudata.filter(menu => menu.submenu === "drip coffee");
    return(
        <div id="driptoggler"  style={{ cursor: "pointer" }}>
        <h2 className="text-center submenu">{drip[0].submenu}</h2>
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
            <h2 className="text-center submenu">{espresso[0].submenu}</h2>
            <UncontrolledCollapse toggler="#estoggler">
                <Menu menudata = {espresso}/>
            </UncontrolledCollapse>
        </div>
    )
  }

  function TeaMenu(props){
    const tea = props.menudata.filter(menu => menu.submenu === "loose leaf tea");
    return(
        <div id="teatoggler"  style={{ cursor: "pointer" }}>
            <h2 className="text-center submenu">{tea[0].submenu}</h2>
            <UncontrolledCollapse toggler="#teatoggler">
                <Menu menudata = {tea}/>
            </UncontrolledCollapse>
        </div>
    )
  }

  function HotDrinksMenu(props){
    const hotDrinks = props.menudata.filter(menu => menu.submenu === "hot drinks");
    return(
        <div id="hottoggler"  style={{ cursor: "pointer" }}>
            <h2 className="text-center submenu">{hotDrinks[0].submenu}</h2>
            <UncontrolledCollapse toggler="#hottoggler">
                <Menu menudata = {hotDrinks}/>
            </UncontrolledCollapse>
        </div>
    )
  }

  function SmoothieMenu(props){
    const smoothie = props.menudata.filter(menu => menu.submenu === "fresh fruit smoothies");
    return(
        <div id="smtoggler"  style={{ cursor: "pointer" }}>
            <h2 className="text-center submenu">{smoothie[0].submenu}</h2>
            <UncontrolledCollapse toggler="#smtoggler">
                <Menu menudata = {smoothie}/>
            </UncontrolledCollapse>
        </div>
    )
  }

  function IceCreamMenu(props){
    const ic = props.menudata.filter(menu => menu.submenu === "ice cream drinks");
    return(
        <div id="ictoggler"  style={{ cursor: "pointer" }}>
            <h2 className="text-center submenu">{ic[0].submenu}</h2>
            <UncontrolledCollapse toggler="#ictoggler">
                <Menu menudata = {ic}/>
            </UncontrolledCollapse>
        </div>
    )
  }

  function ColdDrinksMenu(props){
    const coldDrinks = props.menudata.filter(menu => menu.submenu === "cold drinks");
    return(
        <div id="coldDrinkstoggler"  style={{ cursor: "pointer" }}>
            <h2 className="text-center submenu">{coldDrinks[0].submenu}</h2>
            <UncontrolledCollapse toggler="#coldDrinkstoggler">
                <Menu menudata = {coldDrinks}/>
            </UncontrolledCollapse>
        </div>
    )
  }


  
  function Menu(props){
        return(
            <Row > 
            {props.menudata.map(menu => (
                 <Col className="border p-3" lg="3" key={menu.id}>
                      <Row className="align-items-center">
                         <Col xs="12">
                             <h4 className="text-center">{menu.item}</h4>
                       </Col>
                        <Col xs="12" className="align-items-center">
                            <p className="menu-description text-center">{menu.description}</p>
                        </Col>
                        <Col lg="12" className="text-center">
                            <span className="menu-price mr-3">{menu.price.small}</span>
                            <span className="menu-price mr-3">{menu.price.medium}</span>
                            <span className="menu-price">{menu.price.large}</span>
                        </Col>
                      </Row>
                  </Col>
            ))}
            </Row>
        )
  }
  

export default MenuPage;   