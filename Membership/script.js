

var times=document.querySelectorAll('time');

var enddate='29 June, 2023 11:30:15';




function countdown(){

    var finalenddate=new Date(enddate).getTime();
    var nowdate=new Date().getTime();
    var gapdate=Math.floor((finalenddate-nowdate)/1000);

    if(gapdate<0){
        return
    }

    


    var days=Math.floor(gapdate/60/60/24);

    console.log(days+" days");

    var hours=Math.floor((gapdate%(60*60*24))/(60*60));

    console.log(hours+' hours');

    var minute=Math.floor(gapdate%(60*60)/60);
    console.log(minute+' minute');

    var second=Math.floor(gapdate%60);

    console.log(second+' second')

    document.getElementById('day-digit').innerHTML=days;

    document.getElementById('hours-digit').innerHTML=hours;

    document.getElementById('minute-digit').innerHTML=minute;

    document.getElementById('second-digit').innerHTML=second;

   
}
countdown();

setInterval(
    ()=>{
        countdown();
    },
    1000
);



