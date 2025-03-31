import { homeContent } from "./homePage.js";
import { menuContent } from "./menu.js";
import { contactContent } from "./contact.js";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

document.addEventListener('DOMContentLoaded', contactContent);
homeButton.addEventListener('click', homeContent);
menuButton.addEventListener('click', menuContent);
contactButton.addEventListener('click', contactContent);

console.log("restaurant Website")