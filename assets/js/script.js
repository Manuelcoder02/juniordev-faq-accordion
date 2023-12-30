"use strict";
/* Once I click on a question, I want the answer to be shown
nd if I click on it again, it should be hidden. */

// Select all the questions and answers
const faqQuestions = document.querySelectorAll(".faq-question");
const faqAnswers = document.querySelectorAll(".faq_answer");

// faqQuestions.forEach((question) => {
//   question.addEventListener("click", () => {
//     faqAnswers.forEach((answer) => {
//       answer.classList.toggle("active-list");
//     });
//     // question.nextElementSibling.classList.toggle("show");
//   });
// });

faqQuestions[0].addEventListener("click", function () {
  faqAnswers[0].classList.toggle("active-list");

  faqAnswers[1].classList.remove("active-list");
  faqAnswers[2].classList.remove("active-list");
  faqAnswers[3].classList.remove("active-list");
});

faqQuestions[1].addEventListener("click", function () {
  faqAnswers[1].classList.toggle("active-list");
  faqAnswers[0].classList.remove("active-list");
  faqAnswers[2].classList.remove("active-list");
  faqAnswers[3].classList.remove("active-list");
});

faqQuestions[2].addEventListener("click", function () {
  faqAnswers[2].classList.toggle("active-list");
  faqAnswers[0].classList.remove("active-list");
  faqAnswers[1].classList.remove("active-list");
  faqAnswers[3].classList.remove("active-list");
});

faqQuestions[3].addEventListener("click", function () {
  faqAnswers[3].classList.toggle("active-list");
  faqAnswers[0].classList.remove("active-list");
  faqAnswers[2].classList.remove("active-list");
  faqAnswers[1].classList.remove("active-list");
});
