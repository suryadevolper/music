let playing = document.getElementById("play");
let pausing = document.getElementById("pause");
let time = document.getElementById("pa");
let min = document.getElementById("p");
let count = 0;
let incre = 0;
let a; 
let song = document.getElementById("audio");

function heart() {
    let white = document.getElementById("front");
    let red = document.getElementById("back");

    white.style.display = "none";
    red.style.display = "block";
}


function dislike() {
    let white = document.getElementById("front");
    let red = document.getElementById("back");

    white.style.display = "block";
    red.style.display = "none";
}

function playin() {
    playing.style.display = "block";
    pausing.style.display = "none";

    if (!a) {
        a = setInterval(() => {
            count++;

            if(count >= 60){
                count = 0;
                setInterval(() => {
                    incre++;
                    min.innerText = incre;
                }, 60000);
                
            }

            time.innerText = count;
        }, 1000);
    }
    song.play();
}


function pause() {
    playing.style.display = "none";
    pausing.style.display = "block";

    if (a) {
        clearInterval(a);
        a = null; 
    }

    song.pause();
}


playing.addEventListener('click', () => {
    if (song.paused) {
        play();
    }
});

pausing.addEventListener('click', () => {
    if (!song.paused) {
        pause();
    }
});