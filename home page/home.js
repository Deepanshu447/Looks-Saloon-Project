
let nextEl=document.querySelector('#right');
let prevEl=document.querySelector('#left');

console.log(nextEl,prevEl);

let count=1;

nextEl.addEventListener('click',()=>{

    count++;
    updateImg();
    // alert("hello hii")
});

let imgContainer=document.querySelector('.image-container');

console.log(imgContainer);

let images=document.querySelectorAll('.img')
console.log(images.length)

prevEl.addEventListener('click',()=>{
    count--;
    updateImg();
    // alert("hello hii")
})

function updateImg(){

    if(count>images.length){
        count=1;
    }

    else if(count<1){
        count=images.length;
    }



    // imgcontainerEl.style.transform=`translateX(-${(counter-1)*600}px)`;


imgContainer.style.transform=`translateX(-${(count-1)*100}%)`
}

updateImg();