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
    const menuItems = ['Fruit Tarts', 'Apple Pies']
    menuItems.forEach((item) => {
      let menuCard = document.createElement('div')
      menuCard.classList.add('menu-card')
      let menuItem = document.createElement('h3')
      menuItem.classList.add('menu-card-title')
      menuItem.textContent = `${item}`




      menuCard.append(menuItem)
      menuGrid.append(menuCard)
    })
    menuContainer.appendChild(menuGrid)
    content.appendChild(menuContainer)
}

export default menuSection 