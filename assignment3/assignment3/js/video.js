// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};

function renderVideo(node, videoSource) {
    var index = 0;
    var content = "";
    var controls;
    for(index = 0; index < videoSource.source.length; index++) {
    	content += "<source src='" + videoSource.source[index].src + "'" + "type='" + videoSource.source[index].type + "'>"
    }
    if (videoSource.controls) {
    	controls = " controls";
    } else {
    	controls = "";
    }

    content = "<video" + controls + " width='" + videoSource.width + "' height='" + videoSource.height +"'>" + content +"</video>";
    node.innerHTML = content;
}

function init() {
	var videoContainer = document.getElementById("videoContainer");
	renderVideo(videoContainer, video);
}

window.onload = function() {
	init();
}