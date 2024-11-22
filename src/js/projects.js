const btnLoadMore = document.querySelector('#projects .load-more');
let count = 3;

btnLoadMore.addEventListener('click', () => {
  const listHidden = document.querySelectorAll('#projects .visually-hidden');
  if (listHidden.length <= 3) {
    count = listHidden.length;
    btnLoadMore.classList.add('visually-hidden');
  }
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      listHidden[i].classList.remove('visually-hidden');
    }, i * 200);
  }
});
