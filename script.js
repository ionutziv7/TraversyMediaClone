// first method

const mernItem = document.querySelector(".mern-item");
const nodeJsItem = document.querySelector(".node-js-item");
const web20ProjectsItem = document.querySelector(".web-20-projects-item");
const djangoItem = document.querySelector(".django-item");
const phpItem = document.querySelector(".php-item");
const electronItem = document.querySelector(".electron-item");

const lastCoursesContainer = document.querySelectorAll(
  ".last-courses-container"
);

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
  btnShowCourses.classList.toggle("hide");
  toggleBtn();

  arrItems.forEach((item) => {
    // display last 6 courses
    item.classList.toggle("display-block");

    // add margin top to courses
    item.classList.toggle("mt-5");
  });
});

// Set btn text when clicked accordingly
function toggleBtn() {
  if (btnShowCourses.classList.contains("hide")) {
    btnShowCourses.textContent = "HIDE COURSES";
  } else {
    btnShowCourses.textContent = "SHOW MORE COURSES";
  }
}
