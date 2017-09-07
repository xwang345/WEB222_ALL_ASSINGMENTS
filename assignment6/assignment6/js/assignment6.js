// set a global httpRequest object
var httpRequest;

// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload = makeRequest(1);



function makeRequest(pageNum) {
	console.log("This is test meassage.");

    // TODO: create a variable "url" to store the request to
	// the current pageNum, ie:
	//
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...
	//
  var url = ["https://reqres.in/api/users?page=1", "https://reqres.in/api/users?page=2",
						 "https://reqres.in/api/users?page=3", "https://reqres.in/api/users?page=4"];

	if (pageNum == 1){
		url = "https://reqres.in/api/users?page=1";
	}else if (pageNum == 2){
		url = "https://reqres.in/api/users?page=2";
	}else if (pageNum == 3) {
		url = "https://reqres.in/api/users?page=3";
	}else if (pageNum == 4) {
		url = "https://reqres.in/api/users?page=4";
	}

	// make an HTTP request object

	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired

	httpRequest.onreadystatechange = showContents;

	// open a asynchronous HTTP (GET) request with the specified url


	httpRequest.open('GET', url, true);

	// send the request

	httpRequest.send(null);
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var i=0;
			document.getElementById("data").innerHTML = "";
			
			for(i=0; i < jsData.data.length; i++){
				var elemTr = document.createElement("tr");
				var elemTd_id = document.createElement("td");
				var elemTd_firstName = document.createElement("td");
				var elemTd_lastName = document.createElement("td");
				var elemTd_img = document.createElement("td");
				var elemImg = document.createElement("img");

				var data_id = document.createTextNode(jsData.data[i].id);
				elemTd_id.appendChild(data_id);

				var data_firstName = document.createTextNode(jsData.data[i].first_name);
				elemTd_firstName.appendChild(data_firstName);

				var data_lastName = document.createTextNode(jsData.data[i].last_name);
				elemTd_lastName.appendChild(data_lastName);

				elemImg.setAttribute("src", jsData.data[i].avatar);
				elemImg.setAttribute("alt", "image can not load.");

				elemTd_img.appendChild(elemImg);
				
				elemTr.appendChild(elemTd_id);
				elemTr.appendChild(elemTd_firstName);
				elemTr.appendChild(elemTd_lastName);
				elemTr.appendChild(elemTd_img);

				document.getElementById("data").appendChild(elemTr);
			}


			// TODO: remove the class "active" from all elements with the class "pgbtn"
            var pgbtnArr = document.getElementsByClassName("pgbtn");
            for(var i = 0; i < pgbtnArr.length; i++) {
                pgbtnArr[i].classList.remove("active");
            }



			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
            var pageNum = jsData.page;
            pgbtnArr[pageNum - 1].classList.add("active");
		} else {
			console.log('There was a problem with the request.');
		}
	}
}
