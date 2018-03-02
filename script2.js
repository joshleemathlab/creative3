var quiz = {
  title: "Finance Practice Test Unit 2",
  questions: [

      {
          number: "1",
          question: "Which type of risk can be diversified away?",
          responses: [
              { answer: "Market"},
              { answer: "Firm Specific", correct: true  },
              //{ answer: "Annuity Analysis" },
              //{ answer: "Risk Analysis" },
              //{ answer: "None of the above" }
          ]
      },
      {
          number: "2",
          question: "Which of the following is NOT an example of factors that affect systematic risk?",
          responses: [
              { answer: "Business Cycle Changes" },
              { answer: "A company's labor force goes on strike", correct: true }
          ]
      },
      {
        number: "3",
          question: "What is beta in financial terms?",
          responses: [
              { answer: "The amount of systematic risk in an asset", correct: true },
              { answer: "The market premium" }
          ]
      },
      {
        number: "4",
          question: "A company has a beta of 1.5.  The expected return on the market is 15% and the risk free rate is 3.5%.  Given this information, the company has a cost of equity that is ______________.",
          responses: [
              { answer: "20.75%", correct: true },
              { answer: "19.25%"}
          ]
      },
      {
        number: "5",
          question: "Which of the five key ownership structures has the lightest filing requirements, and is the cheapest and easiest to start?",
          responses: [
              { answer: "Sole Proprietorship", correct: true },
              { answer: "S-Corp"}
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
