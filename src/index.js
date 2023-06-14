const filter = document.querySelectorAll('.fil');

filter.forEach(fil => {
  fil.addEventListener('click', filChan);
  function filChan(e){
    filter.forEach(fil => {
      fil.classList.remove('active');
    });
    fil.classList.add('active');
  }
});
