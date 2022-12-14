/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



/* Menu Show */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/* Menu Close */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Change Background Header */
function scrollHeader(){
  const header = document.getElementById('header')
  // when the scroll is greater than 100 view point height, add the scroll-header class to the header tag
  if(this.scrollY >= 100) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* Swpier Discover */
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 0,
  },
});

/* Video */
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){
  if(videoFile.paused){
    //Play video
    videoFile.play()

    //Change the icon
    videoIcon.classList.add('fa-pause')
    videoIcon.classList.remove('fa-play')
  }
  else{
    //Pause video
    videoFile.pause()

    //Change the icon
    videoIcon.classList.remove('fa-pause')
    videoIcon.classList.add('fa-play')
  }
}

videoButton.addEventListener('click', playPause)

function finalVideo(){
  //Video ends, icon changes
  videoIcon.classList.remove('fa-pause')
  videoIcon.classList.add('fa-play')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)

/* Show scroll up */
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up')
  //when the scroll is higher than 200 viewpoint height, add the show-scroll class to the tag with the scroll-up class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Show scroll section active link */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Dark Light Theme */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})