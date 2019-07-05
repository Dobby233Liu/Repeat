window.night = new Date().getHours() >= 18;
function onLNButPressMn(temp){
	window.night = !window.night;
	if(window.night){
		document.querySelector("#clogo").src = "./repeat-light.png"
		document.body.style.backgroundColor = "#012";
		document.querySelector("textarea").style.backgroundColor = "#012";
		document.body.style.color = "#FFF";
		document.querySelector("textarea").style.color = "#FFF";
		document.querySelector("h1").style.color = "#FFF";
		document.querySelector("h2").style.color = "#FFF";
		document.querySelector("#repeaters").contentWindow.onLNButPressCt(0);
	}else{
		document.querySelector("#clogo").src = "./repeat.png"
		document.body.style.backgroundColor = "#FFF";
		document.querySelector("textarea").style.backgroundColor = "#FFF";
		document.body.style.color = "#333";
		document.querySelector("textarea").style.color = "#333";
		// h1, h2 = #34495E
		document.querySelector("h1").style.color = "#34495E";
		document.querySelector("h2").style.color = "#34495E";
		document.querySelector("#repeaters").contentWindow.onLNButPressCt(0);
	}
}
function onLNButPressCt(temp){
	window.night = !window.night;
	if(window.night){
		document.querySelector("input").style.backgroundColor = "#010";
		document.body.querySelectorAll("div")[0].style.backgroundColor = "#010";
		document.body.querySelectorAll("div")[1].style.color = "#FFF";
		document.body.querySelectorAll("div")[1].style.backgroundColor = "#010";
		document.body.querySelectorAll("div#chat")[0].style.backgroundColor = "#010";
		document.querySelector("input").style.color = "#FFF";
	}else{
		document.querySelector("input").style.backgroundColor = "#FFF";
		document.body.querySelectorAll("div")[0].style.backgroundColor = "#22629E";
		document.body.querySelectorAll("div")[1].style.color = "#333";
		document.body.querySelectorAll("div")[1].style.backgroundColor = "#F0F0F0";
		document.querySelector("input").style.color = "#333";
		document.body.querySelectorAll("div#chat")[0].style.backgroundColor = "#FFF";
	}
}
window.onload = function(){
	if (!window.night) return false;
	if(location.href.includes("embed.html")) {
		onLNButPressCt(0);
	} else {
		onLNButPressMn(0);
	}
	return false;
};
