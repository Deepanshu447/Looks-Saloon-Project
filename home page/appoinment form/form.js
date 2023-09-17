
//  form validation==========================================================

var form=document.getElementById('form');




function validateform(){

    let email=document.getElementById('email');
    let username=document.getElementById('username');
   
    let namecheck=document.getElementById('name-check');
    let namecross=document.getElementById('name-excla');
    let nameer=document.getElementById('name-error');
   
    let check=1;


    // validaion name input=============================================

    if(username.value == ""){

        nameer.style.visibility="visible";

        nameer.innerHTML="name can't be blank";
        namecross.style.display="block";
        namecross.style.color="red";
        nameer.style.color="red";


        console.log("user name empty");
        check=0;
    }

    else if(username.value.length<3){
        nameer.style.visibility="visible";
        nameer.innerHTML="name must be 4 char*";
        nameer.style.color="red";
        namecross.style.display="block";
        namecross.style.color="red";
        check=0;

    }
    else{
        nameer.style.visibility="hidden";
        namecheck.style.display="block";
        namecheck.style.color="green"
        namecross.style.display="none";
        check=1;

    }

    // validation email input ================================

    let emailerr=document.getElementById('email-error');
    let echeck=document.getElementById('e-check');
    let ecross=document.getElementById('e-cross');
    if(email.value==""){
        emailerr.style.visibility="visible";
        emailerr.innerHTML="email can't be blank*";
        ecross.style.display="block";
        ecross.style.color="red";
        emailerr.style.color="red";
        check=0;


    }
    else if(email.value.length>20){
        emailerr.style.visibility="visible"
        emailerr.innerHTML="email too long*";
        emailerr.style.color="red";
        ecross.style.display="block";
        ecross.style.color="red";
        check=0;

    }
    else{
        emailerr.style.visibility="hidden";
        ecross.style.display="none";
        echeck.style.display="block";
        check=1;

    }

    // validation number input=======================

    let number=document.getElementById('number');
    let numcheck=document.getElementById('num-check');
    let numcross=document.getElementById('num-cross');
    let numerr=document.getElementById('num-error');

    if(number.value==""){
        numerr.style.visibility="visible";
        numerr.innerHTML="number can't be blank*";
        numerr.style.color="red";
        numcross.style.display="block";
        numcross.style.color="red";
        check=0;
        
    }

    else if(number.value.length<10){
        numerr.style.visibility="visible";
        numerr.innerHTML="number must be 10 digit*";
        numerr.style.color="red";
        numcross.style.display="block";
        numcross.style.color="red";
        check=0;

    }

    else if(number.value.length>10){
        numerr.style.visibility="visible";
        numerr.innerHTML="maximum 10 digit*";
        numerr.style.visibility="visible"
        numerr.style.color="red";
        numcross.style.display="block";
        numcross.style.color="red";
        check=0;

    }

    else{
        numerr.style.visibility="hidden";
        numcheck.style.display="block";
        numcheck.style.color="green"
        numcross.style.display="none";
        check=1;
    }

    if(check==1){
        return true;
    }
    else{
        return false;
    }



    
}








//  male female based option==================================
function populate() {

    var s1 = document.getElementById('select1');
    var s2 = document.getElementById('select2');

    console.log(s1);

    s2.innerHTML = "";

    if (s1.value == "MALE") {

        var optionarray = ['hairstyling|Hairstyling', 'head massage|Head Massage', 'beard styling|Beard Styling','hair/beard colouring|Hair/Beard Colouring','facials|Facials'

        ];
    }
    else if(s1.value == "FEMALE"){
        var optionarray=['hairstyling|Hairstyling','makeup|Makeup','hair texture|Hair Texture','hair treatments|Hair Treatments','facial & rituals|Facial & Rituals','head & feet|Head & Feet','nail care|Nail Care'

        ];

    }

    for(var option in optionarray){

        var pair=optionarray[option].split('|');
        var newoption=document.createElement('option');

        newoption.value=pair[0];
        newoption.innerHTML=pair[1];
        s2.options.add(newoption);
    }

}




function myfun(){
    var s3=document.getElementById('select3');
    var s4=document.getElementById('select4');

    console.log(s3.value);

    s4.innerHTML = "";

    if(s3.value == "DELHINCR"){
        var optionarray=['cyber city|Cyber City','Gip mall|GIP Mall','cross point|Cross Point','ambience mall|Ambience Mall','huda market|HUDA Market','m.g road|M.G Road'];
    }

    else if(s3.value == "MUZZAFFARPUR"){
        var optionarray=['p.s bella( bell road)|P.S Bella (Bell Road)'];
    }

    else if(s3.value == "NEWDELHI"){
        var optionarray=['anand vihar|Anand Vihar','defence colony|Defence Colony','chattarput|Chattarpur','green park|Green Park','hauz khas|Hauz Khas','karol bagh|Karol Bagh','lajpat nagar|Lajpat Nagar','pvr saket|PVR Saket','nehru place|Nehru Place'];
    }

    else if(s3.value == "PATNA"){
        var optionarray=['b.r house|B.r House','lata kunj|Lata Kunj','shailini complex|Shailini Complex'];
    }

    else if(s3.value == "UTTARPARDESH"){
        var optionarray=['ganga nagar|Ganga Nagar','raghav nagar|Raghav Nagar','rampur garden|Rampur Garden','vashundhara|Vashundhara'];
    }

    else if(s3.value == "BHOPAL"){
        var optionarray=['d.b city mall|D.B City Mall','peoples mall|Peoples Mall'];
    }

    else if(s3.value == "BENGALURU"){
        var optionarray=['indira nagar|Indira Nagar','orion brigade colony|Orion Brigade Colony'];
    }

    else if(s3.value == "HARIYANA"){
        var optionarray=['conscient one mall|Conscient One Mall','dlf galleria|DLF Galleria','sector 9o|Sector 90','udyog vihar|Udyog Vihar'];
    }

    for(var option in optionarray){

        var pair=optionarray[option].split('|');
        var newoption=document.createElement('option');

        newoption.value=pair[0];
        newoption.innerHTML=pair[1];
        s4.options.add(newoption);
    }

}


