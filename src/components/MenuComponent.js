import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardDeck, CardTitle, Col, Modal, ModalHeader, ModalBody, Row, Container, UncontrolledCollapse  } from 'reactstrap';
// import { MENUDATA } from '../shared/menudata';
import { Fade, Stagger, FadeTransform } from 'react-animation-components';
import { CafeMenuItem } from './menu/submenuComponent';
import { MENU } from '../shared/refactorMenuData'

class MenuPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isCafeModalOpen: false,
            isBarModalOpen: false,
            isBreakfastModalOpen: false,
            isDinnerModalOpen: false,
            menudata: MENU
            
        };
        this.toggleCafeModal = this.toggleCafeModal.bind(this);
        this.toggleBarModal = this.toggleBarModal.bind(this);
        this.toggleBreakfastModal = this.toggleBreakfastModal.bind(this);
        this.toggleDinnerModal = this.toggleDinnerModal.bind(this);
    }

    toggleCafeModal() {
        this.setState({
            isCafeModalOpen: !this.state.isCafeModalOpen
        });
    }

    toggleBarModal() {
        this.setState({
            isBarModalOpen: !this.state.isBarModalOpen
        });
    }

    toggleBreakfastModal() {
        this.setState({
            isBreakfastModalOpen: !this.state.isBreakfastModalOpen
        });
    }

    toggleDinnerModal() {
        this.setState({
            isDinnerModalOpen: !this.state.isDinnerModalOpen
        });
    }


    render(){
    return(
       <Container fluid>
           <Fade in>
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
                <Stagger in>
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'translateX(100%)'
                    }}
                >
                <CardDeck>
                    <Col md="6" lg="3">
                        <Card as="a" onClick={this.toggleCafeModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/counterculture-coffee.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Cafe</CardTitle>
                                <Modal size="lg" isOpen={this.state.isCafeModalOpen} toggle={this.toggleCafeModal}>
                                        <ModalHeader toggle={this.toggleCafeModal}>Cafe Menu</ModalHeader>
                                        <p className="top-menu-hours text-center">Available 8am-6:30pm</p>
                                        <ModalBody>
                                            {console.log(this.state.menudata.cafeMenu)}
                                            <CafeMenu menudata = {this.state.menudata.cafeMenu} />
                                        </ModalBody>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" lg="3">
                        <Card as="a" onClick={this.toggleBarModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/wine.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="text-center" tag="h5">Bar</CardTitle>
                                    <Modal size="lg" isOpen={this.state.isBarModalOpen} toggle={this.toggleBarModal}>
                                        <ModalHeader toggle={this.toggleBarModal}>Bar Menu</ModalHeader>
                                        <ModalBody>
                                        {console.log(this.state.menudata.cafeMenu)}
                                            <BarMenu menudata = {this.state.menudata.barMenu} />
                                        </ModalBody>
                                    </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" lg="3">
                        <Card as="a" onClick={this.toggleBreakfastModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/eggs-bennedict.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center" tag="h5">Breakfast</CardTitle>
                                <Modal size="lg" isOpen={this.state.isBreakfastModalOpen} toggle={this.toggleBreakfastModal}>
                                        <ModalHeader toggle={this.toggleBreakfastModal}>Breakfast Menu</ModalHeader>
                                        <ModalBody>
                                            <BreakfastMenu menudata = {this.state.menudata.breakfastMenu} />
                                        </ModalBody>
                                    </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" lg="3">
                        <Card as="a" onClick={this.toggleDinnerModal} style={{ cursor: "pointer" }}>
                            <CardImg top width="100%" src="/assets/imgs/fancyfood.png" alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-center card-title" tag="h5">Lunch &amp; Dinner</CardTitle>
                            <Modal size="lg" isOpen={this.state.isDinnerModalOpen} toggle={this.toggleDinnerModal}>
                                        <ModalHeader toggle={this.toggleDinnerModal}>Lunch &amp; Dinner Menu</ModalHeader>
                                        <ModalBody>
                                            <DinnerMenu menudata = {this.state.menudata.dinnerMenu} />
                                        </ModalBody>
                                    </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                </CardDeck>
                </FadeTransform>
                </Stagger>
            </Row>
            </Fade>
        </Container>
    )}
}

function CafeMenu(props){
    return(
          <Row>   
            <Col>
            {props.menudata.map((cafe , index) =>
            <CafeMenuItem menudata = {cafe} index={index} />
                )}
            </Col>
        </Row>
    )
  }

  function BarMenu(props){
    return(
          <Row>   
            <Col>
            {props.menudata.map((cafe , index) =>
            <CafeMenuItem menudata = {cafe} index={index} />
                )}
                <Beer />
            </Col>   
        </Row>
    )
  }

  function BreakfastMenu(props){
    return(
          <Row>   
            <Col>
            {props.menudata.map((cafe , index) =>
            <CafeMenuItem menudata = {cafe} index={index} />
                )}
            </Col>
        </Row>
    )
  }

  function DinnerMenu(props){
    return(
        <Row>   
          <Col>
          {props.menudata.map((dinner , index) =>
          <CafeMenuItem menudata = {dinner} index={index} />
              )}
          </Col>
      </Row>
  )
}

  function Beer(props){
    const myVar = 'beer'
    return(
        <div id={myVar} style={{ cursor: "pointer" }}>
            <h2 className="text-center submenu">tap beer</h2>
            <UncontrolledCollapse toggler={myVar}>
                <Card className="menu-card">
                    <CardBody>
                        <Row className="justify-content-center">
                            <Col>
                              <h5 className="text-center">Check our specials menu for rotating selections.</h5>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>
    )
  }

export default MenuPage;   