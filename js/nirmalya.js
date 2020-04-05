console.log("Here")

$(document).ready(function () {
	console.log("Here2")
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
		populateVueData(myObj)
    }
	};
	xmlhttp.open("GET", "https://nirmalya1983.github.io/nirmalya.github.io/js/result.js", true);
	xmlhttp.send();
})
function populateVueData(datain){
	var example1 = new Vue({
		el: '#example-1',
		data: {
		items: datain
		}
	})
}

