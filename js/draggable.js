dragula([document.getElementById("elements"), document.getElementById("sandbox")], {
  copy: function (el, source) {
    return source === document.getElementById("elements")
  },
  accepts: function (el, target) {
    return target !== document.getElementById("elements")
  }
});
dragula([document.getElementById('sandbox')], {
  removeOnSpill: true
});

// Hide thing

var formBuilder = document.getElementById("formBuilder");
var welcomeMessage = document.getElementById("jumbotron");
var buttonWelcome = document.getElementById("buttonCreate");

window.onload = function() {
	formBuilder.style.visibility = "hidden";
	welcomeMessage.style.visibility = "visible";
}

buttonWelcome.onclick = function() {
	console.log("show!!");
	formBuilder.style.visibility = "visible";
	welcomeMessage.style.visibility = "hidden"
}