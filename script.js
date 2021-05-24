function openSlideMenu(){
  document.getElementById('menu').style.marginLeft = '255px';
  document.getElementById('content').style.marginLeft = '0';
}
function closeSlideMenu(){
  document.getElementById('menu').style.marginLeft = '0';
  document.getElementById('content').style.marginLeft = '0';
}



window.addEventListener ('load', function(){
    var node = this;
     setTimeout(function() {
        const loader = document.querySelector('.loader');
        loader.className += ' hidden';
        console.log(loader);
      }, 2000);
});



function readMoreLess() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read More';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read Less';
    moreText.style.display = 'inline';
  }
}

function readMoreLess2() {
  var dots = document.getElementById('dots2');
  var moreText = document.getElementById('more2');
  var btnText = document.getElementById('myBtn2');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read More';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read Less';
    moreText.style.display = 'inline';
  }
}