// GLOBAL VARIABLES
// import React from "react";

// import jsPDF from "jspdf";
// import html2pdf from 'html2pdf.js'
// const puppeteer = require('puppeteer');
// const convertHTMLToPDF = require("pdf-puppeteer");
// const html2canvas = window.html2canvas
// var fs = require('fs');


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

const gen = {
    getSenateMembers: function () {
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
    },
    getHouseMembers: function () {
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
    },
    addToSelectionList: function (reciptientOptions) {
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
    },
    createRecipientArray: function (recipientArray, senderData) {
        
        // console.log(senderData)
        // console.log(recipientArray)
        for (let i = 0; i < recipientArray.length; i++) {
            templates.push(
                {
                    "html": `                    
                    <div class="container">
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
        }
        console.log(templates)

    },
    determineRecipientList: function (reciptientOptions, senderData) {
        if (reciptientOptions.value.trim() === "-All-Senators") {
            // console.log(senators)
            gen.createRecipientArray(senators, senderData)
        } else if (reciptientOptions.value.trim() === "-All-House Members") {
            // console.log(houseMembers)
            gen.createRecipientArray(houseMembers, senderData)
        } else if (reciptientOptions.value.trim() === "All Senators-and-House Members") {
            // console.log(allCongressPeople)
            gen.createRecipientArray(allCongressPeople, senderData)
        } else {
            const e = allCongressPeople.filter(
                f => {
                    let formattedName = `${f.title}-${f.firstName}-${f.lastName}`
                    // console.log(formattedName)
                    return reciptientOptions.value.trim() === formattedName
                }
            )
            gen.createRecipientArray(e, senderData)
        }
    }

}

export default gen;