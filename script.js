const inputBox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")
function addTask(){
    if(inputBox.value === ''){
          alert("You must write something!")

    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    
       inputBox.value = ""
       saveData()
}

 listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")

    }
    else if(e.AT_TARGET.tagName === "SPAN"){
        e.tarrget.parentElement.remove();
    }
 }, false)

  function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
  }

  function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
  }

  showTask()