const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container");
// This fuction wirtes the tasks in list which are writen in the input text by clicking on the Add button
function addTask() {
    // if without writting any tasks directly pressing the add button means it gives the alert
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    // else it going to add a task
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";

}
// To remove the tasks which are completed this condition does by clicking the cross icon
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);