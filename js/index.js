
var menubtn=document.querySelector('.fa-bars');
var closebtn=document.querySelector('.fa-xmark');

var body=document.getElementsByTagName('body')

var header=document.querySelector('.header');

menubtn.addEventListener('click' , ()=>{
    header.classList.add('active');

});

closebtn.addEventListener('click',()=>{
    header.classList.remove('active');

})
 

// home page slide code--------------------------------------


// const nextEl=document.getElementById('next');
// const  prevEl=document.getElementById('prev');

// console.log(nextEl,prevEl)





// let counter=1;
// prevEl.addEventListener('click', ()=>{
//     counter--;
//     updateimg();
// });
// nextEl.addEventListener('click',()=>{
//     counter++;
//     updateimg();
// })

//  let sliderEl=document.querySelector('.slider-container');

// let imgsEl=document.querySelectorAll(".slider-1");

// console.log(imgsEl)





// function updateimg(){

//     // if(counter>imgsEl.length){
//     //     counter=1;
//     // }

//     // else if(counter<1){
//     //     counter=imgsEl.length;
//     // }



//     sliderEl.style.transform=`translateY(${(counter-1)*60}rem)`;

// }

// updateimg();