
  document.querySelector('.sign-in-btn').addEventListener('click', function() {
     var name = window.prompt("Please enter your name");
    });

    document.getElementById("skinForm").addEventListener("submit", function(event) {
     event.preventDefault(); 
               
      const skinType = document.querySelector('input[name="skinType"]:checked');
                    
                    if (skinType) {
                      let message = "";
          
                      switch (skinType.value) {
                        case "Dry":
                          message = "Your skin is dry. Make sure to hydrate regularly and use a moisturizer!";
                          break;
                        case "Oily":
                          message = "Your skin is oily. Consider using a mattifying moisturizer and gentle cleanser!";
                          break;
                        case "Combination":
                          message = "Your skin is combination. You might need to use different products for different areas!";
                          break;
                        default:
                          message = "Please select a skin type.";
                      }
              
                      alert(message);
                    } else {
                      alert("Please select a skin type.");
                    }
                  });
 function showAlert(){
    alert("Healthy skin starts with a good skincare routine! Remember to cleanse, moisturize, and protect your skin daily.");
                      }          
