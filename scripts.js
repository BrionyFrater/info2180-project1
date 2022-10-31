/* Add your JavaScript to this file */

window.onload = function(){
    subBtn = document.body.getElementsByClassName("btn")[1];
    msg = document.body.getElementsByClassName("message")[0];
  

    subBtn.addEventListener("click", function(event){
        event.preventDefault();
        emailVal = document.getElementById("email").value;
        console.log(emailVal);
        if(emailVal == ""){
            msg.textContent = "Please enter a valid email address.";
        }else{
            msg.textContent = `Thank you! Your email address ${emailVal} has been added to our mailing list!`;
        }
        
    });

};

    
