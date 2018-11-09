$(document).ready(function() {
let player1 = "X";
counter = 0
let player2 = "O";
let xWins= 0
let oWins= 0


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
    $(".restart").click(function(){
        $(".turn").html("Player X's turn.")
        $(".box").slideDown();
        counter = 0
        $(".box").html("")
    });
    
  
function score(){
    let xWin="";
    let oWin="";

    if (winner()=== true && $("#b1")=="X"){
    xWin ++
    $(".winnerX").html($(xWin).html()+ " win\'s");
    }else if(winner()===true && $("#b1")=="X")
    oWin ++
    $(".winnerX").html($(oWin).html()+ " win\'s");
}
// let xwin=0
// let owin=0
function winner(){
    
    console.log("hi")
    if($("#b1").html() !== "" && $("#b1").html()=== $("#b2").html() && $("#b1").html() === $("#b3").html() ){
        console.log($("#b1").html()+ " you win");
    
        // setTimeout(function(){alert($("#b1").html()+ " you win"); }, 500);
       
         if($("#b1").html()==="X"){
             xWins++
             $(".winnerX").html(`X: ${xWins}`);
             
         }else {
             oWins++
             $(".winnerO").html(`O: ${oWins}`);
         }
        $(".box").slideUp("slow", function() {
            
          });

    }
    else if($("#b4").html() != "" && $("#b4").html() === $("#b5").html()&& $("#b4").html()=== $("#b6").html() ){
        console.log($("#b4").html()+ " you win's");
        setTimeout(function(){alert($("#b4").html()+ " you win"); }, 500); 
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
        setTimeout(function(){alert($("#b7").html()+ " you win"); }, 500); 
        $(".winner").html($("#b7").html()+ " win'\s");
        if($("#b1").html()==="X"){
            xWins++
            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
    }
    else if($("#b1").html() != "" && $("#b1").html()=== $("#b4").html()&& $("#b1").html()=== $("#b7").html() ){
        console.log($("#b1").html()+ " you win");
        setTimeout(function(){alert($("#b1").html()+ " you win"); }, 500); 
        $(".winner").html($("#b1").html()+ " win'\s");
        if($("#b1").html()==="X"){
            xWins++
            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
    }
    else if($("#b2").html() != "" && $("#b2").html()=== $("#b5").html()&& $("#b2").html()=== $("#b8").html() ){
        console.log($("#b2").html()+ " you win");
        setTimeout(function(){alert($("#b2").html()+ " you win"); }, 500); 
        $(".winner").html($("#b2").html()+ " win'\s");
        if($("#b1").html()==="X"){
            xWins++
            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
    }
    else if($("#b3").html() != "" && $("#b3").html()=== $("#b6")&& $("#b3").html()=== $("#b9").html() ){
        console.log($("#b3").html()+ " you win");
        setTimeout(function(){alert($("#b3").html()+ " you win"); }, 500); 
        $(".winner").html($("#b3").html()+ " win'\s");
        if($("#b1").html()==="X"){
            xWins++
            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
    }
    else if($("#b1").html() != "" && $("#b1").html()=== $("#b5").html()&& $("#b1").html()=== $("#b9").html() ){
        console.log($("#b1").html()+ " you win");
        setTimeout(function(){alert($("#b1").html()+ " you win"); }, 500); 
        $(".winner").html($("#b1").html()+ " win\'s");
        if($("#b1").html()==="X"){
            xWins++
            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
    }
    else if($("#b3").html() != "" && $("#b3").html()=== $("#b5")&& $("#b3").html()=== $("#b7").html() ){
        console.log($("#b3").html()+ " you win");
        setTimeout(function(){alert($("#b").html()+ " you win"); }, 500); 
        $(".winner").html($("#b3").html()+ " win\'s");
        if($("#b1").html()==="X"){
            xWins++
            $(".winnerX").html(`X: ${xWins}`);
            
        }else {
            oWins++
            $(".winnerO").html(`O: ${oWins}`);
        }
    }
    

}

});
lastWinner = "dataCookie";
let win;

function putCookie() {

if(document.cookie != document.cookie) 
{index = document.cookie.indexOf(lastWinner);}
else 
{ index = -1;}

if (index == -1){
win=$(".winner");
document.cookie=lastWinner+"="+win+"; expires=Monday, 04-Apr-2020 05:00:00 GMT";
}
};