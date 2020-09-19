const reciptientOptions = document.getElementById('recipients')

const congressNumber=116

const apiKeyHeader = {
    "X-API-Key": "1ZTW2IDKkCIQocFGrH0USEmDZSiY7yUG4VYJ31Rz"
}

const recipients = []

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
            for (let i=0; i<memberArray.length; i++) {
                recipients.push(
                    {
                        "title": memberArray[i].short_title,
                        "firstName": memberArray[i].first_name,
                        "lastName": memberArray[i].last_name,
                        "address": memberArray[i].office,
                        "addressSecondLine": "Washington, DC 20510"
                    }
                )
            }
        }
    )
}

function getHouseMembers() {

}

function addToSelectionList() {
    setTimeout(
        function() {
            console.log('waiting...',recipients.length)
            for (let i=0; i<recipients.length; i++) {
                console.log(recipients[i])
                reciptientOptions.options[i] = new Option(
                    `${recipients[i].title} ${recipients[i].firstName} ${recipients[i].lastName}`,
                    `${recipients[i].title}-${recipients[i].firstName}-${recipients[i].lastName}`
                )
            }
        }, 
        1500
    )
    console.log('after')
}

function createLetters() {
    console.log(recipients)
}

function init () {
    getSenateMembers()
    // getHouseMembers()
    addToSelectionList()
    // createLetters()
}

init();