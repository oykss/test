let count = 3;
const btnLoadMore = document.querySelector('.load-more');
btnLoadMore.addEventListener('click', e => {
  const listHidden = document.querySelectorAll(
    '.project-list .visually-hidden'
  );
  for (const elem of listHidden) {
    count++;
    if (count > 7) {
      btnLoadMore.classList.add('visually-hidden');
    }
    elem.classList.remove('visually-hidden');
    if (count == 6) {
      return;
    }
  }
});
