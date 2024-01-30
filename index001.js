
$(document).ready(function( ){
                  
    $("#whenalist").click(function () {
          $("#displaythis").css({                      
   position: "fixed",
   height: "100%",
   width: "80%",
   top: "0",
   right:"0",
   bottom: "0",
   backgroundColor:"  rgb(1, 6, 27)",
   backgroundImage:  "linear-Gradient(to  right, rgb(6, 6, 19), rgb(0, 14, 63)), " 
   
                   })

     $("#displaythis").fadeIn ("slow")  

                             })    

              
                             $("#removemenu").click(function () {
         
                                $("#displaythis").fadeOut("slow")
                            })           
                            
                                                  })
                           