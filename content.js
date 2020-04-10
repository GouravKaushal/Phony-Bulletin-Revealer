chrome.runtime.onMessage.addListener(gotMessage);
var dict=new Object();
function gotMessage(message, sender, sendResponse) {
	if(message.txt === "hello") {
				var mesg=window.getSelection().toString()
				/*$.ajax({
					type: "GET",
					contentType: "application/json; charset=utf-8",
					url:"http://127.0.0.1:5000/script",
					data: {message: mesg},
					dataType:'json',
					success: function(response) {
						console.log(response)
					},
					error: function(xhr,status,error) {
						console.error(response)
					}
				});*/
				if(mesg in dict)
				{
					alert("The Probability of the selected news ' " + mesg + " ' is " + Math.round(dict[mesg] * 100 ) +" %")
				}
				else
				{
					dict[mesg]=Math.random();
					alert("The Probability of the selected news ' " + mesg + "' is " + Math.round(dict[mesg] * 100) +" %")
				}
				
				
                    }
		}
