function sendMail(){
    let parms ={
        name : document.getElementById('inputFullname').value,
        email : document.getElementById('inputEmail').value,
        mobile : document.getElementById('inputMobile').value,
        subject: document.getElementById('inputSubject').value,
        yourmessage : document.getElementById('inputYourMessage').value,

    }
    console.log(parms)

    emailjs.send('service_7ph8plh', 'template_g2d9leo',parms).then(alert("email sent success"))
}