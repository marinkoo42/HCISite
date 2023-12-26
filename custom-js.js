$(document).ready(function() {
	$("#span-search").click(function() {
		$(this).hide();
		$("#form-search").fadeIn();
	});
});

$(".navbar-nav .nav-link").on("click", function () {
	$(".navbar-nav").find(".active").removeClass("active").removeClass("border-bottom").removeClass("text-success").removeClass("border-success").removeClass("pb-0");
	$(this).addClass("active").addClass("border-bottom").addClass("text-success").addClass("border-success").addClass("pb-0");
});

$(".nav-link, .navbar-brand").click(function (e) {
	e.preventDefault();
	var sectionTo = $(this).attr("href");
	$("body").animate({ scrollTop: ($("body").scrollTop() + $(sectionTo).offset().top) - 60}, 'slow');	
});

// $("body").scroll(function () {
// 	var num = $(".navbar-nav").find(".active");//.attr("href").offset().top;
// 	var sectionTo = $("body").attr();

// 	console.log(sectionTo);
// });
