/*general*/
const boxes = document.querySelectorAll(".box");

/*nav-section*/
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.nav-container');

/*contact-section*/
const labels = document.querySelectorAll('.form-group label');



/*general*/
window.addEventListener('scroll', checkBox);
checkBox();
function checkBox(){
    const triggerpoint = window.innerHeight/5 * 4;
    boxes.forEach(box =>{
        const boxtop = box.getBoundingClientRect().top;
        if(boxtop<triggerpoint){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}


/*nav-section*/
open.addEventListener('click', ()=> container.classList.add('show-nav'));
close.addEventListener('click', ()=> container.classList.remove('show-nav'));


/*contact-section*/
labels.forEach(label => {
    label.innerHTML = label.innerText
            .split('')
            .map((letter, idx)=> `<span style='transition-delay: ${idx * 50}ms;'>${letter}</span>`)
            .join('');
});
