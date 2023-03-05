document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value== ""){
        alert("Add fruit")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                    ${document.querySelector('#newtask input').value}
                <button class="delete">X</button>
            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}


document.querySelector('#push1').onclick = function(){
    if(document.querySelector('#newtask1 input').value== ""){
        alert("Add quantity")
    }

    else{
        document.querySelector('#tasks1').innerHTML += `
            <div class="task1">
                    ${document.querySelector('#newtask1 input').value}
                <button class="delete1">X</button>
            </div>
        `;

        let current_tasks1 = document.querySelectorAll(".delete1");
        for(var i=0; i<current_tasks1.length; i++){
            current_tasks1[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}