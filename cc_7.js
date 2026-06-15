console.log("Website Loaded");
let headlineInput = document.getElementById("headlineInput");
let updateButton = document.getElementById("updateButton");
let ctaHeadline = document.getElementById("ctaHeadline");
let headlineInput = document.getElementById("headlineInput");
let updateButton = document.getElementById("updateButton");
let ctaHeadline = document.getElementById("ctaHeadline");

updateButton.addEventListener("click", function () {

});
let headlineInput = document.getElementById("headlineInput");
let updateButton = document.getElementById("updateButton");
let ctaHeadline = document.getElementById("ctaHeadline");

updateButton.addEventListener("click", function () {

    if (headlineInput.value !== "") {

        ctaHeadline.textContent = headlineInput.value;

        headlineInput.value = "";

    }

});
