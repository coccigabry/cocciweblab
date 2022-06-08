const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");


hamburger_menu.addEventListener("click", () => {

  container.classList.toggle("active");

  document.getElementById("home-btn").onclick = function() {
    document.getElementById("home").style.display = "block";
    document.getElementById("services").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";

    document.getElementById("home-btn").onclick = function() {
      container.classList.toggle("active");
    }

  }

  document.getElementById("services-btn").onclick = function() {
    document.getElementById("services").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";

    document.getElementById("services-btn").onclick = function() {
      container.classList.toggle("active");
    }

  }

  document.getElementById("portfolio-btn").onclick = function() {
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";

    document.getElementById("portfolio-btn").onclick = function() {
      container.classList.toggle("active");
    }

  }

  document.getElementById("about-btn").onclick = function() {
    document.getElementById("about").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "none";

    document.getElementById("about-btn").onclick = function() {
      container.classList.toggle("active");
    }

  }

  document.getElementById("contact-btn").onclick = function() {
    document.getElementById("contact").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("about").style.display = "none";

    document.getElementById("contact-btn").onclick = function() {
      container.classList.toggle("active");
    }

  }

});
