import {recipes} from "../data/recipes.js"
//console.log(recipes)

//grab the html references
const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')


//nav items 
recipes.forEach(recipes => {
    console.log(recipes)
    const myButton = document.createElement('button')
    myButton.textContent = `${recipes.title}`
    myButton.addEventListener('click', () => showRecipes(recipes))
    myNav.appendChild(myButton)
})

function showRecipes(recipes) {


    let recipesSection = document.createElement ("section")
    let recipesName= document.createElement ("h2")
    let recipesPhoto= document.createElement ("img")
    let recipesPrice = document.createElement ("p")
    let recipesDescription = document.createElement ('p')
    let recipesIngredients = document.createElement ('p')
    let recipesDirections = document.createElement ('p')

    let recipesColorsName = document.createElement('p')
    let recipesColors = document.createElement ("url")
    

    recipesName.textContent = recipes.title
    recipesPhoto.src = `images/${recipes.photo}`
    recipesPhoto.alt = recipes.first
    recipesPrice.textContent = `Price: ${recipes.price}`
    recipesDescription.textContent = `Description: ${recipes.description}`
    recipesIngredients.textContent = `Ingredients: ${recipes.ingredients}`
    recipesDirections.textContent = `Directions: ${recipes.recipesdirections}`

   /* recipes.colors.forEach(grown => {
        console.log(grown)
        let theGrown = document.createElement('li')
        theGrown.textContent = grown
        flowerGrown.appendChild(theGrown)
    })*/

    //assemble the card
    recipesSection.appendChild(recipesName)
    recipesSection.appendChild(recipesPhoto)
    recipesSection.appendChild(recipesPrice)
    recipesSection.appendChild(recipesDescription)
    recipesSection.appendChild(recipesIngredients)
    recipesSection.appendChild(recipesDirections)

   // recipesSection.appendChild(recipesGrown)
    myViewer.textContent = ""
    myViewer.appendChild(recipesSection)

} //end of the functon

    