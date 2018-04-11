(function () {
  const routes = {
    'button1': element => element.classList.toggle('button-danger'),
    'button2': element => (element.innerText = 'you clicked me!'),
    'button3': element => (element.parentElement.previousElementSibling.firstElementChild.innerText = 'button two')
  };

  document.documentElement.addEventListener('click', e => {
    const element = e.target.closest('[data-module]');
    routes[element.dataset.module](element);
  });
})();
