
let lol =0;

const container = document.getElementById("container");

// Add a click event listener to the container
container.addEventListener("click", function(event) {
    // Check if the clicked element has the "clickable" class
    if (event.target.classList.contains("stars")) {
        // Get the text content of the clicked element
        lol = event.target.textContent; 
        $("#rate").text(lol)
        
    }

    console.log(lol)
    if (lol !== 0) {
        $(document).ready(function() {
        
            $("#submit").click(function(){
    
            $(".before").css({"display":"none"});
            $(".after").addClass("content");
            
            
      });
    })
    
    }
})



const rate = $("#rate").html()


