"use strict";
/* Once I click on a question, I want the answer to be shown
nd if I click on it again, it should be hidden. */

// Select all the questions and answers
const faqQuestions = document.querySelectorAll(".faq-question");
const faqAnswers = document.querySelectorAll(".faq_answer");
const menuToggle = document.querySelectorAll(".toggle-list");

const btnPlus = document.querySelectorAll(".plus-icon");
const btnMinus = document.querySelectorAll(".minus-icon");
console.log(btnPlus, btnMinus);

// toggling the Aaria-expanded attributes dynamically
//

menuToggle[0].addEventListener("click", function () {
  faqQuestions[0].classList.toggle("active-list");

  const isExpanded = menuToggle[0].attributes["aria-expanded"];
  console.log(isExpanded.value);
  if (isExpanded.value === "true") {
    menuToggle[0].ariaExpanded = "false";
  } else {
    menuToggle[0].ariaExpanded = "true";
  }

  faqQuestions[1].classList.remove("active-list");
  faqQuestions[2].classList.remove("active-list");
  faqQuestions[3].classList.remove("active-list");
});

menuToggle[1].addEventListener("click", function () {
  faqQuestions[1].classList.toggle("active-list");

  const isExpanded = menuToggle[1].attributes["aria-expanded"];
  console.log(isExpanded.value);
  if (isExpanded.value === "true") {
    menuToggle[1].ariaExpanded = "false";
  } else {
    menuToggle[1].ariaExpanded = "true";
  }

  faqQuestions[0].classList.remove("active-list");
  faqQuestions[2].classList.remove("active-list");
  faqQuestions[3].classList.remove("active-list");
});

menuToggle[2].addEventListener("click", function () {
  faqQuestions[2].classList.toggle("active-list");

  const isExpanded = menuToggle[2].attributes["aria-expanded"];
  console.log(isExpanded.value);
  if (isExpanded.value === "true") {
    menuToggle[2].ariaExpanded = "false";
  } else {
    menuToggle[2].ariaExpanded = "true";
  }

  faqQuestions[0].classList.remove("active-list");
  faqQuestions[1].classList.remove("active-list");
  faqQuestions[3].classList.remove("active-list");
});

menuToggle[3].addEventListener("click", function () {
  faqQuestions[3].classList.toggle("active-list");

  const isExpanded = menuToggle[3].attributes["aria-expanded"];
  console.log(isExpanded.value);
  if (isExpanded.value === "true") {
    menuToggle[3].ariaExpanded = "false";
  } else {
    menuToggle[3].ariaExpanded = "true";
  }

  faqQuestions[0].classList.remove("active-list");
  faqQuestions[2].classList.remove("active-list");
  faqQuestions[1].classList.remove("active-list");
});
