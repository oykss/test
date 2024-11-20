const html = document.querySelector('html');
const checkbox = document.querySelectorAll('[name="checkbox-mod"]');

const localStorageMod = localStorage.getItem('theme');
if (localStorageMod) {
  localStorageMod === 'theme-dark'
    ? changes('theme-light', 'theme-dark')
    : changes('theme-dark', 'theme-light');

  checkbox.forEach(e => {
    e.checked = localStorageMod === 'theme-dark';
  });
}

function changes(firstMod, secondMod) {
  html.classList.replace(firstMod, secondMod);
  localStorage.setItem('theme', secondMod);

  checkbox.forEach(e => {
    e.checked = secondMod === 'theme-dark';
  });
}

checkbox.forEach(e => {
  e.addEventListener('change', event => {
    event.target.checked
      ? changes('theme-light', 'theme-dark')
      : changes('theme-dark', 'theme-light');
  });
});
