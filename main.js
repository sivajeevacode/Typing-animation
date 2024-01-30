//select second text
let text=document.querySelector(".second")

let reload = () =>{
    setTimeout(()=>{
        text.textContent="Student";
    },0);
    setTimeout(()=>{
        text.textContent="Developer";
    },4000);
    setTimeout(()=>{
        text.textContent="Freelancer";
    },8000);
}

//call the function
reload();
//repeat the same process
setInterval(reload,12000);