// add program button

/*
let Pbutton = false

function addProgram(){
    let programDiv = document.getElementById("Program")
    if(!Pbutton){
        programDiv.style.display = "block";
        Pbutton = true
    }
}
document.getElementById("Program_button").addEventListener("click", addProgram())
*/

document.getElementById("Program_button").addEventListener("click", function(){
    document.getElementById("Program").style.display="block"
})



document.getElementById("prop").addEventListener("click", function(){
    document.getElementById("props").style.display="block"

    var CD_field = document.getElementById("CD_field")
    var prop_div = document.getElementById("props")

    if (prop_div.classList.contains('props')) {
        prop_div.classList.remove('props');
        // Adjust fieldset height to accommodate the visible div
        CD_field.style.height = CD_field.scrollHeight + 'px';
      } 
      /*
      else {
        prop_div.classList.add('props');
        // Reset fieldset height when hiding the div
        CD_field.style.height = 'auto';
      }
    */

})

document.getElementById("meth_button").addEventListener("click", function(){
    
    var meth_div = document.querySelector(".meth")
    var new_meth_div = meth_div.cloneNode(true)

    document.getElementById("complete_meths").appendChild(new_meth_div)
    
    //adjust fieldset hieght

    var CD_field = document.getElementById("CD_field")
    //CD_field.style.height='auto'
    var method_hieght = document.getElementById("meth").scrollHeight
    CD_field.style.height = CD_field.scrollHeight + method_hieght;
    
    
    
    
    
    
    
    //cloned button not working :( trying to fix a single button for adding methods
    var clonedButton = new_meth_div.querySelector('button');
    clonedButton.addEventListener('click', function() {
        // Call the function to duplicate div when the cloned button is clicked
        duplicateDiv();
    });
    
})

function duplicateDiv() {



    var og_meth = document.querySelector(".meth")
    var new_meth_div = meth_div.cloneNode(true)

    var clonedButton = newDiv.querySelector('.actionButton');
    clonedButton.addEventListener('click', function() {
    // Call the function to duplicate div when the cloned button is clicked
    duplicateDiv();
    })

    document.getElementById("classes").appendChild(new_meth_div)
    
    
    /*
    // Retrieve the parent div of the clicked button
    var parentDiv = this.parentNode;
  
    // Clone the parent div
    var newDiv = parentDiv.cloneNode(true);
  
    // Get the input field and textarea inside the cloned div
    var clonedInput = newDiv.querySelector('.inputField');
    var clonedTextarea = newDiv.querySelector('.textareaField');
  
    // Clear input field and textarea of the cloned div
    clonedInput.value = '';
    clonedTextarea.value = '';
  
    // Attach event listener to button in cloned div
    var clonedButton = newDiv.querySelector('button');
    clonedButton.addEventListener('click', duplicateDiv);
  
    // Append the cloned div to the container
    document.getElementById('container').appendChild(newDiv);
    */
  }
  

// adding more classes:

document.getElementById("add_classes").addEventListener("click", function(){

    var og_cd = document.getElementById("classes")
    var new_cd = og_cd.cloneNode(true)

    document.getElementById("classes").appendChild(new_cd)
    
    //adjust fieldset hieght

    var complete_class = document.getElementById("complete_classes")
    //CD_field.style.height='auto'
    var class_hieght = document.getElementById("classes").scrollHeight
    complete_class.style.height = complete_class.scrollHeight + class_hieght
    
})