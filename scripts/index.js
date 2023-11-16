document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".show-more");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var contentContainer = button.closest(".faq-card");
      var hiddenContent = contentContainer.querySelector(".hidden-content");
      hiddenContent.style.display =
        hiddenContent.style.display === "none" ? "block" : "none";
    });
  });
});