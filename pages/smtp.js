function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "xeeyang08@gmail.com",
        Password : "ooedqzmqatcrcold",
        To : 'xeeyang08@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Inquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}