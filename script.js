
var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');
var phoneError=document.getElementById('phone-error');
function validateName()
{
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full Name";
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}
function validatePhone(){
    var phone=document.getElementById('contact-phone').value;
    if(phone.length==0){
        phoneError.innerHTML="Phone number is required";
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML="Phone number should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="only digits";
        return false;
    }
    phoneError.innerHTML='valid';
    return true;
}
function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        phoneError.innerHTML="Email is required";
        return false;
    }
    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.innerHTML='Email invalid';
        return false;
    }
    emailError.innerHTML='valid';
    return true;
}
function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left= required-message.length;
    if(left>0){
        messageError.innerHTML=left + "more characters required";
        return false;
    }
    messageError.innerHTML='valid'
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        
        submitError.innerHTML="Please fix error";
        return false;
    }

}