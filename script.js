const audio = document.querySelector('audio');
const visual = document.querySelector(".visual");

const tones = [
    'tones/316898__jaz-the-man-2__do.wav',
    'tones/316908__jaz-the-man-2__re.wav',
    'tones/316906__jaz-the-man-2__mi.wav',
    'tones/316904__jaz-the-man-2__fa.wav',
    'tones/316912__jaz-the-man-2__sol.wav',
    'tones/316902__jaz-the-man-2__la.wav',
    'tones/316913__jaz-the-man-2__si.wav',
    'tones/316901__jaz-the-man-2__do-octave.wav',
    'tones/316899__jaz-the-man-2__do-stretched.wav',
    'tones/316909__jaz-the-man-2__re-stretched.wav',
    'tones/316907__jaz-the-man-2__mi-stretched.wav',
    'tones/316905__jaz-the-man-2__fa-stretched.wav',
    'tones/316911__jaz-the-man-2__sol-stretched.wav',
    'tones/316903__jaz-the-man-2__la-stretched.wav',
    'tones/316910__jaz-the-man-2__si-stretched.wav',
    'tones/316900__jaz-the-man-2__do-stretched-octave.wav'
];

window.addEventListener("keydown",(e) => {
    const key = e.key; 

    switch (key) {
        case 'a': 
            audio.currentTime = 0; 
            audio.src = tones[0];
            audio.play();
            createNote();
        case 'b':
            audio.currentTime = 0;  
            audio.src = tones[1];
            audio.play();
            createNote();
            break;
        case 'c':
            audio.currentTime = 0;  
            audio.src = tones[2];
            audio.play();
            createNote();
            break;
        case 'd':
            audio.currentTime = 0;  
            audio.src = tones[3];
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
            audio.currentTime = 0;  
            audio.src = tones[2];
            audio.play();
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


});