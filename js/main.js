import Details from "./details.js";
import Home from "./home.js";
import UI from "./UI.js";

const home = new Home();
const details = new Details();
const ui = new UI();

window.addEventListener("load", (event) => {
    ui.getGames();
  });