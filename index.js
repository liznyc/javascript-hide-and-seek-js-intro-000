function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var parsed = parseInt(n,10);
  const lis = document
  .querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + parsed);
}
}
