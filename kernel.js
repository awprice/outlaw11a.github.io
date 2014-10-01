function blink(){
    $('#cursor').delay(500).fadeTo(100,0).delay(500).fadeTo(100,1, blink);
}

$(window).load(function(){
	blink();
});