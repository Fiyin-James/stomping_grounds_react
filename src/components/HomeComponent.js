import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// function RenderCard({item}) {
//     return (
//         <Card>
//             <CardImg src={item.image} alt={item.name} />
//             <CardBody>
//                 <CardTitle>{item.name}</CardTitle>
//                 <CardText>{item.description}</CardText>
//             </CardBody>
//         </Card>
//     );
// }

// function Home(props) {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md m-1">
//                     <RenderCard item={props.campsite} />
//                 </div>
//                 <div className="col-md m-1">
//                     <RenderCard item={props.promotion} />
//                 </div>
//                 <div className="col-md m-1">
//                     <RenderCard item={props.partner} />
//                 </div>
//             </div>
//         </div>
//     );
// }

function Home(){
    return(
        <div class="container-fluid" >
            <div class="row ">
                <div  class="col-md-8">
                    <img class="img-fluid" src="/assets/imgs/coffe.jpg" alt="coffee" />
                </div>
                <div class="col-md-4 align-self-center"> 
                    <h1 class=" display-4 my-4 text-center ">Coffee Crafted With Joy</h1>
                    <h4 > <strong>We provide you with top notch coffee. Crafted by proffesionals, our menu option will suit your need. </strong></h4>
                </div>
            </div>
        <div class="row mt-5" >
            <div class="col"> 
                <h1 class="text-center">Reviews</h1>
                <p class="text-center"><i class="text"> *Excellent coffee and tea choices <br />
                        *Love their tomato basil soup <br />
                        *Good sandwiches with lots of healthy choices <br />
                        *Great venue to meet freinds</i> </p>
        
            </div>
            <div class="col"> 
                <h1 class="text-center">The People</h1>
                <p>Formed by a group of coffee lovers,we present to you the perfect coffee.</p>
            </div>
            <div class="col-md-4">
                <h1 class="text-center">Gallery</h1>
                <div id="homeCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#homeCarousel" data-slide-to="1"></li>
                        <li data-target="#homeCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="imgs/barista.png" alt="Breadcrumb Trail Campground" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="imgs/cocktail.png" alt="React Lake Campground" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="imgs/staff.png" alt="Chrome River Campground" />
                        </div>
                    </div>
                        
                        <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                            <span class="sr-only">Next</span>
                        </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;   