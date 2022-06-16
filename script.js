
let submit=document.getElementById('submit');
let list=document.getElementById('list');
var i=1
console.log(todo);
submit.addEventListener('click',addTodo);

function addTodo(){

var todo=document.getElementById('todo').value;
var para=document.createElement('p');
para.innerHTML=`${i} ${todo}<br/>`;
list.appendChild(para);
todo=document.getElementById('todo').value="";
i+=1;

}
console.log(todo);