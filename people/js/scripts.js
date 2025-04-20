
import { people } from '../data/people.js'
console.log(people)

const myNavigation = document.querySelector('.nav')
const myParent = document.querySelector('#peopleHere')

//normal button
const btnAll = document.createElement("button")
btnAll.textContent = "All People"
btnAll.addEventListener('click',() => displayPeople(people))



//female button
const btnFemale = document.createElement("button")
btnFemale.textContent = "Females"
btnFemale.addEventListener("click",() => {
  const arrayFemale = people.filter(person => person.gender === 'female')
  displayPeople(arrayFemale)
})

//male button
const btnMale = document.createElement("button")
btnMale.textContent = "Males"
btnMale.addEventListener("click",() => {
  const arrayMale = people.filter(person => person.gender === 'male')
  displayPeople(arrayMale)
})

//Other button
const btnOther = document.createElement("button")
btnOther.textContent = "Other"
btnOther.addEventListener("click",() => {
  const arrayOther = people.filter(person => person.gender != 'male' && person.gender != 'female')
  displayPeople(arrayOther)
})

// appending child
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)
myNavigation.appendChild(btnOther)





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