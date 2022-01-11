function sendEmail(){
    Email.send({
        SecureToken: "1f84f0e3-6e59-4146-b861-d5e6fd92f50c",
        // Host : "smtp.gmail.com",
        // Username : "xeeyang08@gmail.com",
        // Password : "ooedqzmqatcrcold",
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