// Inject the payload.js script into the current tab after the popout has loaded



window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	message = message.replace(/#/g, '_');
	console.log("Hit Message");
	if (message.length == 0) {
		document.getElementById('pagetitle').innerHTML = "Page formatted Incorrectly, no text detected"
	}
	else {
		document.getElementById('pagetitle').innerHTML = message;
		const http = new XMLHttpRequest();
		http.open('POST', 'http://127.0.0.1:5002/post-text?book-text=', /*async=*/true)
		
		http.setRequestHeader('Content-type', 'application/json')
		http.send(message);
		http.onload = function () {
			alert("Successfully Sent to UI");
		}
	}
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
		chrome.tabs.create({'url': "http://www.bookshare.org/cms"});
    });
});