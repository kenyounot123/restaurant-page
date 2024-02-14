// import homeSection from "./home";
import homeSection from './home'
import menuSection from './menu'
import './style.css'
const content = document.getElementById('content')
const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
homeSection()
homeBtn.addEventListener('click', () => {
  content.innerHTML = ' '
  homeSection()
})
menuBtn.addEventListener('click', () => {
  content.innerHTML = ' '
  menuSection()
})