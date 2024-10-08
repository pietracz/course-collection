// Listen for messages from the extension
chrome.runtime.onMessage.addListener(msg => {
    console.log('onMessage', msg);
    if ('play' in msg) playAudio(msg.play);
});

// Play sound with access to DOM APIs
function playAudio({ source, volume }) {
    console.log('playAudio', source, volume);
    const audio = new Audio(source);
    audio.volume = volume;
    audio.play();
}