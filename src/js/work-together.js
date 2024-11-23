import axios from 'axios';
import { modalWindowOpen } from './modal-window';

const form = document.querySelector('#cont-form');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const titleWindow = document.querySelector('#modal .title-modal');
  const messageWindow = document.querySelector('#modal .desc');

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
    modalWindowOpen();
    document.body.style.overflow = 'hidden';

    const { title, message } = response.data;
    titleWindow.innerHTML = title;
    messageWindow.innerHTML = message;
  } catch (error) {
    alert('Failed to submit the form. Try again.');
  }
});
