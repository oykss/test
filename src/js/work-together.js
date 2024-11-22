import axios from 'axios';

const form = document.querySelector('#cont-form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const data = {
    email: form.elements['user-email'].value.trim(),
    comment: form.elements['user-message'].value.trim(),
  };

  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      data
    );

    form.reset();

    const { title, message } = response.data;
    //   виклик функції відкритя модального вікна
  } catch (error) {
    alert('Failed to submit the form. Try again.');
  }
});

// MODAL OPEN
const formModal = document.querySelector(".form-work-together");
const modal = document.querySelector(".modal-form");
const overlay = document.querySelector(".overlay-form");
const buttonOpen = document.querySelector(".openModal");

function openModal(event) {

    if (formModal.checkValidity()) {
        modal.classList.add("is-open");
        overlay.classList.add("is-open");

    event.preventDefault();
    }
}

buttonOpen.addEventListener("click", openModal);