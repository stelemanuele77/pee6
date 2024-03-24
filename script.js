function changeColor() {
  var paragraphs = document.getElementsByTagName("p");
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = getRandomColor();
  }
}

function goToLink() {
  window.location.href = "https://openai.com";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
