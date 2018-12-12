//= require ./all_nosearch
//= require ./app/_search

window.onload = function myFunction() {
		var display_none = document.getElementById("create-address").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
		document.getElementById("create-address").nextElementSibling.nextElementSibling.nextElementSibling.addEventListener("click", function(){
		var x = document.getElementById("create-address").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	})
};