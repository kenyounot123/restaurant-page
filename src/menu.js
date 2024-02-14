import './styles/style.css'
import './styles/menu.css'

import fruit from "/src/fruit.png"
import applePie from "/src/apple_pie.png"

const myImages = [fruit, applePie]
const menuItems = ['Fruit Tarts', 'Apple Pies']

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
      let menuCard = document.createElement('div')
      menuCard.classList.add('menu-card')
      let menuItem = document.createElement('h3')
      let menuItemImg = document.createElement('img')
      menuItemImg.classList.add('menu-card-img')
      menuItem.classList.add('menu-card-title')
      menuItem.textContent = `${item}`
      menuItemImg.setAttribute('src', myImages[index])
      menuItemImg.setAttribute('alt', `${item}`)




      
      menuCard.append(menuItem)
      menuCard.append(menuItemImg)
      menuGrid.append(menuCard)
    })
    menuContainer.appendChild(menuGrid)
    content.appendChild(menuContainer)
}

export default menuSection 