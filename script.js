// Create a quiz object with a title and two questions.
// A question has one or more answer, and one or more is valid.
var quiz = {
  title: "Finance Practice Test Unit 1",
  questions: [
      {
          number: "1",
          question: "In order to determine the future value of some lump sum, we must use the process of _________________.",
          responses: [
              { answer: "Discounting"},
              { answer: "Compounding", correct: true  },
              //{ answer: "Annuity Analysis" },
              //{ answer: "Risk Analysis" },
              //{ answer: "None of the above" }
          ]
      },
      {
          number: "2",
          question: "In the bond market, firms raise debt financing directly from ________.",
          responses: [
              { answer: "Investors", correct: true },
              { answer: "Consumers banks" }
          ]
      },
      {
        number: "3",
          question: "Stockholders have a __________ claim on firm earnings and assets.",
          responses: [
              { answer: "Fixed" },
              { answer: "Residual", correct: true }
          ]
      },
      {
        number: "4",
          question: "Which of the following securities represents ownership in the firm?",
          responses: [
              { answer: "Preferred Stock", correct: true },
              { answer: "Bonds"}
          ]
      },
      {
        number: "5",
          question: "You want $15,000, fifteen years from now. If you can earn 8% per year in your savings account, how much do you have to deposit in today?",
          responses: [
              { answer: "$6,818" },
              { answer: "$4,729", correct: true }
          ]
      },
  ]
};


new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: Array(quiz.questions.length).fill(false)
  },
  methods: {
    dontpress: function(){
      console.log("Nothing was pressed");
      console.log(counter);
      counter++;
      if (event){
        if (counter>5){
          alert("AGGGGHH STOP")
        }
        else if (counter>3){
          alert("Seriously, Stop it")
        }
        else{
          alert("Stop it")
        }
      }
    },
    next: function() {
      this.questionIndex++;
    },
    prev: function() {
      this.questionIndex--;
    },
    restart: function() {
      this.questionIndex=0;
    },
    score: function() {
      return this.userResponses.filter(function(val) {
        return val;
      }).length;
    }
  }
});
var counter = 0;
