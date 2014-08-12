// title bar

$('.title-bar-bg').delay(300).animate({ opacity: 1 }, 300);

$('.title-bar h1').delay(300).animate({
	"margin-left" : "-20px"
}, {
  duration: 500
});


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



// 
function switch_button(id){
	$('.switch-list li').removeClass('switch-list-selected');

	$('#'+id).addClass('switch-list-selected');

	$('.switch-block').css({"display":"none"});

	$('#'+id+'-block').show();
	
}


