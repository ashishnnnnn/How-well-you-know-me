var readlineSync = require('readline-sync');
var name = readlineSync.question("What is your name? ");

console.log("Welcome "+name+" let see how much do you know me!!!");

var score = 0;

function play_game(query,answer){
  var user_answer = readlineSync.question(query);
  if(user_answer===answer){
    console.log("You are Right");
    score+=1;
  }
  else{
    console.log("You are Wrong");
  }
}

var question1 = {
  question: "What is My Name? ",
  answer : "Ashish"
};

var question2 = {
  question: "What is My Hobbie? ",
  answer : "Music"
};

var question3 = {
  question: "What is My HomeTown? ",
  answer: "Arrah"
};

var question4 = {
  question: "Am i older than 25? ",
  answer: "No"
};

var question5 = {
  question: "What brand of laptop i have? ",
  answer: "Dell"
};

var questions = [question1,question2,question3,question4,question5];

for(var i=0;i<questions.length;i++){
  var query = questions[i].question;
  var answer = questions[i].answer;
  play_game(query,answer);
}

console.log("Your Score is ",score);