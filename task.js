let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

const todos1=[
    {
        title:'tasks',
        status:'pending',
        id:1
    },
    {
        title:'test-done',
        status:'done',
        id:2
    },
    {
        title:'test-in-progress',
        status:'inProgress',
        id:3
    }]

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (textInput.value === "") {
        console.log("failure");
        msg.innerHTML = "Task cannot be blank";
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
};

let data = [{}];

let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
    });

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);
    createTasks();
};

let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return (tasks.innerHTML += `
                     <div id=${y}>
                     <span class="fw-bold">${x.text}</span>
                      <span class="small text-secondary">${x.date}</span>

                     <span class="options">
                     <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                     <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
                  <svg  onclick="pass(this)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right "  viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg>
                     </span>
                     </div>
                     `);
    });

    resetForm();
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);

};

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;

    deleteTask(e);
};

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
};

(() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    console.log(data);
    createTasks();
})();



////////////////////////////////////////////////////////////////////////
const doneContainer=document.querySelector('.done-container')
const inProgressContainer=document.querySelector('.in-progress-container')

const toggleHandler=(id)=>{
    const index=todos1.findIndex(item=>item.id===id)
    todos1[index].status=todos1[index].status==='done'?"inProgress":'done'
    createTodosHandler()
}
const createTodosHandler=()=>{
    doneContainer.innerHTML=''
    inProgressContainer.innerHTML=""
    todos1.forEach(item=>{
        const todoContainer=document.createElement('div')
        todoContainer.className=`${item.status==='done'? 'bg-blue' : 'bg-green'}`
        const title=document.createElement('h5')
        title.innerText=item.title
        const toggleBtn=document.createElement('button')
        toggleBtn.innerHTML=`  plane
`
         toggleBtn.addEventListener('click',()=>toggleHandler(item.id))
        todoContainer.append(toggleBtn)
        todoContainer.append(title)
        item.status==='done'?doneContainer.append(todoContainer):inProgressContainer.append(todoContainer)
    })

}
createTodosHandler()


let pass = (e) => {
    e.parentElement.parentElement.remove();
  inProgressContainer.appendChild( e.parentElement.parentElement)
    data.splice(e.parentElement.parentElement.id);
    localStorage.setItem("data", JSON.stringify(data));
}