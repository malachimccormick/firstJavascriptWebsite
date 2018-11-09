$(document).ready(function() {
   
  
  
    let val1 ="";
    let val2 ="";
    let operator ="";
    let result = "";
    $(".btn").click(function(event)
     {  // This controls the click function of the buttons and tells them apart
        let buttonClicked = event.target.innerHTML;
            $(".item-header").html(buttonClicked)
                if (buttonClicked >="0" && buttonClicked <= "9"){
                    holdNumber(buttonClicked);
                }else{
                    holdOperator(buttonClicked);
                }
        //  This holds the numbers to be calculated
        function holdNumber(number){
            if(operator === ""){
                val1 += number;
                $(".item-header").html(val1)
                console.log("val1 is " + val1)
            }else if(operator === "+" || operator === "-" || operator ==="*" || operator === "÷"){
                val2 += number;
                $(".item-header").html(val2)
                console.log("val2 is " + val2)
            }
        
        }
        function holdOperator(sign){
            if(operator === "")
                operator = sign
                console.log("The operator is " + operator)
        }
        $(".equal").click(function(){
            let buttonClicked = event.target.innerHTML;
                $(".item-header").html(result)
            if(operator === "÷"){
                operator = operator.replace("÷","/")
            }
            result = eval(val1 + operator + val2);
                console.log(result)
                val1 = result
                val2 = ""
                operator = ""    
        });
        $(".all-clear").click(function(){
            let buttonClicked = event.target.innerHTML;
            $(".item-header").html(0)
                val1 = ""
                val2 = ""
                operator = ""
                console.log("values and operator have been cleared")
        });  
        $(".negativePositive").click(function(){
            let buttonClicked = event.target.innerhtml;
            $(".item-header").html(-val1)
            if(val1 != ""){//Changes back and forth from negative to positive.
                val1 = -val1; 
                console.log(val1 + " is negative if ther is a - before the val else val1 is positive")
            }
        })  
         $(".percent").click(function(){
            let buttonClicked = event.target.innerhtml;
            
            if(val1 != ""){
                console.log(parseInt(val1))
                newTotal = (parseInt(val1) / 100);
                $(".item-header").html(newTotal + "%")
            }
            if(val2 != ""){
                newTotal = (val2 / .01);
                $(".item-header").html(newTotal + "%")
            }
           
        });
        $(".blank").click(function(){
            let buttonClicked = event.target.innerhtml;
            $(".item-header").html("its blank ")
           
        });
      });
     
});