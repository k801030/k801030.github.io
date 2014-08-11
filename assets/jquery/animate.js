// title bar

$('.title-bar').delay(300).animate({ opacity: 1 }, 300);

//
$('.side-nav li').click(function(){
	$('.side-nav li').css({"border-left" : "solid 0px #fff"});
	$(this).css({"border-left" : "solid 2px #039b96"});
});