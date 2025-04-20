import { senators } from '../data/senators.js';
console.log(senators);

// HTML element references
const myNavigation = document.querySelector('.nav');
const cardParent = document.querySelector('#allcards');

// Button: All Senators
const btnAll = document.createElement("button");
btnAll.textContent = "All Senators";
btnAll.addEventListener('click', () => displaySenator(senators));

// Button: Female Senators
const btnFemale = document.createElement("button");
btnFemale.textContent = "Females";
btnFemale.addEventListener("click", () => {
  const arrayFemale = senators.filter(senator => senator.gender === 'female');
  displaySenator(arrayFemale);
});

// Button: Male Senators
const btnMale = document.createElement("button");
btnMale.textContent = "Males";
btnMale.addEventListener("click", () => {
  const arrayMale = senators.filter(senator => senator.gender === 'male');
  displaySenator(arrayMale);
});

// Add buttons to the navigation
myNavigation.appendChild(btnAll);
myNavigation.appendChild(btnFemale);
myNavigation.appendChild(btnMale);

// Function to display senators
function displaySenator(senatorArray) {
  cardParent.innerHTML = ""; // Clear current cards

  senatorArray.forEach(senator => {
    const myFigure = document.createElement('figure');

    // Create Image
    const explodedArray = senator.url.split('/');
    const charNumber = explodedArray[5];
    const myImage = document.createElement('img');
    myImage.src = `https://www.govtrack.us/static/legislator-photos/${charNumber}-200px.jpeg`;
    myImage.alt = senator.name;

    // Create Caption
    const myCaption = document.createElement('figcaption');
    myCaption.textContent = senator.name;

    // Gender class
    switch (senator.gender) {
      case "female":
        myFigure.className = "female";
        break;
      case "male":
        myFigure.className = "male";
        break;
      default:
        myFigure.className = "other";
    }

    // Assemble figure
    myFigure.appendChild(myImage);
    myFigure.appendChild(myCaption);
    cardParent.appendChild(myFigure);
  });
}

// Display all on page load
displaySenator(senators);
