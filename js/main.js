const burgerMenu = document.querySelector(".burger_menu");
const menu = document.querySelector(".nav_list");
const menu_search = document.querySelector(".header_search");
burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  menu_search.classList.toggle("active");
});
new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [11.05, 12.05, 13.05, 14.05, 15.05, 16.05],
    datasets: [
      {
        data: [0, 20, 20, 40, 54],
        label: "Вес",
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "World population per region (in millions)",
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".accordion_btn");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isActive = btn.classList.contains("active");
      const accordionContent = btn.parentElement.nextElementSibling;

      accordionBtns.forEach((btn) => {
        btn.classList.remove("active");
        btn.querySelector("img").style.transform = "rotate(0deg)"; 
      });

      if (!isActive) {
        accordionContent.style.maxHeight = "1920px";
        btn.classList.add("active");
        btn.querySelector("img").style.transform = "rotate(180deg)";
      } else {
        accordionContent.style.maxHeight = "0";
      }
    });
  });
});
