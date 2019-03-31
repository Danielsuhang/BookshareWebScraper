// Inject the payload.js script into the current tab after the popout has loaded



window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	if (message.length == 0) {
		document.getElementById('pagetitle').innerHTML = "Page formatted Incorrectly, no text detected"
	}
	document.getElementById('pagetitle').innerHTML = message.length > 100 ? "Text successfully fetched (Too long to display)" : message
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
		chrome.tabs.create({'url': "http://www.bookshare.org/cms"});
    });
});

chrome.runtime.onMessage.addListener(function (message) {
	
	//Tried encodingURI
	//Replace all # signs with a different character

	if (message.length > 50	) {
		message = message.replace(/#/g, '_');
		const http = new XMLHttpRequest()
		
		http.open('POST', 'http://127.0.0.1:5002/post-text?book-text=' +
encodeURI(JSON.stringify(message)), true)
		http.setRequestHeader('Content-type', 'application/json')
		http.send(encodeURI(JSON.stringify(message))) // Make sure to stringify
		http.onload = function () {
			alert(http.responseText)
		}
	}
	
});
