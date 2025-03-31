import "./CSS/menuPageStyles.css";

const homeContainer = document.querySelector("#content");


export function menuContent() {
    console.log("menu content loaded");
    homeContainer.textContent = "";

    const menuContainer = document.createElement('div');
    homeContainer.appendChild(menuContainer);

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = "Menu";
    menuContainer.appendChild(menuTitle);

    const drinkContainer = createElementWithID('div', 'drinkContainer');
    const foodContainer = createElementWithID('div', 'foodContainer');
    const dessertContainer = createElementWithID('div', 'dessertContainer');
    menuContainer.append(drinkContainer);
    menuContainer.append(foodContainer);
    menuContainer.append(dessertContainer);

    const drinkTitle = createElementWithID('div', 'drinkTitle');
    drinkTitle.innerHTML = "Drinks";
    drinkContainer.appendChild(drinkTitle);
    const coffeeContainer = createElementWithID('div', 'coffeeContainer');
    const beerContainer = createElementWithID('div', 'beerContainer');
    const sodaContainer = createElementWithID('div', 'sodaContainer');
    drinkContainer.appendChild(coffeeContainer);
    drinkContainer.appendChild(beerContainer);
    drinkContainer.appendChild(sodaContainer);
    
    const foodTitle = createElementWithID('div', 'foodTitle');
    foodTitle.innerHTML = "Food";
    foodContainer.appendChild(foodTitle);
    const friedChickenContainer = createElementWithID('div', 'friedChickenContainer');
    const wingsContainer = createElementWithID('div', 'wingsContainer');
    const burgerContainer = createElementWithID('div', 'burgerContainer');
    foodContainer.appendChild(friedChickenContainer);
    foodContainer.appendChild(wingsContainer);
    foodContainer.appendChild(burgerContainer);

    const dessertTitle = createElementWithID('div', 'dessertTitle');
    dessertTitle.innerHTML = "Desserts";
    dessertContainer.appendChild(dessertTitle);
    const icecreamContainer = createElementWithID('div', 'icecreamContainer');
    const cookieContainer = createElementWithID('div', 'cookieContainer');
    const cakeContainer = createElementWithID('div', 'cakeContainer');
    dessertContainer.appendChild(icecreamContainer);
    dessertContainer.appendChild(cookieContainer);
    dessertContainer.appendChild(cakeContainer);
    
    coffeeContainer.innerHTML = `
        <h3>Coffee</h3>
        <p>$4</p>
        <p>
            Coffee is a rich, aromatic beverage made from roasted beans. Its bold flavor and energizing 
            properties make it a beloved morning ritual and a versatile base for specialty drinks.
        </p>
    `;

    beerContainer.innerHTML = `
        <h3>Beer</h3>
        <p>$8</p>
        <p>
           Beer is a fermented alcoholic drink crafted from malted barley, hops, yeast, and water. It
            ranges from light and crisp to dark and robust, ideal for casual socializing or paired with meals.
        </p>
    `;

    sodaContainer.innerHTML = `
        <h3>Beer</h3>
        <p>$3</p>
        <p>
           Soda is a carbonated, sweet beverage that offers a refreshing burst of flavor. Its effervescence
            and varied taste profiles provide a light, thirst-quenching treat for any occasion.
        </p>
    `;

    friedChickenContainer.innerHTML = `
        <h3>Fried Chicken</h3>
        <p>$22</p>
        <p>
           Fried chicken features tender, juicy meat enveloped in a crunchy, seasoned batter. Its savory, 
           comforting flavors and satisfying crispiness make it a timeless, indulgent favorite.
        </p>
    `;

    wingsContainer.innerHTML = `
        <h3>Buffalo Wings</h3>
        <p>$18</p>
        <p>
           Chicken wings are bite-sized morsels known for their crispy skin and flavorful, tangy sauces. Whether 
           mild or spicy, they make a perfect appetizer or snack with a satisfying crunch.
        </p>
    `;

    burgerContainer.innerHTML = `
        <h3>Hamburger</h3>
        <p>$15</p>
        <p>
          A burger is a classic meal featuring a juicy patty nestled between soft buns. With fresh toppings 
          and condiments, it offers a balanced, hearty, and flavorful bite every time.
        </p>
    `;

    icecreamContainer.innerHTML = `
        <h3>Vanilla Ice Cream</h3>
        <p>$6</p>
        <p>
          Ice cream is a delightful, frozen dessert crafted from cream, sugar, and various flavorings. Its smooth, 
          creamy texture and rich, sweet taste provide a refreshing indulgence on warm days.
        </p>
    `;

    cakeContainer.innerHTML = `
        <h3>Chocolate Cake</h3>
        <p>$8</p>
        <p>
          Cake is an indulgent, celebratory dessert renowned for its soft, spongy layers and luscious frosting. Often featured 
          at special occasions, its rich, sweet flavors evoke both comfort and festivity.
        </p>
    `;

    cookieContainer.innerHTML = `
        <h3>Chocolate Chip Cookie</h3>
        <p>$4</p>
        <p>
          A cookie is a small, baked treat with a tender, sometimes crunchy texture and a sweet, buttery flavor. 
          Often enjoyed with milk, it remains a timeless, comforting snack.
        </p>
    `;


}

function createElementWithID(tag, id) {
    const element = document.createElement(tag);
    element.id = id;
    return element;
}
