import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import gen from '../utils/index'

const congressNumber = 116
const apiKeyHeader = {
    "X-API-Key": "1ZTW2IDKkCIQocFGrH0USEmDZSiY7yUG4VYJ31Rz"
}
const recipients = [
    {
        title: "Select Recipients",
        firstName: "",
        lastName: "",
        state: "",
        inOffice: true
    },
    {
        title: "All Senators",
        firstName: "and",
        lastName: "House Members",
        state: "",
        inOffice: true
    },
    {
        title: "",
        firstName: "All",
        lastName: "Senators",
        state: "",
        inOffice: true
    },
    {
        title: "",
        firstName: "All",
        lastName: "House Members",
        state: "",
        inOffice: true
    }
]
const senators = []
const houseMembers = []
const allCongressPeople = []
// const singleMember = []
const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const date = new Date()
const monthKey = date.getMonth()
const month = monthArray[monthKey]
const day = date.getDate()
const year = date.getFullYear()
const formattedDate = `${month} ${day}, ${year}`
const templates = []

class GeneratorForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isGenerated: false,
            userData: {},
            letterData: []
        };
    }

    getSenateMembers() {
        fetch(
            `https://api.propublica.org/congress/v1/${congressNumber}/senate/members.json`,
            {
                method: "GET",
                headers: apiKeyHeader
            }
        ).then(
            response => response.json()
        ).then(
            json => {
                const memberArray = json.results[0].members
                for (let i = 0; i < memberArray.length; i++) {
                    if (memberArray[i].in_office === true) {
                        recipients.push(
                            {
                                "title": memberArray[i].short_title,
                                "firstName": memberArray[i].first_name,
                                "lastName": memberArray[i].last_name,
                                "address": memberArray[i].office,
                                "addressSecondLine": "Washington, DC 20510",
                                "inOffice": memberArray[i].in_office,
                                "state": memberArray[i].state,
                                "phone": memberArray[i].phone,
                                "fax": memberArray[i].fax,
                                "site": memberArray[i].url,
                                "email": memberArray[i].contact_form
                            }
                        )

                        senators.push(
                            {
                                "title": memberArray[i].short_title,
                                "firstName": memberArray[i].first_name,
                                "lastName": memberArray[i].last_name,
                                "address": memberArray[i].office,
                                "addressSecondLine": "Washington, DC 20510",
                                "inOffice": memberArray[i].in_office,
                                "state": memberArray[i].state,
                                "phone": memberArray[i].phone,
                                "fax": memberArray[i].fax,
                                "site": memberArray[i].url,
                                "email": memberArray[i].contact_form
                            }
                        )

                        allCongressPeople.push(
                            {
                                "title": memberArray[i].short_title,
                                "firstName": memberArray[i].first_name,
                                "lastName": memberArray[i].last_name,
                                "address": memberArray[i].office,
                                "addressSecondLine": "Washington, DC 20510",
                                "inOffice": memberArray[i].in_office,
                                "state": memberArray[i].state,
                                "phone": memberArray[i].phone,
                                "fax": memberArray[i].fax,
                                "site": memberArray[i].url,
                                "email": memberArray[i].contact_form
                            }
                        )
                    }
                }
            }
        )
    }

    getHouseMembers() {
        fetch(
            `https://api.propublica.org/congress/v1/${congressNumber}/house/members.json`,
            {
                method: "GET",
                headers: apiKeyHeader
            }
        ).then(
            response => response.json()
        ).then(
            json => {
                const memberArray = json.results[0].members
                for (let i = 0; i < memberArray.length; i++) {
                    if (memberArray[i].in_office === true) {
                        recipients.push(
                            {
                                "title": memberArray[i].short_title,
                                "firstName": memberArray[i].first_name,
                                "lastName": memberArray[i].last_name,
                                "address": memberArray[i].office,
                                "addressSecondLine": "Washington, DC 20515",
                                "inOffice": memberArray[i].in_office,
                                "state": memberArray[i].state,
                                "phone": memberArray[i].phone,
                                "fax": memberArray[i].fax,
                                "site": memberArray[i].url,
                                "email": memberArray[i].contact_form
                            }
                        )
                        houseMembers.push(
                            {
                                "title": memberArray[i].short_title,
                                "firstName": memberArray[i].first_name,
                                "lastName": memberArray[i].last_name,
                                "address": memberArray[i].office,
                                "addressSecondLine": "Washington, DC 20515",
                                "inOffice": memberArray[i].in_office,
                                "state": memberArray[i].state,
                                "phone": memberArray[i].phone,
                                "fax": memberArray[i].fax,
                                "site": memberArray[i].url,
                                "email": memberArray[i].contact_form
                            }
                        )
                        allCongressPeople.push({
                            "title": memberArray[i].short_title,
                            "firstName": memberArray[i].first_name,
                            "lastName": memberArray[i].last_name,
                            "address": memberArray[i].office,
                            "addressSecondLine": "Washington, DC 20515",
                            "inOffice": memberArray[i].in_office,
                            "state": memberArray[i].state,
                            "phone": memberArray[i].phone,
                            "fax": memberArray[i].fax,
                            "site": memberArray[i].url,
                            "email": memberArray[i].contact_form
                        })
                    }
                }
            }
        )
    }

    addToSelectionList(reciptientOptions) {
        setTimeout(
            function () {
                // console.log('waiting...',recipients.length)

                for (let i = 0; i < recipients.length; i++) {
                    // console.log(recipients[i])
                    reciptientOptions.options[i] = new Option(
                        `${recipients[i].title} ${recipients[i].firstName} ${recipients[i].lastName} ${recipients[i].state}`,
                        `${recipients[i].title}-${recipients[i].firstName}-${recipients[i].lastName}`,
                        false,
                        false
                    )
                }

            },
            1000
        )
    }

    createRecipientArray(recipientArray, senderData) {

        // console.log(senderData)
        // console.log(recipientArray)
        for (let i = 0; i < recipientArray.length; i++) {
            templates.push(
                {
                    "html": `<div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="jumbotron jumbotron-fluid" style="background-color: white;">
                                <div class="container">
                                    <h5 style="text-align: center;">
                                        FROM THE DESK OF
                                    </h5>
                                    <hr>
                                    <h5 style="text-align: center;">
                                        ${senderData.firstName} ${senderData.lastName}
                                    </h5 style="text-align: center;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2" style="font-weight: bold;">
                            FROM:
                        </div>
                        <p class='col-10'>
                            ${senderData.firstName} ${senderData.lastName} <br>
                            ${senderData.addressLineOne}<br>
                            ${senderData.addressLineTwo}<br>
                            ${senderData.city}, ${senderData.state} ${senderData.zip}<br>
                            Phone: ${senderData.phone}<br>
                            Email: ${senderData.email}<br>
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-2" style="font-weight: bold;">
                            DATE:
                        </div>
                        <p class='col-10'>
                            ${formattedDate}
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-2" style="font-weight: bold;">
                            TO:
                        </div>
                        <p class='col-10'>
                            ${recipientArray[i].title} ${recipientArray[i].firstName} ${recipientArray[i].lastName}<br>
                            ${recipientArray[i].address}<br>
                            ${recipientArray[i].addressSecondLine}
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-2" style="font-weight: bold;">
                            SUBJECT:
                        </div>
                        <p class='col-10' style="font-weight: bold;">
                            ${senderData.subject}
                        </p>
                    </div>
                    <div class="row">
                        <p class='col-11'>
                            Dear ${recipientArray[i].title} ${recipientArray[i].lastName},
                        </p>
                    </div>
                    <div class="row">
                        <p class='col-11'>
                            ${senderData.message}
                        </p>
                    </div>
                    <div class="row">
                        <p class='col-11'>
                            Sincerely,<br>
                            <br>
                            <br>
                            ${senderData.firstName} ${senderData.lastName}<br>
                        </p>
                    </div>
                    <p style="page-break-before: always"> </p>
                </div>
                     `
                }
            );
            this.setState(
                {letterData: templates}
            )
        }
        setTimeout(() => {
            this.setState(
                {isGenerated: true}
            )
        }, 1000);
    }

    determineRecipientList(reciptientOptions, senderData) {
        if (reciptientOptions.value.trim() === "-All-Senators") {
            // console.log(senators)
            this.createRecipientArray(senators, senderData)
        } else if (reciptientOptions.value.trim() === "-All-House Members") {
            // console.log(houseMembers)
            this.createRecipientArray(houseMembers, senderData)
        } else if (reciptientOptions.value.trim() === "All Senators-and-House Members") {
            // console.log(allCongressPeople)
            this.createRecipientArray(allCongressPeople, senderData)
        } else {
            const e = allCongressPeople.filter(
                f => {
                    let formattedName = `${f.title}-${f.firstName}-${f.lastName}`
                    // console.log(formattedName)
                    return reciptientOptions.value.trim() === formattedName
                }
            )
            this.createRecipientArray(e, senderData)
        }
    }




    handleSubmit(e) {
        e.preventDefault();

        const senderData = {
            "firstName": document.getElementById('sender-first-name').value,
            "lastName": document.getElementById('sender-last-name').value,
            "addressLineOne": document.getElementById('formGridAddress1').value,
            "addressLineTwo": document.getElementById('formGridAddress2').value,
            "city": document.getElementById('formGridCity').value,
            "state": document.getElementById('formGridState').value,
            "zip": document.getElementById('formGridZip').value,
            "email": document.getElementById('formHorizontalEmail').value,
            "phone": document.getElementById('formHorizontalPhone').value,
            "subject": document.getElementById('subject').value,
            "message": document.getElementById('message_area').value
        }

        const reciptientOptions = document.getElementById('recipients')
        this.determineRecipientList(reciptientOptions, senderData)
        
    }

    componentDidMount() {
        const reciptientOptions = document.getElementById('recipients')
        this.getSenateMembers()
        this.getHouseMembers()
        this.addToSelectionList(reciptientOptions)
    }

    render() {
        if (this.state.isGenerated === true) {
            return <Redirect
                // data={this.state} 
                to={{
                    pathname: '/letters',
                    state: this.state
                }}
            />;
        }

        return (
            <Form>
                <Container>
                    <Form.Row>
                        <h2>
                            Your Information:
                        </h2>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control id="sender-first-name" placeholder="Ruth" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control id="sender-last-name" placeholder="Ginsberg" />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control id="formGridAddress1" placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control id="formGridAddress2" placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control id="formGridCity" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>State</Form.Label>
                            <Form.Control id="formGridState" as="select" defaultValue="Choose...">
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

                        <Form.Group as={Col}>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control id="formGridZip" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Email:
                            </Form.Label>
                        <Col sm={10}>
                            <Form.Control id="formHorizontalEmail" type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Phone Number:
                            </Form.Label>
                        <Col sm={10}>
                            <Form.Control id="formHorizontalPhone" type="phone_number" placeholder="(555) 123-4567" />
                        </Col>
                    </Form.Group>

                    <Form.Row>
                        <h2>
                            Recipient Information:
                        </h2>
                    </Form.Row>



                    <Form.Group>
                        <Form.Label>
                            Recipients:
                        </Form.Label>
                        <Form.Control as="select" name="recipients" id="recipients" defaultValue="Choose...">
                            <option required>Select Recipients</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Row>
                        <h2>
                            Your Message:
                        </h2>
                    </Form.Row>

                    <Form.Group >
                        <Form.Label>Subject</Form.Label>
                        <Form.Control id="subject" placeholder="Ex: Healthcare in America" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Please type your message below.</Form.Label>
                        <Form.Control as="textarea" id="message_area" rows="8" />
                    </Form.Group>


                    <Form.Group>
                        <Button
                            type="submit"
                            value="Generate"
                            id="generate"
                            onClick={e => this.handleSubmit(e)}
                        >Generate</Button>
                    </Form.Group>
                </Container>
            </Form>

        )
    }
};

export default GeneratorForm;