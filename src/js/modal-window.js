const formModal = document.querySelector(".form-work-together");
const modal = document.querySelector(".modal-form");
const overlay = document.querySelector(".overlay-form");
const buttonClose = document.querySelector(".closeModal");

function closeModal() {
    modal.classList.remove("is-open");
    overlay.classList.remove("is-open");

    formModal.reset(); 
}

buttonClose.addEventListener("click", closeModal);

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") { // клавиша "Esc"
        closeModal();
    }
});

document.querySelector(".overlay-form").addEventListener("click", function(event) {
    if (event.target === overlay) {
        closeModal();
    }
});