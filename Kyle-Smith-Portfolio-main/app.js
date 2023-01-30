const scrollUp = document.querySelector('#scroll-up');

function scrollFunction() {
  if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
    scrollUp.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
  }
}

window.onscroll = function () {
  scrollFunction();
};

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
