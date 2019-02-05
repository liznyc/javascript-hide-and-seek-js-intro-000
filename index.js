function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var parsed = parseInt(n,10);
  const lis = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < lis.length; i++) {
  lis[i].textContent = (i + parsed).toString();
}
}

function deepestChild(){
  const lis = document.getElementById('grand-node')
    .querySelector('div');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString();
  }
}
