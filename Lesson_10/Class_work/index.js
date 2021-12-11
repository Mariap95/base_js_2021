// // window.navigator.userAgent;
// // console.log(location.search);
// console.log(window.screen.height);
// let myDivs = document.querySelectorAll(".my_div");
// console.log(myDivs);
// let myId = document.getElementById("my_id");
// console.log(myId);
// myId.style.background = "red";
// let myDiv = document.getElementsByClassName("my_div");
// const div = myDiv[0];
//  div.outerHTML += "bye";
// console.log(div);
// let newDiv = document.createElement("div");
// newDiv.className = "test_div";
// newDiv.innerHTML = "This is my div";
document.body.style.margin = 0;
let header = document.createElement("header");
header.className = "page-header";
header.innerHTML = "This is header";
header.style.background = "#ffff33";
header.style.height = "50px";
document.body.prepend(header);

let div = document.createElement("div");
div.className = "page-div";
header.after(div);

let list = document.createElement("ol");
list.className = "page-list";
div.prepend(list);

for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.className = "list-element";
  li.innerHTML = `List element number ${i}`;
  list.append(li);
}
let inputWrapper = document.createElement("div");
inputWrapper.className = "input-wrapper";
inputWrapper.style.display = "flex";
inputWrapper.style.flexDirection = "column";
inputWrapper.style.gap = "10px";
inputWrapper.style.width = "150px";
list.after(inputWrapper);

let input = document.createElement("input");
input.type = "text";
inputWrapper.prepend(input);

let button = document.createElement("button");
button.className = "btn";
button.innerHTML = "Add To Do";
button.onclick = () => {};
input.after(button);

button.addEventListener("click", function () {
  const inputValue = input.value;
  const newToDo = document.createElement("li");
  newToDo.innerHTML = `${inputValue}`;
  if (input.value) {
    list.appendChild(newToDo);
  }
  input.value = "";
});

input.value;
