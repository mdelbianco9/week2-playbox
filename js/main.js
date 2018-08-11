


// document.getElementById("main").blur(50);

$(".button-1").hover(function() {
  $("body").css("background-color", this.className);
}, function() {
  $("body").css("background-color", "");
})