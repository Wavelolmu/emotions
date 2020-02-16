function starterTransition() {
  document.getElementById('transitionBtn1').style.display = 'none';
  document.getElementById('transitionBtn2').style.display = 'none';
  document.getElementById('starterScreen').style.opacity = 0;
  setTimeout(function() { window.location.href = "../html/first_emotion.html"; }, 350);
}
