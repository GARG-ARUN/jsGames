var inputField = document.getElementById("input-field");
var btn1 = document.getElementById("add_element_1");
var btn3 = document.getElementById("add_element_3");
var block = document.querySelector(".modal > ul");
console.log(inputField);
var text ="";
 var addText = inputField.addEventListener("input", (e) => {
      text = e.target.value;
      console.log(text);
 })
//click events
btn1.addEventListener('click',() => {
    var element=document.createElement("li");
    element.classList.add("item");
    var tex =document.createTextNode(text);
    element.appendChild(tex);
    console.log(element);
    block.appendChild(element);
})

btn3.addEventListener('click', () => {
    var rem = document.querySelector(".modal > ul > li");
    var removeid = document.getElementById("item1");
    rem.remove();
})