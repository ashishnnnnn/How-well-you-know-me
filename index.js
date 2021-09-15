var readlineSync = require('readline-sync');
var name = readlineSync.question("What is your name? \n");
console.log("Welcome "+name+" let see how much do you know me!!!");

var score = 0;

function play_game(query,answer){
  var user_answer = readlineSync.question(query);
  if(user_answer===answer){
    console.log("You are Right");
    score+=1;
    console.log("Your Current Score is ",score);
    console.log("---------------------------------------------------")
  }
  else{
    console.log("You are Wrong");
    console.log("Your Current Score is ",score);
    console.log("--------------------------------------------------------------------------");
  }
}

var question1 = {
  question: "(1).What is My First Name? ",
  answer : "Ashish"
};

var question2 = {
  question: "(2).What is My Hobbie? ",
  answer : "Music"
};

var question3 = {
  question: "(3).What is My HomeTown? ",
  answer: "Arrah"
};

var question4 = {
  question: "(4).Am i older than 25? ",
  answer: "No"
};

var question5 = {
  question: "(5).What brand of laptop i have? ",
  answer: "Dell"
};

var question6 = {
  question: "(6).Name of My Elder Sister? ",
  answer: "Appu"
};

var question7 = {
  question: "What is My BirthDay Month? ",
  answer: "July"
};

var questions = [question1,question2,question3,question4,question5,question6,question7];

for(var i=0;i<questions.length;i++){
  var query = questions[i].question;
  var answer = questions[i].answer;
  play_game(query,answer);
}

console.log("Your Total Score is ",score);
