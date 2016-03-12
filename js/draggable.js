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

window.onload = function() {
	formBuilder.style.visibility = "hidden";
}

function showFormBuilder() {
	console.log("show!!");
	formBuilder.style.visibility = "visible";
}