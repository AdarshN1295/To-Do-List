const btn = document.querySelector('button.taskBTN');
let input = document.querySelector('input.task');
let ul = document.querySelector('ul.li__grabber');
let task_list = [];

btn.addEventListener('click', ()=>{
    task_list.push(input.value);
    localStorage.setItem("tasks", task_list);

let li = document.createElement('li');
li.setAttribute('class', 'cross_close');
let getItem = localStorage.getItem('tasks');
let final_arr = getItem.split(',');

console.log(final_arr)
for(i=0;i<final_arr.length;i++){
    li.innerText = final_arr[i];
    ul.appendChild(li);
}

let ic_adding = document.querySelectorAll('li.cross_close');

ic_adding.forEach((cls)=>{
    cls.insertAdjacentHTML("beforeend", "<div class='remove_btn'><i class='fa-solid fa-xmark'></i></div>");
    cls.insertAdjacentHTML("beforeend", "<div class='checked'><input type='checkbox' class='completed_task'/></div>");
})

let checked = document.querySelectorAll('input.completed_task');
checked.forEach((ch, index)=>{
    ch.addEventListener('click', ()=>{
        if(checked[index].checked == true){
            ic_adding[index].style.textDecoration = 'line-through';
        } else {
            ic_adding[index].style.textDecoration = 'none';
        }
    })
})


let close_btn = document.querySelectorAll('div.remove_btn');
close_btn.forEach((celem, index)=>{
    celem.addEventListener('click', ()=>{
        ic_adding[index].remove();
    })
})


}) 



localStorage.getItem("tasks")