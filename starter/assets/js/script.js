document.addEventListener('DOMContentLoaded', () => {
    const myAddButton = document.getElementById('add-task');
    const allTasks = document.querySelector('.row');
    const toDoTasks = document.getElementById('to-do-tasks');
    const progressTasks = document.getElementById('in-progress-tasks');
    const doneTasks = document.getElementById('done-tasks');
    const model = document.getElementById('modal-task');
    const deleteButton = document.getElementById('task-delete-btn');
    const updateButton = document.getElementById('task-update-btn');
    const saveButton = document.getElementById('task-save-btn');
    const cancelButton = document.getElementById('task-cancel');
    const closeIcon = document.getElementById('close');
    const titleTask = document.getElementById('task-title');
    const typeTaskFeature = document.getElementById('task-type-feature');
    const typeTaskBug = document.getElementById('task-type-bug');
    const priorityTask = document.getElementById('task-priority');
    const statusTask = document.getElementById('task-status');
    const dateTask = document.getElementById('task-date');
    const descrpTask = document.getElementById('task-description');
    let count=0;
    let tasks =[];



    function showModel() {
      model.classList.remove('task-modal');
      model.classList.add('task-modal-chow');
    }
  
    function hideModel() {
      model.classList.remove('task-modal-chow');
      model.classList.add('task-modal');
    }
    function showButtons() {
        deleteButton.classList.remove('button-hide');
        updateButton.classList.remove('button-hide');
        deleteButton.classList.add('button-show');
        updateButton.classList.add('button-show');
      }
    
      function hideButtons() {
        deleteButton.classList.remove('button-show');
        updateButton.classList.remove('button-show');
        deleteButton.classList.add('button-hide');
        updateButton.classList.add('button-hide');
      }
  
    function addTasks() {
      const task = {
        id:count,
        title: titleTask.value,
        typeTask: typeTaskFeature.checked ? typeTaskFeature.value : typeTaskBug.value,
        priority: priorityTask.value,
        status: statusTask.value,
        date: dateTask.value,
        descrp: descrpTask.value
      };
      return task;
    }
    
    function reviewTasks(taskId) {
        const task = tasks.find(task => task.id == taskId);
         
                titleTask.value= task.title;
                if(task.typeTask === 'Feature'){
                    typeTaskFeature.checked=true
                }else{
                    typeTaskBug.checked=true
                }
                
                priorityTask.value=task.priority;
                statusTask.value=task.status;
                dateTask.value=task.date;
                descrpTask.value=task.descrp;
            
     }
     function deletetasks(taskId){
        const itemToRemove=tasks.findIndex(task => task.id == taskId)
        tasks.splice(itemToRemove,itemToRemove+1);
        const task=document.getElementById(taskId)
        task.parentNode.removeChild(task);
     }
     function updatetasks(taskId){
        
     }
   

    function clearData() {
      titleTask.value = '';
      typeTaskFeature.checked = false;
      typeTaskBug.checked = false;
      priorityTask.value = '';
      statusTask.value = '';
      dateTask.value = '';
      descrpTask.value = '';
    }
  
    myAddButton.addEventListener('click', () => {
      showModel();
      hideButtons();
    });
  
    cancelButton.addEventListener('click', (event) => {
      event.preventDefault();
      hideModel();
      clearData();
      
    });
  
    closeIcon.addEventListener('click', (event) => {
        event.preventDefault();
        hideModel();
        clearData();
    });
  
    
  
   
    
  
    saveButton.addEventListener('click', (event) => {
      event.preventDefault();
      const task = addTasks();
      count+=1;
      task.id=count;
      tasks.push(task);
      if(task.status ==='To Do'){
      toDoTasks.innerHTML += `
        <button class="task" id="${count}" >
          <div class="icon">
            <i class="fa-regular fa-circle-question" style="color: #47c266;"></i>
          </div>
          <div class="task-content">
            <div class="task-content-title">
              <h5>${task.title}</h5>
            </div>
            <div>
              <div class="task-content-date">#${count} created in ${task.date}</div>
              <div class="task-content-content">${task.descrp}</div>
            </div>
            <div class="status">
              <span class="high">${task.priority}</span>
              <span class="bug-feature">${task.typeTask}</span>
            </div>
          </div>
        </button>
      `;}else if(task.status ==='In Progress'){
        progressTasks.innerHTML += `
          <button class="task" id="${count}">
            <div class="icon">
                    <i class="fa-solid fa-circle-notch fa-rotate-90" style="color: #47c266;"></i>
            </div>
            <div class="task-content">
              <div class="task-content-title">
                <h5>${task.title}</h5>
              </div>
              <div>
                <div class="task-content-date">#${count} created in ${task.date}</div>
                <div class="task-content-content">${task.descrp}</div>
              </div>
              <div class="status">
                <span class="high">${task.priority}</span>
                <span class="bug-feature">${task.typeTask}</span>
              </div>
            </div>
          </button>
        `;}else if(task.status ==='Done'){
            doneTasks.innerHTML += `
              <button class="task" id="${count}">
                <div class="icon">
                  <i class="fa-regular fa-circle-check" style="color: #47c266;"></i>
                </div>
                <div class="task-content">
                  <div class="task-content-title">
                    <h5>${task.title}</h5>
                  </div>
                  <div>
                    <div class="task-content-date">#${count} created in ${task.date}</div>
                    <div class="task-content-content">${task.descrp}</div>
                  </div>
                  <div class="status">
                    <span class="high">${task.priority}</span>
                    <span class="bug-feature">${task.typeTask}</span>
                  </div>
                </div>
              </button>
            `;}
      hideModel();
      clearData();
      
      Swal.fire({
        title: 'Added',
        text: "the task is added",
        icon: 'success',
        confirmButtonText: 'OK!'
    })
      
    });
    allTasks.addEventListener('click', (event) => { 
        if (event.target.closest('.task')) { 
            const taskId = event.target.closest('.task').id;
            showModel();
            showButtons();
            reviewTasks(taskId); 
        
            deleteButton.addEventListener('click', (event) => {
                event.preventDefault();
                deletetasks(taskId);
                hideModel();
                clearData();
                Swal.fire({
                    title: 'Delete',
                    text: "the task is Deleted",
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            });
            updateButton.addEventListener('click', (event) => {
                event.preventDefault();
                updatetasks(taskId);
                hideModel();
                clearData();
                Swal.fire({
                    title: 'updated',
                    text: "the task is updated",
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            });
        }
    });
   
    });
  