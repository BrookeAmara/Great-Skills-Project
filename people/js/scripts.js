
import{ people } from '../data/people.js'
console.log(people)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/small.css">
  <link rel="stylesheet" href="css/medium.css">
  <link rel="stylesheet" href="css/large.css">
  <title>Star Wars Characters</title>
</head>
<body>
  <header>
    <div class="introText">
      <h1>Star Wars Characters</h1>
      <p>Click the buttons to filter as you please.</p>
    </div>
    <div class="filterButtons"></div>
  </header>
  <main>
    <div class="characterDiv"></div>
  </main>
  <script src="js/scripts.js" type="module"></script>
</body>
</html>


const myNavigation = document.querySelector('nav')
const myParent = document.querySelector('#peopleHere')

function displayPeople (x) {

  x.forEach(person => {
    const myFigure = document.createElement('figure')


    const myImage = document.createElement('img')
   console.log(person.url)
   myImage.src="https://starwars.dgmuvu.com/characters/1.jpg"


    const myCaption = document.createElement('figcaption')
    myCaption.textContent = person.name


    myFigure.appendChild(myImage)
    myFigure.appendChild(myCaption)


    myParent.appendChild

  }

  )
}

displayPeople(people);