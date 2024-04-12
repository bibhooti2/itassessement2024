let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var contact = {
        name: name,
        email: email,
        phone: phone
    };

    addContactToList(contact);

    document.getElementById("contactForm").reset();
});

function addContactToList(contact) {
    var contactList = document.getElementById("contactList");
    var listItem = document.createElement("li");
    listItem.textContent = "Name: " + contact.name + ", Email: " + contact.email + ", Phone: " + contact.phone;
    contactList.appendChild(listItem);
}
