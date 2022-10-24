const btnHidden = document.querySelector('.btn__hidden');
const boxVisible = document.querySelector('.box__visible');

btnHidden.addEventListener('click', function() {
  
  this.classList.add('btn__hidden--active');

  boxVisible.classList.add('box__visible--active');

});