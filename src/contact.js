import './styles/style.css'
import './styles/contact.css'




function contactSection() {
    const content = document.getElementById('content');

    //Create parent div for contact section
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
  
    // Create title for contact section and append it to its parent
    const contactTitle = document.createElement('h1');
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = "Contacts"
    contactContainer.appendChild(contactTitle);

    //Create hours section
    const hoursContainer = document.createElement('div')
    hoursContainer.classList.add('hours-container')

    const hoursTitle = document.createElement('h2')
    hoursTitle.classList.add('hours-title')
    hoursTitle.textContent = 'Hours'
    hoursContainer.appendChild(hoursTitle)

    const hoursList = document.createElement('ul');
    hoursList.classList.add('hours-list');
    // Array of hours data
    const hoursData = [
      'Monday: 9am - 5pm',
      'Tuesday: 9am - 5pm',
      'Wednesday: 9am - 5pm',
      'Thursday: 9am - 5pm',
      'Friday: 9am - 5pm',
      'Saturday: 10am - 3pm',
      'Sunday: Closed'
    ];
    hoursData.forEach(hour => {
      const hoursItem = document.createElement('li');
      hoursItem.classList.add('hours-item')
      hoursItem.textContent = hour
      hoursList.appendChild(hoursItem)
    })
    hoursContainer.appendChild(hoursList)

    //Create socials section
    const socialsContainer = document.createElement('div')
    socialsContainer.classList.add('socials-container')

    const socialsTitle = document.createElement('h2')
    socialsTitle.classList.add('socials-title')
    socialsTitle.textContent = 'Socials'
    socialsContainer.appendChild(socialsTitle)

    const socialsList = document.createElement('ul');
    socialsList.classList.add('socials-list');
    // Array of socials data
    const socialsData = [
      'Follow us on Instagram!',
      'Follow us on Facebook!',
      'Follow us on TikTok!',
      'Email us at randomemail@gmail.com',
    ];
    socialsData.forEach(social => {
      const socialsItem = document.createElement('li');
      socialsItem.classList.add('socials-item')
      socialsItem.textContent = social
      socialsList.appendChild(socialsItem)
    })
    socialsContainer.appendChild(socialsList)
    //Add social icons

    contactContainer.appendChild(hoursContainer)
    contactContainer.appendChild(socialsContainer)
    content.appendChild(contactContainer)
}
export default contactSection;