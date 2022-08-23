
// MOBILE MENU
let mobileMenuButton = document.getElementById("mobile-menu-button")
mobileMenuButton.onclick = function (e) {
	let mobileMenu = document.getElementById("mobile-menu")
	mobileMenu.classList.toggle("active")
}

// CHAPTER PAGE - READING
var main = document.getElementById("page-main")
if (main) initTheme()

// CHARACTER BUBBLES
initCharaBubbleInteractions()


function initTheme() {
	let theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "red"
	main.className = theme
	let black = document.getElementById("black")
	black.onclick = function (e) {
		main.className = "black"
		localStorage.setItem("theme", "black")
	}
	let red = document.getElementById("red")
	red.onclick = function (e) {
		main.className = "red"
		localStorage.setItem("theme", "red")
	}
	let white = document.getElementById("white")
	white.onclick = function (e) {
		main.className = "white"
		localStorage.setItem("theme", "white")
	}
}

function initCharaBubbleInteractions() {

	let characterName = document.getElementById("character-name")

	// let charaDisplay = document.getElementById("chara-display")
	let charaImage = document.getElementById("chara-display-image")
	let charaBubbles = document.getElementsByClassName("chara-bubble")
	let charaSmallDesc = document.getElementById("home-chara-desc")

	for (let i = 0; i < charaBubbles.length; i++) {
		let bubble = charaBubbles[i];
		bubble.onclick = function (e) {
			let bubbleStyle = window.getComputedStyle(bubble, false)
			let newImage = bubbleStyle.backgroundImage.slice(4, -1).replace(/"/g, "")
			charaImage.src = newImage
			characterName.innerHTML = getCharacterNameByFilename(charaImage.src)
			if (charaSmallDesc) {
				charaSmallDesc.innerHTML = getCharacterSmallDescByFilename(charaImage.src)
			}
		}
	}
}

function getCharacterNameByFilename(filename="") {
	let name = ""
	if (filename.includes("OC01") ) {
		name = "Ansel"
	} else if (filename.includes("OC02")) {
		name = "Swordsman"
	} else if (filename.includes("OC03")) {
		name = "General"
	} else if (filename.includes("OC04")) {
		name = "Terrorist"
	}

	return name
}

function getCharacterSmallDescByFilename(filename="") {
	let description = ""
	if (filename.includes("OC01") ) {
		description = "The main protagonist of the story<"
	} else if (filename.includes("OC02")) {
		description = "A sowrdsman with mysterious powers..."
	} else if (filename.includes("OC03")) {
		description = "One of the Great Generals of the Brotherhood"
	} else if (filename.includes("OC04")) {
		description = "A threatful warrior who has an eye on Ansel..."
	}

	return description
}