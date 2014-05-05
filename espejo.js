window.addEventListener("DOMContentLoaded", function() {
		var canvas = document.getElementById("canvas");
		var video = document.getElementById("video");
		var videoConstraint = {
		"video": true
		};
		var errBack = function(error) {
		// TODO: Replace video by error.
		console.log("Video error: ", error.name);
		};

		// Put video listeners into place
		if (navigator.getUserMedia) { // Standard
		navigator.getUserMedia(videoConstraint, function(stream) {
			video.src = stream;
			video.play();
			}, errBack);
		} else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia(videoConstraint, function(stream) {
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
			}, errBack);
		} else if (navigator.mozGetUserMedia) { // Firefox-prefixed
			navigator.mozGetUserMedia(videoConstraint, function(stream) {
					video.src = window.URL.createObjectURL(stream);
					video.play();
					}, errBack);
		}
}, false);

function getCheckedRadioId(name) {
    var elements = document.getElementsByName(name);

    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[i].checked) return elements[i].value;
}


function refreshSize() {
  var h=480;
  var w=640;
  switch(getCheckedRadioId("optionSize")){
    case "small":
      h=300;
      w=400;
      break;
    case "medium":
      h=480;
      w=640;
      break;
    case "large":
      h=600;
      w=800;
      break
  }
  var video = document.getElementById("video");
  video.height=h;
  video.width=w;
};

function goMessage() {
  // Call this function again every T milli seconds;
  var T = 10 * 1000;
  //setTimeout("goMessage()", T);
  // Randomly select text
  var messages = [
    "Tú, mi reina, eres la más bella de todas.",
    "Tú, mi reina, eres la más bella de todas."];
  var index = Math.floor(Math.random() * messages.length);
  var message = messages[index];
  // Change text
  document.getElementById("mensaje").innerHTML = message;
};

var elements = document.getElementsByName("optionSize");
for (var i=0, len=elements.length; i<len; ++i) {
  e = elements[i];
  e.addEventListener("change", function() {
		refreshSize();
		});
}

refreshSize();

goMessage();
