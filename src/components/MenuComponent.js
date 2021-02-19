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
                        // enterTransform: 'translateX(-100%)',
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
    // {console.log(props.menudata)}
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
    // {console.log(props.menudata)}
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

  function BreakfastMenu(props){
    // {console.log(props.menudata)}
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
  
//   function DripMenu(props){
//     const drip = props.menudata.filter(menu => menu.submenu === "drip coffee");
//     return(
//         <div id="driptoggler"  style={{ cursor: "pointer" }}>
//         <h2 className="text-center submenu">{drip[0].submenu}</h2>
//         <UncontrolledCollapse defaultOpen toggler="#driptoggler">
//             <Menu menudata = {drip}/>
//         </UncontrolledCollapse>
//     </div>
//     )
//   }
  
//   function EspressoMenu(props){
//     const espresso = props.menudata.filter(menu => menu.submenu === "espresso");
//     return(
//         <div id="estoggler"  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{espresso[0].submenu}</h2>
//             <UncontrolledCollapse toggler="#estoggler">
//                 <Menu menudata = {espresso}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function TeaMenu(props){
//     const tea = props.menudata.filter(menu => menu.submenu === "loose leaf tea");
//     return(
//         <div id="teatoggler"  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{tea[0].submenu}</h2>
//             <UncontrolledCollapse toggler="#teatoggler">
//                 <Menu menudata = {tea}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function HotDrinksMenu(props){
//     const hotDrinks = props.menudata.filter(menu => menu.submenu === "hot drinks");
//     return(
//         <div id="hottoggler"  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{hotDrinks[0].submenu}</h2>
//             <UncontrolledCollapse toggler="#hottoggler">
//                 <Menu menudata = {hotDrinks}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function SmoothieMenu(props){
//     const smoothie = props.menudata.filter(menu => menu.submenu === "fresh fruit smoothies");
//     return(
//         <div id="smtoggler"  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{smoothie[0].submenu}</h2>
//             <UncontrolledCollapse toggler="#smtoggler">
//                 <Menu menudata = {smoothie}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function IceCreamMenu(props){
//     const ic = props.menudata.filter(menu => menu.submenu === "ice cream drinks");
//     return(
//         <div id="ictoggler"  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{ic[0].submenu}</h2>
//             <UncontrolledCollapse toggler="#ictoggler">
//                 <Menu menudata = {ic}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function ColdDrinksMenu(props){
//     const coldDrinks = props.menudata.filter(menu => menu.submenu === "cold drinks");
//     return(
//         <div id="coldDrinkstoggler"  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{coldDrinks[0].submenu}</h2>
//             <UncontrolledCollapse toggler="#coldDrinkstoggler">
//                 <Menu menudata = {coldDrinks}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function Cocktail(props){
//     const cocktail = props.menudata.filter(menu => menu.submenu === "cocktails");
//     return(
//         <div id="cocktailtoggler"  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{cocktail[0].submenu}</h2>
//             <UncontrolledCollapse toggler="#cocktailtoggler">
//                 <Menu menudata = {cocktail}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function RedWine(props){
//     const redWine = props.menudata.filter(menu => menu.submenu === "red wine");
//     const myVar = 'redWine'

//     return(
//         <div id={myVar}  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{redWine[0].submenu}</h2>
//             <UncontrolledCollapse toggler={myVar}>
//                 <Menu menudata = {redWine}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function Beer(props){
//     const myVar = 'beer'
//     return(
//         <div id={myVar} style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">tap beer</h2>
//             <UncontrolledCollapse toggler={myVar}>
//                 <Card className="menu-card">
//                     <CardBody>
//                         <Row className="justify-content-center">
//                             <Col>
//                               <h5 className="text-center">Check our specials menu for rotating selections.</h5>
//                             </Col>
//                         </Row>
//                     </CardBody>
//                 </Card>
//             {/* <div className="col-lg-3 menu-card card ">
//                             <div className="card-body ">
//                                 <div className="row justify-content-center">
//                                     <div className="col-12">
//                                         <h5 className="text-center">Check our specials menu for rotating selections.</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> */}
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function WhiteWine(props){
//     const whiteWine = props.menudata.filter(menu => menu.submenu === "white wine");
//     const myVar = 'whiteWine'

//     return(
//         <div id={myVar}  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{whiteWine[0].submenu}</h2>
//             <UncontrolledCollapse toggler={myVar}>
//                 <Menu menudata = {whiteWine}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function BreakfastSubmenu(props){
//     const breakfast = props.menudata.filter(menu => menu.submenu === "breakfast");
//     const myVar = 'breakfast'

//     return(
//         <div id={myVar}  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{breakfast[0].submenu}</h2>
//             <UncontrolledCollapse toggler={myVar}>
//                 <Menu menudata = {breakfast}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function ALaCarteMenu(props){
//     const carte = props.menudata.filter(menu => menu.submenu === "\xE1 la carte");
//     const myVar = 'aLaCarte'

//     return(
//         <div id={myVar}  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{carte[0].submenu}</h2>
//             <UncontrolledCollapse toggler={myVar}>
//                 <Menu menudata = {carte}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function SmallPlates(props){
//     const plates = props.menudata.filter(menu => menu.submenu === "small plates");
//     const myVar = 'smallPlates'

//     return(
//         <div id={myVar}  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{plates[0].submenu}</h2>
//             <UncontrolledCollapse toggler={myVar}>
//                 <Menu menudata = {plates}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function Soups(props){
//     const soups = props.menudata.filter(menu => menu.submenu === "soups & salads");
//     const myVar = 'soups'

//     return(
//         <div id={myVar}  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{soups[0].submenu}</h2>
//             <UncontrolledCollapse toggler={myVar}>
//                 <Menu menudata = {soups}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function Sandwiches(props){
//     const sandwiches = props.menudata.filter(menu => menu.submenu === "sandwiches");
//     const myVar = 'sandwich'

//     return(
//         <div id={myVar}  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{sandwiches[0].submenu}</h2>
//             <UncontrolledCollapse toggler={myVar}>
//                 <Menu menudata = {sandwiches}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

//   function Pasta(props){
//     const pasta = props.menudata.filter(menu => menu.submenu === "pasta");
//     const myVar = 'pasta'

//     return(
//         <div id={myVar}  style={{ cursor: "pointer" }}>
//             <h2 className="text-center submenu">{pasta[0].submenu}</h2>
//             <UncontrolledCollapse toggler={myVar}>
//                 <Menu menudata = {pasta}/>
//             </UncontrolledCollapse>
//         </div>
//     )
//   }

  
//   export function Menu(props){
//         return(
//             <Row>
//             {props.menudata.map(menu => (
//                  <Col className="border p-3" lg="3" key={menu.id}>
//                       <Row className="align-items-center">
//                                 <Col xs="12">
                                  
//                                     <h4 className="text-center">{menu.item}</h4>
                               
//                                 </Col>
//                                 <Col xs="12" className="align-items-center">
                         
//                                     <p className="menu-description text-center">{menu.description}</p>
                               
//                                 </Col>
//                                 <Col lg="12" className="text-center">
                      
//                                     <span className="menu-price">{menu.price.small}</span>
//                                     <span className="menu-price ml-3">{menu.price.medium}</span>
//                                     <span className="menu-price ml-3">{menu.price.large}</span>
                                
//                                 </Col>
//                       </Row>
//                   </Col>
//             ))}
//             </Row>
//         )
//   }
  

export default MenuPage;   