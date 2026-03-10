let clicks =1;
document.addEventListener("click", (event) => {
    if(clicks%2===0){
        event.target.innerText="0";
    } else {
        event.target.innerText="X";
    }
    clicks++;
    console.log(clicks,event.target.innerText);
    
})