const project1 = document.getElementById("project-1-img");
const project2 = document.getElementById("project-2-img");
const project3 = document.getElementById("project-3-img");
const project1btn = document.getElementById("project-1-button");
const project2btn = document.getElementById("project-2-button");
const project3btn = document.getElementById("project-3-button");
// Initially, only project1 is visible
project1.style.display = "none";
project2.style.display = "none";
project3.style.display = "none";

project1btn.addEventListener("click", () => {
  if (project1.style.display === "none") {
  project1.style.display = "block";
  project2.style.display = "none";
  project3.style.display = "none";
  } else if (project1.style.display === "block") {
    project1.style.display = "none";
    project2.style.display = "none";
    project3.style.display = "none";
  }
});

project2btn.addEventListener("click", () => {
  if (project2.style.display === "none") {
  project2.style.display = "block";
  project1.style.display = "none";
  project3.style.display = "none";
  } else if (project2.style.display === "block") {
    project2.style.display = "none";
  }
});
project3btn.addEventListener("click", () => {
  if (project3.style.display === "none") {
  project3.style.display = "block";
  project1.style.display = "none";
  project2.style.display = "none";
  } else if (project3.style.display === "block") {
    project3.style.display = "none";
  }
});
