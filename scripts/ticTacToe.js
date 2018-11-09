$(document).ready(function() {
    // The players and the score counters are stated along with the turn counter.
let player1 = "X";
counter = 0
let player2 = "O";
let xWins= 0
let oWins= 0

        // This is what determines whos turn it is by useing modulas.
        // if modulas returns nothing then it is x's turn else if it returns
        // something then it is o's turn. X starts the game off.
    $(".box").click(function () {
        if($(this).html() !== player1 && $(this).html() !== player2){
        if (counter %2 ==0) {
            $this = $(this);
            $this.html(player1);
            
            counter+=1;
            console.log(counter);
            console.log(player1);
            
    $(".turn").html("Player O's turn.")
    winner();
    
    }
    else if(counter %2 !=0) {
        $this = $(this);
        $this.html(player2);
        counter+=1;
        console.log(counter);
        console.log(player2);
        
        $(".turn").html("Player X's turn.")
        winner()
        
        }
    }
    });
    // The reset button 
    $(".restart").click(function(){
        $(".turn").html("Player X's turn.")
        $(".box").slideDown();
        counter = 0
        $(".box").html("")
    });
    
    // This will determine the winner by comparing the leading box to the other
    // 2 boxes consecutively. all the contents have to match. this function also adds 
    // to the respective players score.
function winner(){
    
    console.log("hi")
    if($("#b1").html() !== "" && $("#b1").html()=== $("#b2").html() && $("#b1").html() === $("#b3").html() ){
        console.log($("#b1").html()+ " you win");
            setTimeout(function(){alert($("#b4").html()+ " you win"); }, 600);
                if($("#b1").html()==="X"){
                    xWins++
                        $(".winnerX").html(`X: ${xWins}`);

         }else {
             oWins++
             $(".winnerO").html(`O: ${oWins}`);
         }
        $(".box").slideUp("slow"); 
    }
    else if($("#b4").html() != "" && $("#b4").html() === $("#b5").html()&& $("#b4").html()=== $("#b6").html() ){
        console.log($("#b4").html()+ " you win's");
            setTimeout(function(){alert($("#b4").html()+ " you win"); }, 600); 
                $(".winner").html($("#b4").html()+ " win\'s");
                    if($("#b1").html()==="X"){
                        xWins++
                            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
        $("div").slideup()
    }
    else if($("#b7").html() != "" && $("#b7").html()=== $("#b8").html()&& $("#b7").html()=== $("#b9").html() ){
        console.log($("#b7").html()+ " you win");
            setTimeout(function(){alert($("#b7").html()+ " you win"); }, 600); 
                $(".winner").html($("#b7").html()+ " win'\s");
                    if($("#b1").html()==="X"){
                        xWins++
                            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
        $(".box").slideUp("slow"); 
    }
    else if($("#b1").html() != "" && $("#b1").html()=== $("#b4").html()&& $("#b1").html()=== $("#b7").html() ){
        console.log($("#b1").html()+ " you win");
            setTimeout(function(){alert($("#b1").html()+ " you win"); }, 600); 
                $(".winner").html($("#b1").html()+ " win'\s");
                    if($("#b1").html()==="X"){
                        xWins++
                            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
        $(".box").slideUp("slow"); 
    }
    else if($("#b2").html() != "" && $("#b2").html()=== $("#b5").html()&& $("#b2").html()=== $("#b8").html() ){
        console.log($("#b2").html()+ " you win");
            setTimeout(function(){alert($("#b2").html()+ " you win"); }, 600); 
                $(".winner").html($("#b2").html()+ " win'\s");
                    if($("#b1").html()==="X"){
                        xWins++
                            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
        $(".box").slideUp("slow"); 
    }
    else if($("#b3").html() != "" && $("#b3").html()=== $("#b6")&& $("#b3").html()=== $("#b9").html() ){
        console.log($("#b3").html()+ " you win");
            setTimeout(function(){alert($("#b3").html()+ " you win"); }, 600); 
                $(".winner").html($("#b3").html()+ " win'\s");
                    if($("#b1").html()==="X"){
                        xWins++
                            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
        $(".box").slideUp("slow"); 
    }
    else if($("#b1").html() != "" && $("#b1").html()=== $("#b5").html()&& $("#b1").html()=== $("#b9").html() ){
        console.log($("#b1").html()+ " you win");
            setTimeout(function(){alert($("#b1").html()+ " you win"); }, 600); 
                $(".winner").html($("#b1").html()+ " win\'s");
                    if($("#b1").html()==="X"){
                        xWins++
                            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
        $(".box").slideUp("slow"); 
    }
    else if($("#b3").html() != "" && $("#b3").html()=== $("#b5")&& $("#b3").html()=== $("#b7").html() ){
        console.log($("#b3").html()+ " you win");
            setTimeout(function(){alert($("#b").html()+ " you win"); }, 600); 
                $(".winner").html($("#b3").html()+ " win\'s");
                    if($("#b1").html()==="X"){
                        xWins++
                            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
        $(".box").slideUp("slow"); 
    }
    

}
})
// I attempted the cookies but I did not fully get it becuase I did not fully grasp
// the concept. However I do know how to set a cookie with an experation.
document.cookie =`winsForX= ${xWins}; winsForX=${oWins}; expires=Thu, 18 Dec 2018 12:00:00 UTC` ; 