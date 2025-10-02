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