document
  .getElementById("link-automovel")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".pagina2").scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("link-residencial")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".pagina3").scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("inicio").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".home").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".botoes img").forEach(function (img) {
  img.addEventListener("click", function () {
    img.classList.toggle("clicked");

    if (img.id === "Carro") {
      document.querySelector(".pagina2").scrollIntoView({ behavior: "smooth" });
    } else if (img.id === "CASA") {
      document.querySelector(".pagina3").scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  document.getElementById("esquerdabaixo").style.transform = `translateY(${
    scrollPosition * 0.5
  }px)`;
  document.getElementById("direitabaixo").style.transform = `translateY(${
    scrollPosition * 0.5
  }px)`;
  document.getElementById("meio").style.transform = `translateY(${
    scrollPosition * 0.3
  }px)`;
  document.getElementById("top").style.transform = `translateY(${
    scrollPosition * 0.2
  }px)`;
});
