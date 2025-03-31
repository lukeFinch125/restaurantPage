import restaurantImage from "./imgs/restaurant.jpg";
import "./CSS/homePageStyles.css";

const homeContainer = document.querySelector("#content");

export function homeContent() {
    homeContainer.textContent = "";
    console.log("Home Content loaded");

    const titleContainer = document.createElement('div');
    titleContainer.id = "titleContainer";

    const title = document.createElement('h1');
    title.id = "title";
    title.textContent = 'THYME';

    const subTitle = document.createElement('p');
    subTitle.id = "subTitle";
    subTitle.textContent = 'Organic Farm & Restaurant';

    const image = document.createElement('img');
    image.id = "homeImage";
    image.src = restaurantImage;
    image.alt = "Restaurant photo";



    titleContainer.appendChild(title);
    titleContainer.appendChild(subTitle);
    homeContainer.append(titleContainer);
    homeContainer.appendChild(image);
}