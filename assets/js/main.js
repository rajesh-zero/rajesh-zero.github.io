const maincards = document.querySelector(".maincards");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

maincards.addEventListener("click", function (event) {
    if (event.target.tagName.toLowerCase() == "button") {
        const item = event.target.parentElement.parentElement;
        console.log(item)
        const title = item.querySelector(".project-title").innerHTML;
        console.log(title)
        const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
        popup.querySelector("h3").innerHTML = title;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;
        popupBox();
    }

})


popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function (event) {
    if (event.target == popup) {
        popupBox();
    }
})

function popupBox() {
    popup.classList.toggle("open");
}