$('.editor-sildeshow').click(function(){

	console.log("click");
	var img_src = $(this).find('img').attr('src');
	var title = $(this).find('div.slide-title').html();
	var subtitle = $(this).find('div.slide-subtitle').html();
	console.log(img_src);
	console.log(title);
	console.log(subtitle);
});
