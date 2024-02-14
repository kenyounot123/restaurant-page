// import homeSection from "./home";
import contactSection from './contact'
import homeSection from './home'
import menuSection from './menu'
import './styles/style.css'
const content = document.getElementById('content')
const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
const contactBtn = document.querySelector("#contact-btn")

homeSection()

homeBtn.addEventListener('click', () => {
  content.innerHTML = ' '
  homeSection()
})
menuBtn.addEventListener('click', () => {
  content.innerHTML = ' '
  menuSection()
})
contactBtn.addEventListener('click', () => {
  content.innerHTML = ' '
  contactSection()
})