var form = document.getElementById('addForm')
var taskList = document.getElementById('items')
var filter = document.getElementById('filter')

/**
 * Add Event
 */

// Form submit event
form.addEventListener('submit', addTask)
// Delete event
taskList.addEventListener('mouseenter',removeTask)
// Filter event
filter.addEventListener('keyup', filterTask)

/**
 * Function for events 
 */

// Add task
function addTask(e){
    e.preventDefault()

    // Get input value
    var newTask = document.getElementById('newTask').value

    // Create new li element
    var li = document.createElement('li')
    // Add class to li
    li.className = 'list-group-item'
    // Add text node with input value
    li.appendChild(document.createTextNode(newTask))

    // Create del button element
    var deleteBtn = document.createElement('button')
    // Add class to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    // Append button to li
    li.appendChild(deleteBtn)

    taskList.appendChild(li)
}

// Remove task
function removeTask(e){
    // specific button clicking
    if(e.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement //parent of button == li
            taskList.removeChild(li);
        }
    }
}

// Filter tasks
function filterTask(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase()
    // Get all li(s)
    var allTasks = taskList.getElementsByTagName('li');
    // Convert to an array
    Array.from(allTasks).forEach( (task) => {
        var taskName = task.firstChild.textContent
        if(taskName.toLowerCase().indexOf(text) != -1) {
            // if match
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })

}


