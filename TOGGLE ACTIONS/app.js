let modebtn=document.querySelector(".mode-btn")

let body = document.querySelector("body")

let btn=()=>
{
    body.classList.toggle("dark-mode")

    modebtn.classList.toggle("mode-btn-light")

    if(modebtn.innerText==="Dark Mode")
    {
        modebtn.innerText="Light Mode"
    }
    else{
        modebtn.innerText="Dark Mode"
    }
}