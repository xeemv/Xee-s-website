function sendEmail(){
    Email.send({
        //SecureToken: "a5ef0669-d97e-4d3b-818f-58d1a14b72c1",
        Host : "smtp.gmail.com",
        Username : "xeeyang08@gmail.com",
        Password : "dczvwlwlhonnrlcd",
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