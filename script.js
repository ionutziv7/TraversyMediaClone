// Course items

const mernItem = document.querySelector(".mern-item");
const nodeJsItem = document.querySelector(".node-js-item");
const web20ProjectsItem = document.querySelector(".web-20-projects-item");
const djangoItem = document.querySelector(".django-item");
const phpItem = document.querySelector(".php-item");
const electronItem = document.querySelector(".electron-item");

// Created array of items
const arrItems = [
  mernItem,
  nodeJsItem,
  web20ProjectsItem,
  djangoItem,
  phpItem,
  electronItem,
];

const btnShowCourses = document.getElementById("btn-show-courses");

// Event listeners
btnShowCourses.addEventListener("click", () => {
  btnShowCourses.classList.toggle("hide-courses");
  // toggle btn textContent
  toggleBtnText();

  // loop through items and display them and add margin
  arrItems.forEach((item) => {
    // display last 6 courses
    item.classList.toggle("display-block");

    // add margin top to courses
    item.classList.toggle("mt-5");
  });
});

// Set btn text when clicked accordingly
function toggleBtnText() {
  if (btnShowCourses.classList.contains("hide-courses")) {
    btnShowCourses.textContent = "HIDE COURSES";
  } else {
    btnShowCourses.textContent = "SHOW MORE COURSES";
  }
}

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 750) {
    document.getElementById("arrow").className = "arrow__container";
  } else {
    document.getElementById("arrow").className = "";
  }
}
