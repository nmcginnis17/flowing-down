window.addEventListener("load", function() {
  var count = 10;
  for(var i = 0; i < count; i++) {
    var node = document.createElement("span");
    node.style.marginTop = (i * 2) + "mm";
    node.style.opacity = (i / 100) + .5;
    document.querySelector(".drip").appendChild(node);
  }
});
