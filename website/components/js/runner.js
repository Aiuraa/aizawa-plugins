
const toggler = document.getElementById("toggler");
const copyText = document.getElementById("copy-text");

function initializeMode() {
	const mode = localStorage.getItem("toggle-mode");

	if (mode === "light") {
		toggler.classList.replace("bi-moon-stars-fill", "bi-brightness-high-fill");
		document.body.classList.add("lightmode");
	} else {
		toggler.classList.replace("bi-brightness-high-fill", "bi-moon-stars-fill");
		document.body.classList.remove("lightmode");
	}

	var links = document.getElementsByTagName("a");
	for(var i=0; i < links.length; i++) {
		if(links[i].href) {
			links[i].style.color = mode === "light" ? "#0d1117" : "#ffffff"; 
		}
	}
}

function toggleMode(mode) {
	localStorage.setItem("toggle-mode", mode);

	if (mode === "light") {
		document.body.classList.add("lightmode");
	} else {
		document.body.classList.remove("lightmode");
	}

	// Set the link toggle
	var links = document.getElementsByTagName("a");
	for(var i=0; i < links.length; i++) {
		if(links[i].href) {
			links[i].style.color = mode === "light" ? "#0d1117" : "#ffffff";
			links[i].style.transition = "1.2s";
		}
	}
	document.body.style.transition = "1.2s";
}

// Event listener
toggler.addEventListener('click', function() {
	this.classList.toggle('bi-moon-stars-fill');

	if (this.classList.toggle("bi-brightness-high-fill")) {
		toggleMode("light");
	}
	else {
		toggleMode("dark");
	}
});

function onClickedCopy(e) {
	e.preventDefault();
	navigator.clipboard.writeText(e.target.getAttribute("href")).then(() => {
			var tooltip = document.getElementById("tooltip-copy");
			tooltip.innerHTML = "Copied to clipboard";
	}, () => {
		tooltip.innerHTML = "Failed to copy";
	});
}

function onOutClickedCopy() {
	var tooltip = document.getElementById("tooltip-copy");
	tooltip.innerHTML = "Copy to clipboard";
}

// Initializer call
initializeMode();
