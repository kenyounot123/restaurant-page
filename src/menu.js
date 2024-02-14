import './styles/style.css'
import './styles/menu.css'

import fruit from "/src/fruit.png"
import applePie from "/src/apple_pie.png"

const myImages = [fruit, applePie]
const menuItems = ['Fruit Tarts', 'Apple Pies']
const menuDescriptions = [
  "A delectable pastry dessert with a flaky crust, creamy filling, and vibrant fresh fruits, offering a delightful blend of sweet and tangy flavors in every bite. Fruit tarts vary in size starting from $2.50 to $20",
  "A classic dessert featuring a buttery, flaky crust filled with tender slices of apples, gently spiced and baked to golden perfection, evoking warm and comforting memories with every indulgent bite. Apple pies vary in size and go from $10 to $20"
]

function menuSection() {

    const content = document.getElementById('content');

    //Create parent div for menu section
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
  
    // Create title for menu section and append it to its parent
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = "Our Menu"
    menuContainer.appendChild(menuTitle);

    //Create grid layout and append to parent
    const menuGrid = document.createElement('div')
    menuGrid.classList.add('menu-grid')
    //Create grid card for each menu item
    menuItems.forEach((item, index) => {
      //Grid Card
      let menuCard = document.createElement('div')
      menuCard.classList.add('menu-card')
      //Grid title and image
      let menuItem = document.createElement('h3')
      let menuItemImg = document.createElement('img')
      menuItemImg.classList.add('menu-card-img')
      menuItem.classList.add('menu-card-title')
      menuItem.textContent = `${item}`
      menuItemImg.setAttribute('src', myImages[index])
      menuItemImg.setAttribute('alt', `${item}`)
      //Grid text content 
      let menuContent = document.createElement('p')
      menuContent.classList.add('menu-content')
      menuContent.textContent = menuDescriptions[index]





      
      menuCard.appendChild(menuItem)
      menuCard.appendChild(menuItemImg)
      menuCard.appendChild(menuContent)
      menuGrid.appendChild(menuCard)
    })
    menuContainer.appendChild(menuGrid)
    content.appendChild(menuContainer)
}

export default menuSection 