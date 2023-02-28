const item = document.querySelector("#item")
const toDoBox = document.querySelector("#box")
const pendingTasks = document.querySelector(".pendingTasks")
console.log(pendingTasks)

var listlength=0
// on keyup event to add
item.addEventListener(
    "keyup",
    function(event){
        if (event.key == "Enter"){
            addToDo(this.value)
            this.value = ""
        }
        
    }
)
// adding list item
const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        
         <i class="fa-sharp fa-solid fa-xmark"></i> 
    `;
    
    listItem.addEventListener ( // for cross the item
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(  // for remove the item
        "click",
        function(){
            listItem.remove()
            listlength=listlength-1;
            pendingTasks.textContent=`${listlength}`;
            console.log(pendingTasks)


        }
    )
    toDoBox.appendChild(listItem) 
    listlength=listlength+1
    console.log(pendingTasks,listItem,toDoBox)
    pendingTasks.textContent=`${listlength}`;

}

// Complete all task is used for completer all task
document.querySelector('.complete').onclick = () => {
    checked(true);
}
//Uncomplete all task is used for uncompleter all task
document.querySelector('.uncomplete').onclick = () => {
    checked(false);
}
