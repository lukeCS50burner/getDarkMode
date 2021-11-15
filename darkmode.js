document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";


let media = document.querySelectorAll("video");
 
media.forEach((mediaItem)=>{
	mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
});

media = document.querySelectorAll("img");
 
media.forEach((mediaItem)=>{
	mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
});

media = document.querySelectorAll("picture");
 
media.forEach((mediaItem)=>{
	mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
});

document.body.style.background = #000000
