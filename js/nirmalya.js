console.log("Here")
$(document).ready(function () {
	console.log("Here")
	$.ajax({
                type: "POST",
                url: "https://api.covid19india.org/data.json" ,
                dataType: "json",
                success: function (result, status, xhr) {
                    console.log(result)
  
                    
                },
                error: function (xhr, status, error) {
                    alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                }
            });
})
