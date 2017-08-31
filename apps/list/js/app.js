//Problem: User interaction doesnt provide desired results
//Solution: Add interactivity so user can manage daily tasks


var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //First Button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //#incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //#completed-tasks

//New task list item
var createNewTaskElement = function (taskString) {

  //Create list item
  var listItem = document.createElement("li");

  //input checkbox
  var checkBox = document.createElement("input"); //Type Checkbox

  //label
  var label = document.createElement("label");

  //input (text)
  var editInput = document.createElement("input");

  //button.edit
  var editButton = document.createElement("button");

  //button.delete
  var deleteButton = document.createElement("button");

  //each elements, needs modifying
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;



  //Each element neeeds appeneding
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}


//Add a new task
var addTask = function () {
  if (taskInput.value !== " ") {
    console.log("Add task....");
    //Create a new list item with the text from #new-task
    var listItem = createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
  } else { //Alert message displayed when text input is blank.
    alert("Please enter an item.");
  }
  taskInput.value = " ";
}


//Edit an existing task
var editTask = function () {
  console.log("Edit task....");

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]")
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode");

  // ENABLE THE CHECKBOX
  listItem.querySelector("input[type=checkbox]").disabled = false;

  //if the class of the parent has .edit mode
  if (containsClass) {
    //switch from edit mode
    //label text becomes the input's value
    label.innerText = editInput.value;
  } else {
    //switch to edit mode
    //input value becomes the labels text
    editInput.value = label.innerText;

    // DISABLE THE CHECKBOX
    listItem.querySelector("input[type=checkbox]").disabled = true;
  }

  //Toggle .editMode  on list item
  listItem.classList.toggle("editMode");
}

//delete an existing task
var deleteTask = function () {
  var r = confirm("Are you sure you would like to erase this task?");
  if (r === true) {
    console.log("Delete task....");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    //REMOVE THE PARENT LIST ITEM FROM THE UL
    ul.removeChild(listItem);
  }
}

//
//mark a task as complete
var taskCompleted = function () {

  //List Item
  var listItem = this.parentNode;

  //Validation to ensure listitem is NOT in edit mode
  if ($(listItem).hasClass("editMode")) {

    //code to prevent checkbox from 'checking'
    $('input[type="checkbox"]').click(function (event) {

      //Checkbox Varible
      var $checkbox = $(this);
      setTimeout(function () {
        $checkbox.removeAttr('checked');
      }, 0);

      event.preventDefault();
      event.stopPropagation();
    });
    alert("Finish editing the task before marking as completed!");

    //Mark as completed code
  } else {
    console.log("Task Complete....");
    //append the task list item to the #completed-tasks

    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
  }

}

//mark a task as incomplete
var taskIncomplete = function () {

  console.log("task incomplete....");
  //append the task list item to #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}


var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events...");
  //select taskListItem children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //bind editTask to edit button
  editButton.onclick = editTask;
  //bind the deleteTask to delete button
  deleteButton.onclick = deleteTask;
  //bind checkBoxEventhandler checkbox
  checkBox.onchange = checkBoxEventHandler;
}


//Test AJAX request
var ajaxRequest = function () {
  console.log("AJAX Request");
}

//Set the click handler to the AddTask function
//-----
// -- addButton.onclick = addTask; <-- Version 1 || addEventListener is better.
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);



//Set Default values for text input (Task Input Box)
taskInput.value = " ";


//cycle over incomplete task holder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}


//cycle over complete task holder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskInComplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}



//jQuery Test if working
window.onload = function () {
  if (window.jQuery) {
    // jQuery is loaded
    alert("jQuery loaded successfully!");
  } else {
    // jQuery is not loaded
    alert("Oops! jQuery is broken.");
  }
}

//Edit Button Toggle
$(function () {
  $(document).on("click", 'button.edit', function () {
    $(this).text(function (i, text) {
      return text === "Edit" ? "Save" : "Edit";
    })
  });
});


//To Fix:

//Checkbox not appearing after checkbox was checked in 'edit mode'  See line: 123.

