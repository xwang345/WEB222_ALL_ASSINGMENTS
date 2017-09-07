// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

function renderAudio(node, audioSource) {
    var index = 0;
    var content = "";
    var controls;
    for(index = 0; index < audioSource.source.length; index++) {
    	content += "<source src='" + audioSource.source[index].src + "'" + "type='" + audioSource.source[index].type + "'>"
    }
    if (audioSource.controls) {
    	controls = " controls";
    } else {
    	controls = "";
    }

    content = "<audio" + controls + ">" + content +"</audio>";
    node.innerHTML = content;
}

function init() {
	var audioContainer = document.getElementById("audioContainer");
	renderAudio(audioContainer, audio);
}

window.onload = function() {
	init();
}