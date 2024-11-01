const myAddButton = document.getElementById('add-task'); 
const toDoTasksButton = document.getElementById('toDoTasks'); 
const progressTasksButton = document.getElementById('progressTasks'); 
const doneTasksButton = document.getElementById('doneTasks'); 
const model= document.getElementById('modal-task');
const deleteButton= document.getElementById('task-delete-btn');
const updateButton= document.getElementById('task-update-btn');
const cancelButton= document.getElementById('task-cancel');
const closeIcon= document.getElementById('close');



function showButtons (){
    deleteButton.classList.remove('button-hide')
    updateButton.classList.remove('button-hide')
    deleteButton.classList.add('button-show')
    updateButton.classList.add('button-show')
}
function hideButtons (){
    deleteButton.classList.remove('button-show')
    updateButton.classList.remove('button-show')
    deleteButton.classList.add('button-hide')
    updateButton.classList.add('button-hide')  
}
function showModel (){
    model.classList.remove('task-modal')
    model.classList.add('task-modal-chow')
}
function hideModel (){
    model.classList.remove('task-modal-chow')
    model.classList.add('task-modal') 
}


myAddButton.addEventListener('click', () => { 

    showModel()
    hideButtons()
    }
);
cancelButton.addEventListener('click', () => { 

      hideModel()
    }
);

closeIcon.addEventListener('click', () => { 

   hideModel()   
    }
);

toDoTasksButton.addEventListener('click', () => { 

    showModel()
   showButtons()
    }
);
progressTasksButton.addEventListener('click', () => { 

    showModel()
   showButtons()
    }
);
doneTasksButton.addEventListener('click', () => { 

    showModel()
   showButtons()
    }
);
