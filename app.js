// Dark Mode

const darkMode = document.getElementById("dark-mode");
const body = document.getElementById("body");
const cards = document.querySelectorAll("article");

// I tried multiple times with classLists and with some conditionals but im still new, I will find a better looking code and will upgrade this one

darkMode.addEventListener("click", () => {
  body.style.backgroundColor =
    body.style.backgroundColor === "black" ? "white" : "black";

  // const to add ark mode to cards

  const newBg = body.style.backgroundColor;

  cards.forEach((dark) => {
    dark.style.backgroundColor = newBg;
  });
});

// Search Function

// Getting the elements

const search = document.getElementById("search");

const arcticles = document.querySelectorAll(".article");

// Event listener and loop to search for each tittle

search.addEventListener("input", () => {
  const searcTitle = search.value.toLowerCase();

  arcticles.forEach((anime) => {
    const tittle = anime.querySelector("h3").textContent.toLowerCase();

    if (tittle.includes(searcTitle)) {
      anime.style.display = "";
    } else {
      anime.style.display = "none";
    }
  });
});
