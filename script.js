//your JS code here. If required.
let audios = [
	"applause",
	"boo",
	"gasp",
	"tada",
	"victory",
	"wrong",
]

let activeAudio = null;

const button = document.getElementsByClassName(".btn");

function playAudio(){
    stopAudio();
	activeAudio.play();
}

function stopAudio(){
	if(activeAudio){
		activeAudio.pause();
    // activeAudio = null;
	}
}

for(let i=0; i<button.length; i++){
	button[i].addEventListener("click", (event) =>{
		let innerText = event.target.innerText;
    
		if(audios.includes(innerText)){

			let audioElement = document.createElement("audio");
			audioElement.src = `https://samplelib.com/lib/preview/mp3/sample-12s.mp3`;
			audioElement.controls = true;
			activeAudio = audioElement;
			playAudio();
		}
    
    else{
      stopAudio();
    }
	})
}