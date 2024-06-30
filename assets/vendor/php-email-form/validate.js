function sendMail (){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }


  emailjs.send("service_t70sv3l" , "template_f7p2g9j" , parms).then(alert(" Mail Gönerin."))
}