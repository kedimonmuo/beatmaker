window.addEventListener("load",  () => {
    const sounds = document.querySelectorAll ("beat");
    const pads = document.querySelectorAll(".pads div");

// how to make audios function
    pads.forEach(pad, index) =>  {
        pad.addEventListener ("click", function() {
            sounds[index].play();
        });
        
    });
});