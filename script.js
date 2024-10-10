const project1 = document.getElementById("project-1-img");
const project2 = document.getElementById("project-2");
const project3 = document.getElementById("project-3");
const project1btn = document.getElementById("project-1-button");

project1btn.addEventListener("click", () => {
    if (project1.style.display === "none") {
      project1.style.display = "block";
      project1.style.marginLeft= "-100px";
      project2.style.display = "none";
      project3.style.display = "none";
    } else {
      project1.style.display = "none";   
      project2.style.display = "block";
      project3.style.display = "block";  
    }
  });