$(document).ready(function(){
 $(window).scroll(function(){
 	if (this.scrollY > 20){
 		$('.navbar').addClass("sticky");
 	}else{
 		$('.navbar').removeClass("sticky");
 	}
 })
     //  menubar toggle page
     $(window).width(function(){
 	if (this.width > 991){
 		$('body').show(".navbar .menu li a");
 	}
 })

     $('.menu-btn').click(function(){
        $('.navbar .menu').toggle();
    });
});
