
<body>
function addTodo() {
    
    const todoText = document.getElementById('todoInput').value;
    
    
    let newLI = document.createElement('li');
    let textNode = document.createTextNode(todoText);
    let button = document.createElement('button');
    
   
    newLI.setAttribute('class', 'newLi')
    button.innerHTML = "Delete";
    button.setAttribute("class","li_btn")
    
   
    newLI.appendChild(textNode);
    newLI.appendChild(button)
    
    
    document.querySelector('.todoList').appendChild(newLI);
  
   
    document.getElementById('todoInput').value = null;
  }

  </body>