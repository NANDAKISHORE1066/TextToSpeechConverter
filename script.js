let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; 

    voiceSelect.innerHTML = ''; 
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option); 
    });
}


window.speechSynthesis.onvoiceschanged = populateVoiceList;


document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    speech.voice = voices[voiceSelect.value]; 
    window.speechSynthesis.speak(speech);
});


populateVoiceList();
