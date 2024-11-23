import data from '/public/data.json';
import { generationContentList } from './render-projects';

let count = 3;
const btnLoadMore = document.querySelector('.load-more');
btnLoadMore.addEventListener('click', addProjects);

function addProjects() {
  let temp = count + 2;

  if (temp >= data.projects.length - 1) {
    btnLoadMore.classList.add('visually-hidden');
    btnLoadMore.removeEventListener('click', addProjects);
    generationContentList(count, data.projects.length - 1);
  } else {
    generationContentList(count, temp);
    count = temp + 1;
  }
}
