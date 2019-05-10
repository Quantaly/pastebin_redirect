(function() {
	
	let url = window.location.href;
	let hashIndex = window.location.href.indexOf("#");
	if (hashIndex < 1) return;

	let pasteId = window.location.href.substring(hashIndex + 1);
	console.log(`https://pastebin.com/raw/${pasteId}`);
	fetch(`https://cors-anywhere.herokuapp.com/pastebin.com/raw/${pasteId}`).then(function(response) {
		response.text().then(function(url) {
			window.location.replace(url);
		});
	});
	
})()