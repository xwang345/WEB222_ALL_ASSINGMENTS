// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

function reusersTables(table, users){
	var index =0,
		content = "";
    var head = "<tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Email</th></tr>";
	content += head;
	for(index = 0; index < users.length; index++){
		content += "<tr><td>" + users[index].first_name + "</td><td>" + users[index].last_name + "</td><td>" + users[index].age + "</td><td>" + "<a href='mailto:" + users[index].email + "'>" + users[index].email + "</a>" + "</td></tr>";
	}
	table.innerHTML += content;
}


function init() {
	var table = document.getElementById("table");
	reusersTables(table,users);
}


window.onload = function() {
	init();
}