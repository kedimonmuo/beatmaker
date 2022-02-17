window.addEventListener("load",  function () {
        const audios = document.querySelectorAll(".beat");
        const pads = document.querySelectorAll(".pads div");

    // how to make audios function
pads.forEach ((pad, index) => {
    pad.addEventListener("click", function () {
    audios[index].play();
            
            });

        });
    });
    

console.log("audio");
