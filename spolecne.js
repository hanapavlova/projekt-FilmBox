//sbalení nebo rozbalení menu a změna hamburger menu na křížek po rozkliknutí
const changeMenu = () => {
    const polozky = document.querySelector("#menu-polozky");
    polozky.classList.toggle ("show");
    const ikona = document.querySelector(".fas.fa-bars");
    ikona.classList.toggle ("fa-xmark")
  };

const tlacitko = document.querySelector("#menu-tlacitko")
tlacitko.addEventListener("click",changeMenu);
