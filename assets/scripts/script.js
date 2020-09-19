const reciptientOptions = document.getElementById('recipients')
const generateButton = document.getElementById('generate')
const senderName = document.getElementById('senderName')
const senderAddress = document.getElementById('senderAddress')
const senderPhone = document.getElementById('senderPhone')
const senderEmail = document.getElementById('email_input')
const senderMessage = document.getElementById('message_area')
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
                    `${recipients[i].title} ${recipients[i].firstName} ${recipients[i].lastName}`,
                    `${recipients[i].title} ${recipients[i].firstName} ${recipients[i].lastName}`
                )
            }
        },
        1500
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
        for (let i=0; i<allCongressPeople.length; i++) {
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
    for (let i=0; i<recipientArray.length; i++) {
        console.log(
            `${recipientArray[i].title} ${recipientArray[i].firstName} ${recipientArray[i].lastName}`,
            "\n",
            `${recipientArray[i].address}`,
            "\n",
            `${recipientArray[i].addressSecondLine}`
            )
    }
}

generateButton.addEventListener('click', function (e) {
    e.preventDefault();
    determineRecipientList();
})

getSenateMembers()
getHouseMembers()
addToSelectionList()