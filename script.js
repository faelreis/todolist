const inputTask = document.getElementById('inputTask');
const btnTask = document.getElementById('btnTask');
const listTask = document.getElementById('listTask');

function addTask(){
    if(inputTask.value === ''){
        alert("Você precisa adicionar a tarefa!")
    } 
    else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        listTask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = '';
    saveTasks()
}

listTask.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveTask()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTask()
    }
}, false);

function saveTasks(){
    localStorage.setItem("data", listTask.innerHTML)
}

function showTask(){
    listTask.innerHTML = localStorage.getItem("data")
}

showTask()