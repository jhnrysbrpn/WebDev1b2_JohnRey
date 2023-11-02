var phoneBook = [];

function addContact(userName, userNumber) {
    let contactObject = {
        contactName: userName,
        contactNumber: userNumber
    };
    phoneBook.push(contactObject);
    alert("Contact added, phonebook updated");
}


function submitContact() {

    let userName = document.getElementById("userName").value;
    let userNumber = document.getElementById("userNumber").value;


    if (userName === "" || userNumber === "") {
        alert("Both fields are required");
    } else {

        addContact(userName, userNumber);
        document.getElementById("userName").value = "";
        document.getElementById("userNumber").value = "";
    }
}

function viewContacts() {
    console.log(phoneBook);
}
