const tones = document.querySelectorAll('audio');
const visual = document.querySelector(".visual");

window.addEventListener("keydown",(e) => {
    const key = e.key;

    tones.forEach((tone, i) => {
       switch (key) {

        case 'a': 
            tones[0].currentTime = 0;
            tones[0].play();
            createNote();
            break;
        case 'b':
            tones[1].currentTime = 0;
            tones[1].play();
            createNote();
            break;
        case 'c':
            tones[1].currentTime = 0;
            tones[1].play();
            createNote();
            break;
        case 'd':
            tones[1].currentTime = 0;
            tones[1].play();
            audio.play();
            createNote();
            break;
        case 'e':
            audio.currentTime = 0;  
            audio.src = tones[4];
            audio.play();
            createNote();
            break;
        case 'f':
            audio.currentTime = 0;  
            audio.src = tones[5];
            audio.play();
            createNote();
            break;
        case 'g':
            audio.currentTime = 0;  
            audio.src = tones[6];
            audio.play();
            createNote();
            break;
        case 'h':
            audio.currentTime = 0;  
            audio.src = tones[7];
            audio.play();
            createNote();
            break;
        case 'i':
            audio.src = tones[8];
            audio.play();
            createNote();
            audio.currentTime = 0;  
            break;
        case 'j':
            audio.currentTime = 0;  
            audio.src = tones[9];
            audio.play();
            createNote();
            break;
        case 'k':
            audio.currentTime = 0;  
            audio.src = tones[10];
            audio.play();
            createNote();
            break;
        case 'l':
            audio.currentTime = 0;  
            audio.src = tones[11];
            audio.play();
            createNote();
            break;
        case 'm':
            audio.currentTime = 0;  
            audio.src = tones[12];
            audio.play();
            createNote();
            break;
        case 'n':
            audio.currentTime = 0;  
            audio.src = tones[13];
            audio.play();
            createNote();
            break;
        case 'o':
            audio.currentTime = 0;  
            audio.src = tones[14];
            audio.play();
            createNote();
            break;
        case 'p':
            audio.currentTime = 0;  
            audio.src = tones[15];
            audio.play();
            createNote();
            break;
        case 'q':
            audio.currentTime = 0;  
            audio.src = tones[0];
            audio.play();
            createNote();
            break;
        case 'r':
            audio.currentTime = 0;  
            audio.src = tones[1];
            audio.play();
            createNote();
            break;
        case 's':
                        tones[1].play();
            createNote();
            break;
        case 't':
            audio.currentTime = 0;  
            audio.src = tones[3];
            audio.play();
            createNote();
            break;
        case 'u':
            audio.currentTime = 0;  
            audio.src = tones[4];
            audio.play();
            createNote();
            break;
        case 'v':
            audio.currentTime = 0;  
            audio.src = tones[5];
            audio.play();
            createNote();
            break;
        case 'w':
            audio.currentTime = 0;  
            audio.src = tones[6];
            audio.play();
            createNote();
            break;
        case 'x':
            audio.currentTime = 0;  
            audio.src = tones[7];
            audio.play();
            createNote();
            break;
        case 'y':
            audio.currentTime = 0;  
            audio.src = tones[8];
            audio.play();
            createNote();
            break;
        case 'z':
            audio.currentTime = 0;  
            audio.src = tones[9];
            audio.play();
            createNote();
            break;
       }
    });
});



//create music notes
function createNote() {
    const note = document.createElement('img');
    visual.appendChild(note);
    note.src = './note/music-note-beamed.svg';
    note.style.animation = 'jump 1s ease';
    note.addEventListener('animationend', () => {
        visual.removeChild(note);
    });

};