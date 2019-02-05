function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var parsed = parseInt(n,10);
  return (parsed + document.querySelectorAll('.ranked-list'));
}
