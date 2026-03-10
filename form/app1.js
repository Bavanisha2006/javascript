// const input = document.querySelector("#form-input");
// const btn =  document.querySelector("#btn");
// const container = document.getElementById("container");
// btn.addEventListener("click",() =>{
//     const div =document.createElement("div");
//     div.textContent = input.value;
//     input.value = "";
//     container.append(div);
//     const delBtn = document.createElement("button");
//     delBtn.textContent ="Del";
//     div.append(delBtn);
    

// });
const input = document.querySelector("#form-input");
const btn =  document.querySelector("#btn");
const container = document.getElementById("container");

btn.addEventListener("click",() =>{
    const div =document.createElement("div");
    div.textContent = input.value;
    input.value = "";
    container.append(div);

    const delBtn = document.createElement("button");
    delBtn.textContent ="Del";
    div.append(delBtn);

 
    delBtn.addEventListener("click", () => {
        div.remove();
    });

});









