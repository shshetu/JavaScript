function populate(){
  if(quiz.isEnded()){
    //showScores();
  }
  else{
    //show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
  }
}
var questions = [
  new Question("Which one is not an object oriented programming
  language?",["Java","C#","C++","C"],"C");
  new Question("Which one is not an object oriented programming
  language?",["Java","C#","C++","C"],"C");
  new Question("Which one is not an object oriented programming
  language?",["Java","C#","C++","C"],"C");
  new Question("Which one is not an object oriented programming
  language?",["Java","C#","C++","C"],"C");
  new Question("Which one is not an object oriented programming
  language?",["Java","C#","C++","C"],"C");

];

var quiz = new Quiz(questions);
populate();
