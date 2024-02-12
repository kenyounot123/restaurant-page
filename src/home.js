import './style.css';
function homeSection() {
  const content = document.getElementById('content');
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  const homeTitle = document.createElement('h1');
  homeTitle.classList.add('home-title');
  homeTitle.textContent = "Welcome to Mabs Delights"
  homeContainer.appendChild(homeTitle);

  content.appendChild(homeContainer);
}

export default homeSection;