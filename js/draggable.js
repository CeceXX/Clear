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

