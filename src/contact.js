import "./CSS/contactPageStyles.css";

const homeContainer = document.querySelector("#content");

export function contactContent() {
    console.log("contact content loaded");
    homeContainer.textContent = "";

    const contentContainer = document.createElement('div');
    contentContainer.id = 'contentContainer';
    const contactTitle = document.createElement('div');
    contactTitle.id = 'contactTitle';
    contactTitle.innerHTML = 'Contact Us';
    homeContainer.appendChild(contentContainer);
    contentContainer.appendChild(contactTitle);

    const addressContainer = document.createElement('div');
    addressContainer.id = 'addressContainer';
    addressContainer.innerHTML = 'Address: 1234 Skibby Road, Rizz County 42342';
    contentContainer.appendChild(addressContainer);

    const phoneContainer = document.createElement('div');
    phoneContainer.id = 'phoneContainer';
    phoneContainer.innerHTML = 'Phone Number: 123-456-7891';
    contentContainer.appendChild(phoneContainer);
}