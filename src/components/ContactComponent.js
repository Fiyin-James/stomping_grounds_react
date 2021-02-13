import React, { Component } from 'react'; 
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ContactUs extends Component {
    render(){
        return(
        <div class="container-fluid mx-1">
        <div class="row">
            <div class="col mx-auto">
                <h3 class="text-center">We are always looking to improve; if you have any feedback, questions, or concerns, please feel free to reach out</h3>
                    <hr />
            </div>
        </div>

            <div class="row row-content">
                <div class="col-md-10">
                    <form>
                        <div class="form-group row">
                            <label for="firstName" class="col-md-2 col-form-label">First Name</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="lastName" class="col-md-2 col-form-label">Last Name</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="areaCode" class="col-md-2 col-form-label">Contact Tel.</label>
                            <div class="col-5 col-md-3">
                                <input type="tel" class="form-control" id="areaCode" name="areaCode" placeholder="Area code" />
                            </div>
                            <div class="col-7">
                                <input type="tel" class="form-control" name="telNum" placeholder="Tel. number" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-md-2 col-form-label">Email</label>
                            <div class="col-md-10">
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col offset-md-2">
                                May we contact you?
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" id="contactYes" name="contactRadios" value="yes" />
                                    <label for="contactYes" class="form-check-label">Yes</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" id="contactNo" name="contactRadios" value="no" />
                                    <label for="contactNo" class="form-check-label">No</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="feedback" class="col-md-2 col-form-label">Message</label>
                            <div class="col-md-10">
                                <textarea class="form-control" id="feedback" name="feedback" rows="8"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="offset-md-2 col-md-10">
                                <button type="submit" class="btn btn-primary">Send Feedback</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        )
    }
    
}

export default ContactUs;