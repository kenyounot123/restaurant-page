import './styles/style.css'
import './styles/home.css'
function homeSection() {
  //Create parent div for home section
  const content = document.getElementById('content');
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  // Create title for home section and append it to its parent
  const homeTitle = document.createElement('h1');
  homeTitle.classList.add('home-title');
  homeTitle.textContent = "Mabs Delights"
  homeContainer.appendChild(homeTitle);

  //Create about section for home page and append it to its parent
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  //Create title and content for about section
  const aboutTitle = document.createElement('h2');
  aboutTitle.classList.add('about-title');
  const aboutContent = document.createElement('p');
  aboutContent.classList.add('about-content');
  aboutTitle.textContent = "About Us";
  aboutContent.textContent = `
  Mabs delight is a heartwarming bakery that is NYC based.
  We have the best baked goods in Brooklyn with some fan favorites being our Fruit tarts and Apple pies. `
  aboutContainer.appendChild(aboutTitle);
  aboutContainer.appendChild(aboutContent);
  homeContainer.appendChild(aboutContainer);

  content.appendChild(homeContainer);
}

export default homeSection;