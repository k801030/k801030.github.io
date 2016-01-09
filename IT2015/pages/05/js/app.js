$(document).ready(function() {
	var tp=1;
	$contents = $("#mf").contents();

    $('#plane').click(function(){
    	$(this).stop();
    	$(this).animate({marginLeft: "200%"}, 200);
    	$(this).hide("slide", { direction: "right" }, "slow")
    	$('#startframe').hide("slide", { direction: "right" },"slow",function(){
    				$('#mainframe').show("slide", { direction: "left" },"slow");
    	});


    $("#1").addClass("selected");
    $("#1").removeClass("menuitem",function(){
    	$(this).animate({backgroundColor: '#1f2a2e',color: "#ffffff"}, 200);
    });


    });
    $('#plane').mouseenter(function() {
    	$(this).stop();
        $(this).animate({marginLeft: "60%"}, 500);
    });
    $('#plane').mouseleave(function() {
    	$(this).stop();
        $(this).animate({marginLeft: "0%"}, 500);
    });
    $(".menuitem").mouseenter(function(){
    	$(this).stop();
        $(this).animate({fontSize: "48px"}, 200);
    });
    $(".menuitem").mouseleave(function(){
    	if(this.className!='selected'){
    		$(this).stop();
        	$(this).animate({fontSize: "40px"}, 200);
        };

    });

    $('.menuitem').click(function(){
    	if(!$(this).hasClass('selected')){
	    	$(this).stop();
	    	$(this).animate({color: "#ffffff",backgroundColor: '#1f2a2e'},100);

	    	tp = $(this).attr('id');
	    	$(".selected").addClass("menuitem",function(){
	    		$(".selected").animate({fontSize: "40px",backgroundColor:"linear-gradient(to right, '#1f2a2e' , '#eee')",opacity:0.4}, 200);
	    		$(".selected").removeClass("selected");

	    	});
	    	$(this).removeClass("menuitem");

	    	$(".menuitem").animate({color: "#333333",backgroundColor: '#eee',opacity:1},100);
	    	$(this).addClass("selected");
	    	var test =  $("#mf").contents().find("#c5").offset().top;
	    	$("#mf").contents().scrollTop($("#mf").contents().find("#c"+tp).offset().top -25 );


    	}
    });


});