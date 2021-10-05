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
            tones[2].currentTime = 0;
            tones[2].play();
            createNote();
            break;
        case 'd':
            tones[3].currentTime = 0;
            tones[3].play();
            createNote();
            break;
        case 'e':
            tones[4].currentTime = 0;
            tones[4].play();
            createNote();
            break;
        case 'f':
            tones[5].currentTime = 0;
            tones[5].play();
            createNote();
            break;
        case 'g':
            tones[6].currentTime = 0;
            tones[6].play();
            createNote();
            break;
        case 'h':
            tones[7].currentTime = 0;
            tones[7].play();
            createNote();
            break;
        case 'i':
            tones[8].currentTime = 0;  
            tones[8].play();
            createNote();
            break;
        case 'j':
            tones[9].currentTime = 0;
            tones[9].play();
            createNote();
            break;
        case 'k':
            tones[10].currentTime = 0; 
            tones[10].play();
            createNote();
            break;
        case 'l':
            tones[11].currentTime = 0;  
            tones[11].play();
            createNote();
            break;
        case 'm':
            tones[12].currentTime = 0; 
            tones[12].play();
            createNote();
            break;
        case 'n':
            tones[13].currentTime = 0;  
            tones[13].play();
            createNote();
            break;
        case 'o':
            tones[14].currentTime = 0;  
            tones[14].play();
            createNote();
            break;
        case 'p':
            tones[15].currentTime = 0;  
            tones[15].play();
            createNote();
            break;
        case 'q':
            tones[0].currentTime = 0;             
            tones[0].play();
            createNote();
            break;
        case 'r':
            tones[1].currentTime = 0;              
            tones[1].play();
            createNote();
            break;
        case 's':
            tones[2].currentTime = 0;              
            tones[2].play();
            createNote();
            break;
        case 't':
            tones[3].currentTime = 0;              
            tones[3].play();
            createNote();
            break;
        case 'u':
            tones[4].currentTime = 0;              
            tones[4].play();
            createNote();
            break;
        case 'v':
            tones[5].currentTime = 0;              
            tones[5].play();
            createNote();
            break;
        case 'w':
            tones[6].currentTime = 0;              
            tones[6].play();
            createNote();
            break;
        case 'x':
            tones[7].currentTime = 0;              
            tones[7].play();
            createNote();
            break;
        case 'y':
            tones[8].currentTime = 0;              
            tones[8].play();
            createNote();
            break;
        case 'z':
            tones[9].currentTime = 0;              
            tones[9].play();
            createNote();
            break;
        case ' ':
            tones[0].currentTime = 0;              
            tones[0].play();
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