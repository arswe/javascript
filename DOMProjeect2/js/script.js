// select elements & assign them to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// create a new task
let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    // modify elements
    label.innerText = task;
    checkBox.type = 'checkbox';

    // append elements to the list item
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    // return the list item
    return listItem;
};

// add a new task
let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = '';
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
};

// complete a task
let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    // remove the checkbox
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);

    // bind the new list item to the complete list
    bindCompleteItems(listItem, deleteTask);
};

// delete a task
let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    // remove the parent list item from the ul
    ul.removeChild(listItem);
};

// bind the incomplete items to the checkbox
let bindInCompleteItems = function (taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
};

// bind the complete items to the delete button
let bindCompleteItems = function (taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
};

// cycle over the incomplete list items
for (let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}

// cycle over the complete list items
for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

// add event listener to form
form.addEventListener('submit', addTask);
