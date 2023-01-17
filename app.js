let addToDO = document.getElementById("addToDO");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo")
addToDO.addEventListener('click', function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
   toDoContainer.appendChild(paragraph);
   paragraph.innerHTML = inputText.value;
  inputText.value ="";

  toDoContainer.style.marginTop ="10px";

  paragraph.addEventListener("click", function(){

    paragraph.style.textDecoration ="line-through";
    paragraph.style.opacity = "0.8"

    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    })
  })

clearToDo.addEventListener("click", function(){
    paragraph.remove();
})

})















