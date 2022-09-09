let userscore=0;
let compscore=0;
const userscore_span=document.getElementById("user-score");
const compscore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score_board");
const result_p= document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){
    const choices=['r','p','s'];
    const random_number=Math.floor(Math.random() *3);//Math.random() is used to get random number between 0 and 1.Math.floor() is used to round of the random number after multiplied with 3.

    return choices[random_number]; //stores random choices from array
}
// console.log(getComputerChoice()); // to run getComputerChoice function
function towordconverter(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissors";
}




function win(userChoice,computer_choice){
   userscore++;
//    console.log("win");
//    console.log(userscore);//WE DON'T want to show in console, so we use the userscore_span element to show the result.
userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
// console.log(user);
// console.log(computer); //both line display user and computer result on console.
const smalluser= "user".fontsize(3).sup();//sup(),sub() is used for super script,subscript. to make the text appear up or down on the line 
const smallcomp= "comp".fontsize(3).sup();
result_p.innerHTML=towordconverter(userChoice) +smalluser+ " beats " + towordconverter(computer_choice)+smallcomp + ". You win.";
document.getElementById(userChoice).classList.add('green-glow');//classlist is a method that exist in DOM and js .it gives us all the array of all the classes of specific element.on that array we will add our class 'green-glow'. we are using it to glow the border.

// setTimeout(function(){console.log('hello')},3000 );// sets a timer which executes a function or specified piece of code once the timer expires
setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},200 );
}


function lose(userChoice,computer_choice){
compscore++;
    userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
const smalluser= "user".fontsize(3).sup();//sup(),sub() is used for super script,subscript. to make the text appear up or down on the line 
const smallcomp= "comp".fontsize(3).sup();
result_p.innerHTML=towordconverter(userChoice) +smalluser+ " loses to " + towordconverter(computer_choice)+smallcomp + ". You lost.";

 
document.getElementById(userChoice).classList.add('red-glow');
setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},200 );

}


function draw(userChoice,computer_choice){
    
 
compscore_span.innerHTML=compscore;
const smalluser= "user".fontsize(3).sup();//sup(),sub() is used for super script,subscript. to make the text appear up or down on the line 
const smallcomp= "comp".fontsize(3).sup();
result_p.innerHTML=towordconverter(userChoice) +smalluser+ " ties " + towordconverter(computer_choice)+smallcomp + ". It's a draw.";

 
document.getElementById(userChoice).classList.add('grey-glow');
setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},200 );

}


function game(userChoice){
   const computer_choice=getComputerChoice();  
//    console.log(  "computer choice =>" + computer_choice); //to print computer choice on console
//    console.log("user choice => " +userChoice); // to print user choice on console
    
 switch (userChoice + computer_choice){
    case "rs":
    case "pr":
    case "sp":
        // console.log("user wins");//print user wins on console
        win(userChoice,computer_choice);

    break;
    case "ps":
    case "rp":
    case "sr":
        // console.log("computer wins");//print comp wins on console
      lose(userChoice,computer_choice);
    break;
    case "rr":
    case "pp":
    case "ss":
        // console.log("user wins");//print draww on console
        draw(userChoice,computer_choice);
    break;
 }
}

// game('c'); //to run game function

function main (){
rock_div.addEventListener('click', function() {
    game("r")
})
paper_div.addEventListener('click', function() {
     game("p")
})
scissors_div.addEventListener('click', function() {
     game("s")
})

}
main();//to run the main function