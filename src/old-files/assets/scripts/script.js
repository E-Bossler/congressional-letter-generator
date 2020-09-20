// DOM VARIABLES

const reciptientOptions = document.getElementById('recipients')
const generateButton = document.getElementById('generate')
const senderName = document.getElementById('senderName')
const senderAddress = document.getElementById('senderAddress')
const senderPhone = document.getElementById('phone_num')
const senderEmail = document.getElementById('email_input')
const senderSubject= document.getElementById('subject')
const senderMessage = document.getElementById('message_area')
const contentHTML = document.getElementById('content')

// GLOBAL VARIABLES

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
const singleMember = []
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

// GLOBAL FUNCTIONS 

function getSenateMembers() {
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
function getHouseMembers() {
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

function addToSelectionList() {
    setTimeout(
        function () {
            // console.log('waiting...',recipients.length)
            for (let i = 0; i < recipients.length; i++) {
                // console.log(recipients[i])
                reciptientOptions.options[i] = new Option(
                    `${recipients[i].title} ${recipients[i].firstName} ${recipients[i].lastName} ${recipients[i].state}`,
                    `${recipients[i].title} ${recipients[i].firstName} ${recipients[i].lastName}`
                )
            }
        },
        1000
    )
}

function determineRecipientList() {

    if (reciptientOptions.value.trim() === "All Senators") {
        // console.log(senators)
        createLetters(senators)
    } else if (reciptientOptions.value.trim() === "All House Members") {
        // console.log(houseMembers)
        createLetters(houseMembers)
    } else if (reciptientOptions.value.trim() === "All Senators and House Members") {
        // console.log(allCongressPeople)
        createLetters(allCongressPeople)
    } else {
        for (let i = 0; i < allCongressPeople.length; i++) {
            if (reciptientOptions.value.trim() === `${recipients[i].title} ${recipients[i].firstName} ${recipients[i].lastName}`) {
                singleMember.push(
                    recipients[i]
                )
                createLetters(singleMember)
                singleMember.length = 0
            }
        }
    }
}

function createLetters(recipientArray) {
    for (let i = 0; i < recipientArray.length; i++) {
        // console.log(
        //     `${recipientArray[i].title} ${recipientArray[i].firstName} ${recipientArray[i].lastName}`,
        //     "\n",
        //     `${recipientArray[i].address}`,
        //     "\n",
        //     `${recipientArray[i].addressSecondLine}`
        // )

        // console.log(formattedDate)

        let elementHTML = `
        <!doctype html>
        <html lang="en">
        
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        
            <title>LETTER TO CONGRESS</title>
        </head>
        
        <body>
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
                                    ${senderName.value}
                                </h5 style="text-align: center;">
                            </div>
                        </div>
                    </div>
        
                </div>
                <d>
                    <div class="row">
                        <div class="col-2" style="font-weight: bold;">
                            FROM:
                        </div>
                        <p class='col-10'>
                            ${senderName.value}<br>
                            ${senderAddress.value}<br>
                            Phone: ${senderPhone.value}<br>
                            Email: ${senderEmail.value}<br>
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
                            ${senderSubject.value}
                        </p>
                    </div>
                    <div class="row">
                        <p class='col-11'>
                            Dear ${recipientArray[i].title} ${recipientArray[i].lastName},
                        </p>
                    </div>
                    <div class="row">
                        <p class='col-11'>
                            ${senderMessage.value}
                        </p>
                    </div>
                    <div class="row">
                        <p class='col-11'>
                            Sincerely,<br>
                            <br>
                            <br>
                            ${senderName.value}<br>
                        </p>
                    </div>
            </div>
            <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                crossorigin="anonymous"></script>
        </body>
        
        </html>
        `
        console.log(elementHTML)
    }
}

// EVENT LISTENERS 

generateButton.addEventListener('click', function (e) {
    e.preventDefault();
    determineRecipientList();
})

// PAGE INITIALIZATION 

getSenateMembers()
getHouseMembers()
addToSelectionList()