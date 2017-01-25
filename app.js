$(document).ready(function() {
    $("div.custom-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.custom-tab>div.custom-tab-content").removeClass("active");
        $("div.custom-tab>div.custom-tab-content").eq(index).addClass("active").trigger('classChange');
    });
    $('.menu_icon').click(function(){

			$('.custom-tab-menu').toggleClass('slide');
			$('.custom-tab-content').toggleClass('custdisable');
			$('.menu_icon').toggleClass('change');
	
		});
   $('div.custom-tab>div.custom-tab-content').on('classChange',function() {
	/* Act on the event */
	
	if($('section.timeline').is(':visible')){
		var a= $('section.timeline').height();
	    var b= $('section.timeline').offset().top;
	    console.log("section :"+a+b);
	    if(a==0)
	    	return;
	    $('section.timeline').parent().height(a+b);
	    console.log('timeline block :'+$('div.timeline_block').height());
	    $('div.timeline_block').parent().height($('div.timeline_block').height() + $('div.timeline_block').offset().top);
	    console.log('tab-content- avtive :'+$('div.custom-tab-content.active').height() );
	    $('div.custom-tab-content.active').parent().height($('div.custom-tab-content.active').height()  + $('div.custom-tab-content.active').offset().top + 10);
	    console.log('custom-tab :'+$('div.custom-tab').height());
	    $('div.custom-tab').parent().height($('div.custom-tab').height()  + $('div.custom-tab').offset().top);
	}
});

    
});