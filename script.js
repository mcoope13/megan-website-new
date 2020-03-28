var skills = document.getElementById("skills");
var skillsColorChange = function () {
    skills.style.background = "rgb(221, 255, 247)";
};
var skillsColorBack = function () {
    skills.style.background = "rgb(255,255,255)";
};
skills.addEventListener('mouseover', skillsColorChange);
skills.addEventListener('mouseout', skillsColorBack);

var portfolio = document.getElementById("portfolio");
var portfolioColorChange = function () {
    portfolio.style.background = "rgb(124, 198, 254)";
};
var portfolioColorBack = function () {
    portfolio.style.background = "rgb(255,255,255)";
};
portfolio.addEventListener('mouseover', portfolioColorChange);
portfolio.addEventListener('mouseout', portfolioColorBack);

var contact = document.getElementById("contact");
var contactColorChange = function () {
    contact.style.background = "rgb(255, 166, 158)";
};
var contactColorBack = function () {
    contact.style.background = "rgb(255,255,255)";
};
contact.addEventListener('mouseover', contactColorChange);
contact.addEventListener('mouseout', contactColorBack);
