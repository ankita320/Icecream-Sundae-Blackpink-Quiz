# Icecream-Sundae-Blackpink-Quiz
var questionCount = 0;
var lisaScore = 0;
var jennieScore = 0;
var jisooScore = 0;
var roseScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//Q2 variables


//Q3 variables
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//Q2 variables
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

//Q3 variables
var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");

//Result
var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", lisa);
q1a2.addEventListener("click", jennie);
q1a3.addEventListener("click", jisoo);
q1a4.addEventListener("click", rose);


q3a1.addEventListener("click", lisa);
q3a2.addEventListener("click", jennie);
q3a3.addEventListener("click", jisoo);
q3a4.addEventListener("click", rose);

q4a1.addEventListener("click", lisa);
q4a2.addEventListener("click", jennie);
q4a3.addEventListener("click", jisoo);
q4a4.addEventListener("click", rose);


q5a1.addEventListener("click", lisa);
q5a2.addEventListener("click", jennie);
q5a3.addEventListener("click", jisoo);
q5a4.addEventListener("click", rose);

q6a1.addEventListener("click", lisa);
q6a2.addEventListener("click", jennie);
q6a3.addEventListener("click", jisoo);
q6a4.addEventListener("click", rose);

q7a1.addEventListener("click", lisa);
q7a2.addEventListener("click", jennie);
q7a3.addEventListener("click", jisoo);
q7a4.addEventListener("click", rose);

q8a1.addEventListener("click", lisa);
q8a2.addEventListener("click", jennie);
q8a3.addEventListener("click", jisoo);
q8a4.addEventListener("click", rose);

q9a1.addEventListener("click", lisa);
q9a2.addEventListener("click", jennie);
q9a3.addEventListener("click", jisoo);
q9a4.addEventListener("click", rose);
//#TODO: Define quiz functions here

function lisa() {
  lisaScore += 1;
  questionCount += 1;
  // alert("One Point to TALB");
  if (questionCount >= 8) {
    updateResult();
  }
}

function jennie() {
 jennieScore += 1;
  questionCount += 1;
  // alert("One Point to LFE");
  if (questionCount >= 8) {
    updateResult();
  }
}

function jisoo() {
  jisooScore += 1;
  questionCount += 1;
  //alert("One Point to HG");
  if (questionCount >= 8) {
    updateResult();
  }
}

function rose() {
  roseScore += 1;
  questionCount += 1;
  // alert("One Point to HP");
  if (questionCount >= 8) {
    updateResult();
  }
}

function updateResult(){
  if (lisaScore >=4){
    result.innerHTML = "Lisa!";
  }
  else if (jennieScore >=4){
    result.innerHTML = "Jennie!";
  }
  else if (jisooScore >=4){
    result.innerHTML = "Jisoo!";
  }
  else if (roseScore >=4){
    result.innerHTML = "Rose!";
  }
  else {
    result.innerHTML = "Lisa, Jennie, Jisoo, and Rose! You're like them all!";
  }
}

