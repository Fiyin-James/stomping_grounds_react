import React from 'react';
import { Row, Col, UncontrolledCollapse  } from 'reactstrap';
// import { Menu } from '../MenuComponent'

export function CafeMenuItem(props){
   
    return(
        <div id={`driptoggler-${props.menudata.menuItemId}`}  style={{ cursor: "pointer" }}>
        <h2 className="text-center submenu">{props.menudata.menuItemName}</h2>
        <UncontrolledCollapse defaultOpen={props.index === 0} toggler={`driptoggler-${props.menudata.menuItemId}`}>
  
            <SubMenuComponent menuKey={props.menudata.menuItemName} menudata = {props.menudata.submenuOptions}/>
           
        </UncontrolledCollapse>
    </div>
    )
  }

  export function SubMenuComponent(props){
    return(
        <Row>       
        {props.menudata.map((menu) => (
             <Col className="border p-3" lg="3" key={`${props.menuKey}-${menu.id}`} >
                  <Row className="align-items-center">
                        <Col xs="12">
                            <h4 className="text-center">{menu.item}</h4>
                        </Col>
                        <Col xs="12" className="align-items-center">
                            <p className="menu-description text-center">{menu.description}</p>
                        </Col>
                        <Col lg="12" className="text-center">
                
                            <span className="menu-price">{menu.price.small}</span>
                            <span className="menu-price ml-3">{menu.price.medium}</span>
                            <span className="menu-price ml-3">{menu.price.large}</span>
                        </Col>
                  </Row>
              </Col>
        ))}
        </Row>
    )
}