let count = 3;
const btnLoadMore = document.querySelector('.load-more');
btnLoadMore.addEventListener('click', addProjects);

function addProjects() {
  const listHidden = document.querySelectorAll(
    '.project-list .visually-hidden'
  );

  if (listHidden.length <= 3) {
    count = listHidden.length;
    btnLoadMore.classList.add('visually-hidden');
    btnLoadMore.removeEventListener('click', addProjects);
  }

  for (let i = 0; i < count; i++) {
    listHidden[i].classList.remove('visually-hidden');
  }
}
