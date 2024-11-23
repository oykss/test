import { generationContentList } from './render-projects';
import { renderReviews } from './reviews';

document.addEventListener('DOMContentLoaded', () => {
  generationContentList(0, 2);
  renderReviews();
});
