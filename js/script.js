var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var reset = document.getElementById("clear");

function planner(){
    button.addEventListener("click", function(){
        if(input.value.length>0){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(input.value));
            document.querySelector("ul").appendChild(li);
            input.value = "";
        }   
        else{
            document.getElementById('warning').innerHTML="Must enter list item!";

        }

        document.getElementById("userinput").addEventListener("blur", function(){
            if(this.value !== ""){
                warning.innerHTML = "";
            }
        });

        


    })
    reset.addEventListener("click", function(){
        document.getElementById('list').innerHTML="";
    })
    }
   



planner();





