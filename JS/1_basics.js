let btn = document.querySelector('button'); // document object model 
btn.addEventListener('click', inputmsg);

function inputmsg()
{
    let name = prompt();
    btn.textContent="hello "+ name;
}

