const picdivs = document.querySelectorAll('.photo');
const quizs = document.querySelectorAll('.quiz-container');

var dragitem = null;

picdivs.forEach((picdiv)=>{
    picdiv.addEventListener('dragstart',()=>{

        dragitem = picdiv;

        picdiv.className += " hold";
        

    setTimeout(()=>{
        picdiv.className = "invisible";
    },0);
    });


    picdiv.addEventListener('dragend',()=>{
        dragitem = null;

        picdiv.className = "photo";
    });
});



quizs.forEach(quiz=>{
    // console.log(quiz)
    quiz.addEventListener('dragenter',()=>{
        quiz.appendChild(dragitem);
    });
});



