const scriptURL = 'https://script.google.com/macros/s/AKfycbxPDXrLh1El5HcpvSnnYa3ITGZPYgllithZvwB8zGfFKOPsIiFg/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        // .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .then(response => successfullySubmitted())
        .catch(error => console.error('Error!', error.message))
})
function successfullySubmitted() {
    document.getElementById("contactForm").setAttribute("style", "display: none;")
    document.getElementById("formSubmitted").setAttribute("style", "display: block;")
}