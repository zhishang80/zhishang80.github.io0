//define a entire function for html head to call with window.onload = function(){backGroundSlide();} 
let fnBackGroundSlide = function(id) {
	//set timer for control setIntervl function on and off with clearInterval(timer)
	let timer = null;      
	//set slideIndex for control the number of slides                                      
	let slideIndex = 1;
	//get the div ID for js from html
	slides = document.getElementById(id);
	//set the backgroundSize for fully filling the div
	slides.style.backgroundSize = "100% 100%";
	//set the background image for div
	slides.style.backgroundImage = "url(img/bgp" + slideIndex + ".png)";
	//define the slide function 
	function fnSlide() {
		//assign the timer with inner setInterval function of js for later mouse operating
		timer = setInterval(function() {
				//increase the slide picture number
				slideIndex++;
				//rest the slide picture to number 1
				if (slideIndex > 5) {slideIndex = 1}
				//get the slide pictures
				slides.style.backgroundImage = "url(img/bgp" + slideIndex + ".png)";
				}, 2000); //interval 2000 ms = 2 seconds
	}
	fnSlide(); //call the slide function for execution
	//function() at the right-hand-side for calling the execution
	autoSlides.onmouseover = function () { clearInterval(timer); } //mouse over the div to stop timer for sliding
	autoSlides.onmouseout = function () { fnSlide(); } //mouse out the div for activing slide function again.
}
let fnBackGroundRoll = function(id) {
	//IE normally check
	try{document.execCommand("BackgroundImageCache", false, true);} catch(e){};	
	//get the div ID and ul, li tag name for js from html
	let oDiv = document.getElementById(id);
	let oUl = oDiv.getElementsByTagName('ul')[0];
	let oLi = oDiv.getElementsByTagName('li');
	//reset up the width of div and ul for duplicating the ul with seamless scroll
	oDiv.style.width = oLi[0].offsetWidth * oLi.length + 'px';
	oUl.style.width = oDiv.offsetWidth * 2 + 'px';
	oUl.innerHTML += oUl.innerHTML;

	//set speed valuse to control the rolling speed
	let speed = -6;
	//set rolling function
	let rolling = function() {
		//
		if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
			oUl.style.left = 0 + 'px';
		}
		else if (oUl.offsetLeft > 0) {
			oUl.style.left = -(oUl.offsetWidth / 2) + 'px';
		}
		oUl.style.left = oUl.offsetLeft + speed + 'px';
	}
	//set time speed value to contol the timer
	let timeDelay = 100; //ms unit
	var timer = setInterval(rolling, timeDelay);
	//set mouse event
	oDiv.onmouseover=function() {clearInterval(timer);}
	oDiv.onmouseout=function() {timer=setInterval(rolling, timeDelay);}
}

let ffnBackGroundRoll = function(id) {
	var ul = document.getElementById("id");
    var roll = document.getElementsByClassName("roll")[0];
    for(var i = 0; i <= 3; i++){
        var li = document.createElement("li");
        var child = ul.children[i];
        li.innerHTML = child.innerHTML;
        ul.appendChild(li);
    }
    var timer = null;
    timer = setInterval(autoScroll,1);
    var num = 0;
    function autoScroll() {
        num -= 0.25;
        num <= -1200 ? num = 0 : num;
        ul.style.left = num + "px";
    }
    roll.onmouseover = function () {
        clearInterval(timer);
    }
    roll.onmouseout = function () {
        timer = setInterval(autoScroll,1);
    }
}

