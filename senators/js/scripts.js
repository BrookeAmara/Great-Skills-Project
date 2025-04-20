import { senators } from '../data/senators.js'
console.log(senators)

//establish photograph path
const photoPath = "https://www.govtrack.us/static/legislator-photos/300002-200px.jpeg"
const photoSize = "-200px.jpeg"

//grab references to the HTML stuff
const myNavigation = document.querySelector('.nav');
const cardParent = document.querySelector('#allcards');

//normal button
const btnAll = document.createElement("button")
btnAll.textContent = "All Senators"
btnAll.addEventListener('click',() => displaySenator(senators)
)

//Event Listener for Female Senators
const btnFemale = document.createElement("button")
btnFemale.textContent = "Females"
btnFemale.addEventListener("click",() => {
  const arrayFemale = people.filter(person => person.gender === 'female')
  displayPeople(arrayFemale)
})

//Event Listener for Male Senators
const btnMale = document.createElement("button")
btnMale.textContent = "Males"
btnMale.addEventListener("click",() => {
  const arrayFemale = people.filter(person => person.gender === 'male')
  displayPeople(arrayMale)
})


  // appending child
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)



//append the female, male, other buttons


function displaySenator(x) {
  myParent.innerHTML = ""

  x.forEach(senator => {
    const myFigure = document.createElement('figure')


    const myImage = document.createElement('img')
    //console.log(senator.url)
    const explodedArray = senator.url.split('/')
    //console.log(explodedArray)
    const charNumber = explodedArray[5]
    myImage.src = `https://www.govtrack.us/static/legislator-photos/${charNumber}.jpeg`
    myImage.alt = person.name


    //example link https://starwars.dgmuvu.com/characters/${charNumber}.jpg

    const myCaption = document.createElement('figcaption')
    myCaption.textContent = person.name


    // assign gender class
    console.log(person.gender)
    switch (person.gender) {
      case "female":

        myFigure.className = "female"
        break;
      case "male":
        myFigure.className = "male"
        break;
      default:
        myFigure.className = "other"

    } //end of switch



    // assemble the parts 
    myFigure.appendChild(myImage)
    myFigure.appendChild(myCaption)


    myParent.appendChild(myFigure)

  }

  )
}

displayPeople(senators);