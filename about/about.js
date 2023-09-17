const plus=document.querySelector('#plus');
const minus=document.querySelector('#minus');

const show=document.querySelector('.ans-text')

console.log(plus,minus);

plus.addEventListener('click',()=>{

    show.classList.add('show-ans-text');
    minus.style.display='block';
    plus.style.display='none';

});

minus.addEventListener('click',()=>{
    show.classList.remove('show-ans-text');
    minus.style.display='none';
    plus.style.display='block';
    


});





// read more read less section==============================================================

const readmore=document.querySelector('#read-more');
const readless=document.querySelector('#read-less');

console.log(readless,readmore);

const ourstory=document.querySelector('.ourstory-description3');

readmore.addEventListener('click',()=>{
    ourstory.style.display='block';
    readless.style.display="block"
    readmore.style.display='none';
})

readless.addEventListener('click',()=>{
    ourstory.style.display='none';
    readless.style.display="none"
    readmore.style.display='block';
})