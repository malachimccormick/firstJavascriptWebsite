
document.getElementById("total").style.display = "none";

// This gets the tip value

function calculateTip() {
    let billTotal = document.getElementById("billTotal").value;
    let tipPercentage = document.getElementById("tipPercentage").value;
    let people = document.getElementById("people").value;
  
    
    if (billTotal === "" || tipPercentage == 0) {
      alert("What should the tip Be?");
      return;
    }
    
    if (people === "" || people <= 1) {
      people = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    // Here we are setting the variables and cleaning up the numbers to display 
    // the final values
    let total = (billTotal * tipPercentage) / people;
    let totalPerPerson= (total + (billTotal/people));
    let amountToPay= totalPerPerson * people;

    total= Math.round(total * 100) / 100;
    totalPerPerson=Math.round(totalPerPerson * 100) / 100;
    amountToPay=Math.round(amountToPay * 100) / 100;
   
    total= total.toFixed(2);
    totalPerPerson= totalPerPerson.toFixed(2);
    amountToPay= amountToPay.toFixed(2);
    
    // This bit of code shows the final totals
    $("#total").slideDown();
    document.getElementById("tipAmount").innerHTML = total;
    document.getElementById("payAmount").innerHTML = totalPerPerson;
    document.getElementById("amountToPay").innerHTML = amountToPay;
}


document.getElementById("total").style.display = "none";

function reset(){
    // document.location.reload()
    document.getElementById("billTotal").value = "none";
    document.getElementById("tipPercentage").value = 0;
    document.getElementById("people").value = 0;
   
}
 