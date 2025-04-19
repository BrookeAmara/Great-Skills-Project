import {allSenators} from 'https://www.govtrack.us/static/legislator-photos/300002-200px.jpeg'
console.log(allSenators)

//establish photograph path
const photoPath = "https://www.govtrack.us/static/legislator-photos/300002-200px.jpeg"
const photoSize = "-100px.jpeg"

//grab references to the HTML stuff
const myNavigation = document.querySelector('nav');
const cardParent = document.querySelector('#allcards');

//Event Listener for ALL senators
const btnFemale = document.createElement("button")
btnAll.textContent = "All Senators"
btnAll.addEventListener("click",() => {
  const arrayFemale = people.filter(person => person.gender === 'senators')
  displayPeople(arrayAll)
})

//Event Listener for Female Senators
const btnFemale = document.createElement("button")
btnFemale.textContent = "Females"
btnFemale.addEventListener("click",() => {
  const arrayFemale = people.filter(person => person.gender === 'female')
  displayPeople(arrayFemale)
})

//Event Listener for Male Senators
const btnFemale = document.createElement("button")
btnMale.textContent = "Females"
btnMale.addEventListener("click",() => {
  const arrayFemale = people.filter(person => person.gender === 'male')
  displayPeople(arrayMale)
})


  // appending child
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)



//append the female, male, other buttons


function displayPeople(x) {
  myParent.innerHTML = ""

  x.forEach(person => {
    const myFigure = document.createElement('figure')


    const myImage = document.createElement('img')
    //console.log(person.url)
    const explodedArray = person.url.split('/')
    //console.log(explodedArray)
    const charNumber = explodedArray[5]
    myImage.src = `https://starwars.dgmuvu.com/characters/${charNumber}.jpg`
    myImage.alt = person.name


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

displayPeople(people);