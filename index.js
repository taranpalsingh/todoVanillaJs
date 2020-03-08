$(document).ready(()=>{

    // disabling add button
    $(".addBtn").prop("disabled",true);

    // listening for remove icon of all tasks
    $(document).on('click','.removeIcon',($event)=>{
        $event.target.parentElement.remove();
    });

    // listening for enter key (task entered)
    $(document).on('keypress',(e)=>{
        if(e.which === 13){
            // debugger;
            let input = $(".textInput").val().trim();
            if(input != "")
                createTask(input);
            // set the input value to empty string
            $(".textInput").val("");
        }
    });

    // listening onClick on tasks
    $(document).on('click','.taskData',($event)=>{
        // get all classes of the task
        let classes = $event.target.classList.value;
        
        // if it is completed, then remove the class
        if(classes.includes("taskCompleted"))
            $event.target.classList.remove("taskCompleted");
        else
            $event.target.classList.add("taskCompleted");
    })

    createTask("Demo task...");
})

// creates task dynamically
createTask = (task)=>{
    
    // sample of the dynamically created html 
    // 
    // <div class="task">
    //     <p class="taskData">Learn something 1</p>
    //     <span class="removeIcon" id="removeIcon">X</span>
    // </div>

    let tasks = document.getElementById("tasks");
    
    let div = document.createElement("div");
    div.classList.add("task");

    let p = document.createElement("p");
    p.classList.add("taskData");
    p.textContent = task;

    let span = document.createElement("span");
    span.classList.add("removeIcon");
    span.textContent = "X";

    div.appendChild(p);
    div.appendChild(span);
    tasks.appendChild(div);
}