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
    // console.log(phoneBook);
    var para = document.createElement("p");
    var node = document.createTextNode("");
    para.append(node);
    var element = document.getElementById('viewContacts');
    element.append(para);
}

// var myNodelist = document.querySelectorAll('phoneBook');
// var toPrint = "";
// for(var i = 0; i <= myNodelist.length-1; i++) {
//     toPrint = toPrint + myNodelist[i].innerHTML;
// }
// document.getElementById('viewContacts').innerHTML = "fasfsafa" + toPrint;