var Game = function(numOfQ) {
this.rounds = numOfQ;
var welcome = "You will be asked " + numOfQ + " questions, try and guess the right answer! \nHINT: The answer is always between 1 and 20.";
this.tries = 0;
this.question = "";
this.guess = "";
var msg = "";

var instructions = function(welcome){
  var item = document.getElementById("welcome");
  var text = document.createTextNode(welcome);
  item.appendChild(text);
};

var message = function(msg){
  var ul = document.getElementById("message");
  var li = document.createElement("LI");
  var text = document.createTextNode(msg);
  li.appendChild(text);
  ul.appendChild(li);
};

instructions(welcome);
this.play = function() {
  do{
    this.question = Math.floor(Math.random() * 20);
    switch   (this.question){
      case 0:
        this.guess = prompt("I'm thinking of a number between 1 and 20, can you guess it?");
        break;
      case 1:
        this.guess = prompt("I have played volleyball for a few hours today, can you guess how many?");
        break;
      case 2:
        this.guess = prompt("I ate some skittles today, can you guess how many?");
        break;
      case 3:
        this.guess = prompt("Yesterday I biked a few miles, can you guess how many?");
        break;
      case 4:
        this.guess = prompt("I have visited a handful of countries, can you guess how many?");
        break;
      case 5:
        this.guess = prompt("I went shopping last week, how many stores did I go to?");
        break;
      case 6:
        this.guess = prompt("This weekend I went to a part, how many people were there?");
        break;
      case 7:
        this.guess = prompt("How many ice cream sandwhiches did I buy today?");
        break;
      case 8:
        this.guess = prompt("How old is my little sister?");
        break;
      case 9:
        this.guess = prompt("How old is my little brother?");
        break;
      case 10:
        this.guess = prompt("How old is my dog?");
        break;
      case 11:
        this.guess = prompt("How old is my turtle?");
        break;
      case 12:
        this.guess = prompt("I bought popcorn yesterday, how much did it cost?");
        break;
      case 13:
        this.guess = prompt("I filled up my gas tank last night, how many gallons did I get?");
        break;
      case 14:
        this.guess = prompt("I filled up my gas tank yesterday how much did it cost?");
        break;
      case 15:
        this.guess = prompt("How many years did I play the violin?");
        break;
      case 16:
        this.guess = prompt("How much does my bouquet weigh?");
        break;
      case 17:
        this.guess = prompt("I went on a run, how many minutes did I run for?");
        break;
      case 18:
        this.guess = prompt("I ate some carrots today, how many?");
        break;
      case 19:
        this.guess = prompt("My grandma gave me some cash, how much?");
        break;
    }

    this.answer = Math.floor(Math.random() * 20) + 1;
    console.log("The answer is " +  this.answer);

    if (this.guess ==  this.answer){
      msg = "That was incredible, you guessed " +  this.guess + " and the answer was " +  this.answer + ".";
    } else {
      msg = "Sorry, you did not guess it correctly. Your guess was " +  this.guess + " but the answer was " +  this.answer + ".";
    }

       // var alert = document.getElementById("message");
       // var content = document.createTextNode(msg);
       // alert.appendChild(content);


    //alert(msg);
    message(msg);
    this.tries++;
  } while(this.tries < this.rounds);

  };
};

var game1 = new Game(3);
game1.play();

// var game2 = new Game(5);
// game1.play();

// var game3 = new Game(7);
// game1.play();

// var game4 = new Game(9);
// game1.play();

// var game5 = new Game(11);
// game1.play();

alert("Thanks for playing, I hope that you guessed correctly!");
