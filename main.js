let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        if(e.target.innerHTML == '=') {
            string = eval(string);
        } else if(e.target.innerHTML == 'CE') {
            string = "";
        } else if (e.target.innerHTML == 'CLR') {
            string = string.slice(0, -1);
        } else {
            string = string + e.target.innerHTML;
        }
        document.querySelector('input').value = string;
    })
})