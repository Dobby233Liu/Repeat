window.night = false;
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
	}else{
		document.querySelector("#clogo").src = "./repeat.png"
		document.body.style.backgroundColor = "#FFF";
		document.querySelector("textarea").style.backgroundColor = "#FFF";
		document.body.style.color = "#333";
		document.querySelector("textarea").style.color = "#333";
		// h1, h2 = #34495E
		document.querySelector("h1").style.color = "#34495E";
		document.querySelector("h2").style.color = "#34495E";
	}
}