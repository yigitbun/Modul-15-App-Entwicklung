document.addEventListener('gesturestart', gesture);
document.addEventListener('gesturechange', gesture);
document.addEventListener('gestureend', gesture);

function gesture(e) {
  e.preventDefault();
}