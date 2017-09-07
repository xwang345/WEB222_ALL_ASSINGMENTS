// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

function renderOrderList(node, array) {
    var index = 0,
        content = "";
        for(index = 0; index < array.length; index++) {
            content += "<li>" + array[index] + "</li>"; 
        }
        node.innerHTML += "<ol>" + content + "</ol>"; 
}

function renderUnorderList(node, array) {
	var index = 0;
	var index1 = 0,
		content = "";
	for(index = 0; index < array.length; index++){
		content += "<li>" + array[index].name + "</li>"
		if(array[index].type == "directory") {
			content1 = "";
			for(index1 = 0; index1< array[index].files.length; index1++){
				content1 += "<li>" + array[index].files[index1].name + "</li>"
			}
			content += "<ol>" + content1 + "</ol>"
		} 
	}
	node.innerHTML += "<ul>" + content + "</ul>"
}

function init() {
	var orderList = document.getElementById("orderList");
	var unorderList = document.getElementById("unorderList");
	renderOrderList(orderList, fruits);
	renderUnorderList(unorderList,directory);
}

window.onload = function() {
	init();
}
