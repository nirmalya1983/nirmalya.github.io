console.log("Here")

$(document).ready(function () {
	console.log("Here2")
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
    }
	};
	xmlhttp.open("GET", "./js/result.js", true);
	xmlhttp.send();
})
