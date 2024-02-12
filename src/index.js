// import homeSection from "./home";
import homeSection from './home'
import './style.css'
const content = document.getElementById('content')
const homeBtn = document.querySelector("#home-btn")
homeBtn.addEventListener('click', () => {
  content.innerHTML = ' '
  homeSection()
})