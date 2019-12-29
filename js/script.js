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




// function additems(){
   
//     var listedItem= prompt("Enter item into To-Do list:");
//     var newItem={item:listedItem};
//     toDo.push(newItem);
    
// }


// var entry=2;
// for (var i=0; i<entry; i++){
//     additems();
// }

// function displayitems(){
//     //    array=0 as a place holder to loop through bookArray
//         var array=0;
        
//         // entries only used to identify book number
//         for(entries=1; entries!=7; entries++){
//         // bookArray[array].whatever targets the book entries' title, author, genre for each index of array. 0 for book1 etc.
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(toDo[array].item));
//         document.querySelector("ul").appendChild(li);
//         array++;
    
    
//         }
    
//     }
// displayitems();




