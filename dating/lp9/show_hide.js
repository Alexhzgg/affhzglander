//-##########################################
	
	//  Show Hide script for landing pages v1.1 by Bajakic Vojislav - ch3d4
	
	//-##########################################

$(document).ready(function(){
	// my code goes here
	
		$("#yes").on('click', function(e){
			e.preventDefault();
			$("#q1").fadeToggle(750).removeClass("show").addClass("hide");
			setTimeout(function() {
				$("#q2").fadeToggle(750).removeClass("hide").addClass("show");
			}, 250);
			$("#one").removeClass("active");
			$("#two").addClass("active");
		});

		$("#no").on('click', function(e){
			e.preventDefault();
			$("#q1").fadeToggle(750).removeClass("show").addClass("hide");
			setTimeout(function() {
				$("#reject").fadeToggle(750).removeClass("hide").addClass("show");
			}, 250);
		});

		$(".button1").on('click', function(e){
			e.preventDefault();
			$("#q2").fadeToggle(750).removeClass("show").addClass("hide");
			setTimeout(function() {
				$("#q3").fadeToggle(750).removeClass("hide").addClass("show");
			}, 800);
			$("#two").removeClass("active");
			$("#three").addClass("active");
		});

		$(".button2").on('click', function(e){
			e.preventDefault();
			$("#q3").fadeToggle(750).removeClass("show").addClass("hide");
			setTimeout(function() {
				$("#preload").fadeToggle(750).removeClass("hide").addClass("show");
			}, 1200);
			setTimeout(function() {
				$("#preload").fadeToggle(750).removeClass("show").addClass("hide");
			}, 5000);
			setTimeout(function() {
				$("#q4").fadeToggle(750).removeClass("hide").addClass("show");
			}, 6000);
			$("#three").removeClass("active");
			setTimeout(function() {
				$("#numbers").fadeToggle(750).removeClass("show").addClass("hide");
			}, 800);
		});
});