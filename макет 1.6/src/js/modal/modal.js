const modalCall = document.querySelector(".call");
const modalFeedback = document.querySelector(".feedback");
const openCall = document.querySelectorAll(".buttons__call");
const openFeedback = document.querySelectorAll(".buttons__chat");
const closeCall = modalCall.querySelector(".call__close-button");
const closeFeedBack = modalFeedback.querySelector(".feedback__close-button");
const whiteMask = document.querySelector(".white-mask");
const body = document.querySelector("body");

openCall.forEach((callButton) =>
  callButton.addEventListener("click", function () {
    modalCall.classList.add("call--show");
    whiteMask.classList.add("white-mask--show");
    body.classList.add("body--overflow");
    whiteMask.style = "z-index: 4";
  })
);

closeCall.addEventListener("click", function () {
  modalCall.classList.remove("call--show");
  whiteMask.classList.remove("white-mask--show");
  body.classList.remove("body--overflow");
  whiteMask.style = "z-index: 2";
});

whiteMask.addEventListener("click", function () {
  modalCall.classList.remove("call--show");
  modalFeedback.classList.remove("feedback--show");
  body.classList.remove("body--overflow");
  whiteMask.style = "z-index: 2";
});

closeFeedBack.addEventListener("click", function () {
  modalFeedback.classList.remove("feedback--show");
  whiteMask.classList.remove("white-mask--show");
  body.classList.remove("body--overflow");
  whiteMask.style = "z-index: 2";
});

openFeedback.forEach((feedbackButton) =>
  feedbackButton.addEventListener("click", function () {
    modalFeedback.classList.add("feedback--show");
    whiteMask.classList.add("white-mask--show");
    body.classList.add("body--overflow");
    whiteMask.style = "z-index: 4";
  })
);
