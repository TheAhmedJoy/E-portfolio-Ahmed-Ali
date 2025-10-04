//Globals
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

//Dark mode toggle on/off visbility
function toggleContrast() {
    contrastToggle = !contrastToggle

    if (contrastToggle) {
        document.body.classList += " dark-mode"
    }
    else {
        document.body.classList.remove("dark-mode")
    }
}

//Modal toggle on/off visbility
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }

    isModalOpen = true;

    document.body.classList += " modal--open"
}

//EmailJS API Integration
function contact() {
    event.preventDefault()

    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")

    loading.classList += " modal__overlay--visibility"

    emailjs.sendForm("service_hamp0h9", 
         "template_009j7mb", 
         event.target, 
         "xBegXEPiDBRjw66NZ"
    ).then(() => {
        loading.classList.remove("modal__overlay--visibility")
        success.classList += " modal__overlay--visibility"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visibility")
        alert("The email service is temporarily unavailable. Please contact me directly at TheAhmedJoyAli@gmail.com")
    })
}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const invertInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * invertInteger}px, ${y * invertInteger}px)`
    }
}