let s = document.querySelector('.select');
let w = document.querySelector('.wrapper');

/* s.style = 'border: 1px solid grey'; */

s.addEventListener('click', function(){
    if(w.hidden == true){
        w.hidden = false;
    } else{
        w.hidden = true;
    }
})