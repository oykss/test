const modalWindow = document.querySelector('#modal');
const closeArr = document.querySelectorAll('[data-close-modal]');

export function modalWindowOpen() {
  modalWindow.classList.add('is-open');

  closeArr.forEach(elm => {
    elm.addEventListener('click', modalWindowClose);
    document.addEventListener('keydown', closeEsc);
  });
}

function modalWindowClose() {
  modalWindow.classList.remove('is-open');
  document.body.style.overflow = '';

  closeArr.forEach(elm => {
    elm.removeEventListener('click', modalWindowClose);
    document.removeEventListener('keydown', closeEsc);
  });
}

function closeEsc(e) {
  if (e.key === 'Escape') modalWindowClose();
}
