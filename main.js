let lol =0;

const container = document.getElementById("container");

container.addEventListener("click", function(event) {
    // Check if the clicked element has the "stars" class
    if (event.target.classList.contains("stars")) {
        // Get the text content of the clicked element
        lol = event.target.textContent; 
        $("#rate").text(lol)
        
    }
    
    //Check if there is a clicked element
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


