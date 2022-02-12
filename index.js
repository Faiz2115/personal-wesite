let sub = document.querySelector("#liveAlertBtn");
let successMessage = document.querySelector("#successMessage");


sub.addEventListener('click',()=>
{
    if (document.querySelector("#name").value === "" )
    {
       document.querySelector("#name-text").innerHTML = "Please Enter Your Name!";

    }
    else if(document.querySelector("#email").value === "")
    {
        document.querySelector("#name-text").style.display="none";
        document.querySelector("#email-text").innerHTML = "Please Enter Your E-Mail!"
    }
    else if (document.querySelector("#message").value === "")
    {
        document.querySelector("#email-text").style.display="none";
        document.querySelector("#message-text").innerHTML = "Please Enter A Message!"

    }
    else
    {
        sendMail();
}
})
function sendMail(Params)
{
    var tempParams = {
        from_name: document.querySelector("#name").value,
        to_name: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    }
    emailjs.send("service_efbnhde","template_um0l5yk",tempParams)
       .then((res)=>
        {
            console.log("success",res.status);
            successMessage.innerHTML ="Mail Send Successfully !"
            
        })
}
