/*============ Loader ============*/
var loader = document.querySelector(".section-loader");
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}
