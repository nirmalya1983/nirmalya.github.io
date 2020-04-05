$(document).ready(function () {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        //console.log(myObj);
		populateVueData(myObj,stopOnloading)
    }
	};
	xmlhttp.open("GET", "https://nirmalya1983.github.io/nirmalya.github.io/js/result.js", true);
	xmlhttp.send();
})
function populateVueData(datain,callback){
	var example1 = new Vue({
		el: '#data1',
		data: {
		items: datain
		}
	})
	setTimeout(callback,1000)
}
function stopOnloading(){
	$("#onLoading").addClass("d-none");
	$("#BaseCont").removeClass("d-none");
	$("body").addClass("loadnormal");
	$("body").removeClass("loadbg");
}

