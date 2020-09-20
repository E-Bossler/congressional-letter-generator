import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

class GeneratorForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {

        return (

            <Form>
                <Container>
                    <Row>
                        <h2>
                            Your Information:
                        </h2>
                    </Row>
                    {/* <Form.Group as={Row}>
                        <Form.Label as={Col}>
                            Your Name:
                        </Form.Label>
                        <Col>
                            <input name="name" className="inputs" type="text" required id="senderName" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <label for="address" className="col-4">Your Mailing Address:</label>
                        <textarea name="address" className="col-8 inputs" rows="3" cols="30" id="senderAddress" required></textarea>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <label for="phone_num" className="col-4">Your Phone Number:</label>
                        <input type="tel" className="col-8 inputs" id="phone_num" name="phone_num" required />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <label for="email_input" className="col-4">Enter your email address:</label>
                        <input type="email" className="col-8  inputs" name="email" id="email_input" placeholder="Your Email" required />
                    </Form.Group> */}
                    <Form.Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="John" />
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Doe" />
                        </Col>
                    </Form.Row>
                    
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email:
                            </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPhone">
                        <Form.Label column sm={2}>
                            Phone Number:
                            </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="phone_number" placeholder="(555) 123-4567" />
                        </Col>
                    </Form.Group>

                    <Row>
                        <h2>
                            Recipient Information:
                        </h2>
                    </Row>



                    <Form.Group>
                        <Form.Label>
                            Recipients:
                        </Form.Label>
                        <Form.Control as="select" name="recipients" id="recipients" defaultValue="Choose...">
                            <option required>Select Recipients</option>
                        </Form.Control>
                    </Form.Group>
                    <Row>
                        <h2>
                            Your Message:
                        </h2>
                    </Row>
                    <Form.Group as={Row}>
                        <label className="col-4" for="subject">Subject:</label>
                        <input className="col-8 inputs" name="subject" size="15" type="text" required id="subject" />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <label className="col-12" for="message_area">Please type your message below.</label>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <textarea className="col-12  inputs" id="message_area" rows="8" cols="70" required></textarea>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <input name="Submit" className="inputs" type="submit" value="Generate" id="generate" />
                    </Form.Group>
                </Container>
            </Form>

        )
    }
};

export default GeneratorForm;