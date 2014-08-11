// title bar

$('.title-bar').delay(300).animate({ opacity: 1 }, 300);

//
$('.side-nav li').click(function(){
	$('.side-nav li').css({"border-left" : "solid 0px #fff"});
	$('.side-nav li').find('a').css({"color": "#bbb"});
	
	$(this).css({"border-left" : "solid 2px #039b96"});
	$(this).find('a').css({"color": "#039b96"});
});

$('.side-nav li').hover(function(){
	$(this).find('a').css({"color": "#039b96"});
	},
	function(){
	$(this).find('a').css({"color": ""});
});