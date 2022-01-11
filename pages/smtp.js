function sendEmail(){
    Email.send({
        // SecureToken: "67e3554c-e7ee-4d9d-93d0-8611ed03bdf3",
        Host : "smtp.gmail.com",
        Username : "xeeyang08@gmail.com",
        Password : "ooedqzmqatcrcold",
        To : 'xeeyang08@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Inquiry",
        Body : "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone number: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
} 