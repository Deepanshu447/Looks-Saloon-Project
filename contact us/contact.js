// form validation

let Nerror = document.getElementById('name-er');
let Eerror = document.getElementById('email-er');
let Cerror = document.getElementById('contact-er');
let username = document.getElementById('username');
let useremail = document.getElementById('useremail');
let usernumber = document.getElementById('usernumber');

console.log(Nerror,Eerror,Cerror,username,useremail,usernumber);







function myfun() {

    let check=1;

    if(usernumber.value.length>10 || usernumber.value.length<10){
        Cerror.style.visibility='visible';
        Cerror.innerHTML="number must be 10 digit "
        Cerror.style.color="red";



    //    check=0;
       return false;
    }
    
    else{

        Cerror.style.visibility='hidden';

        // check=1;

        return true;

    }
   


    
    
   




}   

