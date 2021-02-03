/*general*/
const boxes = document.querySelectorAll(".box");

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


/*contact-section*/
labels.forEach(label => {
    label.innerHTML = label.innerText
            .split('')
            .map((letter, idx)=> `<span style='transition-delay: ${idx * 50}ms;'>${letter}</span>`)
            .join('');
});
