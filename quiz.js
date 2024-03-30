let score = 0;
let questionNumber = 0;

const scoreboard = document.getElementById('scoreboard');
const quizArea = document.getElementById('question-area');
const question = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const correctSfx = document.getElementById('correct-sound');
const wrongSfx = document.getElementById('wrong-sound');
const victorySong = document.getElementById('victory-sound');
const loseSong = document.getElementById('lose-sound');
const muteBtn = document.getElementById('mute-btn');
const backgroundSong = document.getElementById('background-song');
const gangham = document.querySelector('.gangham');
const workHard = document.getElementById('work');
const addNameMenu = document.getElementById('name-menu');
const nameInput = document.getElementById('name');
const nameSubmitBtn = document.getElementById('submit-btn');

const show = (element) => {
  element.classList.remove('hidden');
};

const hide = (element) => {
  element.classList.add('hidden');
};


const questions = [
  "Q1. What is a Computer?",
  "Q2. Which of these devices is used to point at things on the monitor?",
  "Q3. What does GB stand for in the world of computers?",
  "Q4. Which of these devices cannot be carried around?",
  "Q5. Which of these computer devices runs on a battery?",
  "Q6. Which one of these is the smallest computer?",
  "Q7. Which of this is a painting software?",
  "Q8. What does the CPU in a computer stand for?",
  "Q9. Which one of these components stores data in a computer?",
  "Q10. What is the name of the device used to type letters and numbers on a document on the computer?",
  "Q11. What is the component that helps us hear the audio output from a computer?",
  "Q12. Which of these devices is responsible for displaying output in a computer?",
  "Q13. Which of these computer components looks like a known animal?",
  "Q14. Which of these does not have a keyboard?",
  "Q15. What does a Printer do?",
  "Q16. Which one of the following components is known as the brain of a computer?",
  "Q17. Which one of these devices is used to scan pictures and documents?",
  "Q18. Which one of these components do we use to give audio inputs to a computer?",
  "Q19. Which one of these keys works as an eraser?",
  "Q20. Which one of these components gives electric power to run a desktop computer?",
  "null",
];

const multipleChoices = [choiceA, choiceB, choiceC, choiceD];

const correctAnswer = [choiceA, choiceC, choiceA, choiceA, choiceD, choiceC, choiceA, choiceC, choiceB, choiceD, choiceC, choiceB, choiceB, choiceB, choiceC, choiceA, choiceB, choiceC, choiceB, choiceB];

const choices = [
  {
    A: "An electronic device used for several functions",
    B: "A device used to point at things on the monitor",
    C: "A device used to type letters and numbers on a document on the computer",
    D: "A device used to store data in a computer",
  },
  {
    A: "CPU",
    B: "Keyboard",
    C: "Mouse",
    D: "Speakers",
  },
  {
    A: "Gigabyte",
    B: "Game boy",
    C: "General Business",
    D: "Speakers",
  },
  {
    A: "Desktop computer",
    B: "Smartphone",
    C: "Tablets",
    D: "Laptops",
  },
  {
    A: "Desktop computer",
    B: "Laptop",
    C: "Tablet",
    D: "Both b and c",
  },
  {
    A: "Mainframe computer",
    B: "Laptop",
    C: "Tablet",
    D: "Desktop computer",
  },
  {
    A: "MS Paint",
    B: "MS Excel",
    C: "MS Word",
    D: "None of the above",
  },
  {
    A: "Control Processing Unit",
    B: "Call Processing Unit",
    C: "Central Processing Unit",
    D: "Copy Processing Unit",
  },
  {
    A: "Monitor",
    B: "Hard disk",
    C: "Keyboard",
    D: "Mouse",
  },
  {
    A: "Motherboard",
    B: "Monitor",
    C: "Random Access Memory",
    D: "Keyboard",
  },
  {
    A: "Monitor",
    B: "USB",
    C: "Speakers",
    D: "Hard disk",
  },
  {
    A: "CD Rom",
    B: "Monitor",
    C: "Speakers",
    D: "Keyboard",
  },
  {
    A: "Keyboard",
    B: "Mouse",
    C: "Printer",
    D: "Monitor",
  },
  {
    A: "Laptop",
    B: "Tablet",
    C: "Desktop Computer",
    D: "All of the above",
  },
  {
    A: "Display images and text",
    B: "Play audio and video",
    C: "Print images and text on paper",
    D: "Produce sound for audio",
  },
  {
    A: "CPU",
    B: "Monitor",
    C: "Keyboard",
    D: "Hard disk",
  },
   {
    A: "Printer",
    B: "Scanner",
    C: "Monitor",
    D: "Keyboard",
  },
  {
    A: "Headphone",
    B: "Speaker",
    C: "Microphone",
    D: "Telephone",
  },
  {
    A: "Shift Key",
    B: "Backspace Key",
    C: "Escape Key",
    D: "Arrow Key",
  },
  {
    A: "Batteries",
    B: "Power Supply Unit",
    C: "Motherboard",
    D: "CPU",
  },
  {
    A: "Monitor",
    B: "USB",
    C: "Speakers",
    D: "Hard disk",
  },
];


const updateQuestion = (currentQuestionIndex) => {
  question.innerHTML = questions[currentQuestionIndex];
  choiceA.innerHTML = `A: ${choices[currentQuestionIndex].A}`;
  choiceB.innerHTML = `B: ${choices[currentQuestionIndex].B}`;
  choiceC.innerHTML = `C: ${choices[currentQuestionIndex].C}`;
  choiceD.innerHTML = `D: ${choices[currentQuestionIndex].D}`;
  scoreboard.innerHTML =`Score : ${score}`;
  questionNumber++;
  choiceA.classList.remove('correct', 'wrong');
  choiceB.classList.remove('correct', 'wrong');
  choiceC.classList.remove('correct', 'wrong');
  choiceD.classList.remove('correct', 'wrong');
  choiceA.disabled = false;
  choiceB.disabled = false;
  choiceC.disabled = false;
  choiceD.disabled = false;
  if (questionNumber === questions.length && score >= 50) {
    hide(quizArea);
    show(gangham);
    backgroundSong.muted = true;
    victorySong.play();
  } else if (questionNumber === questions.length && score <= 50) {
    hide(quizArea);
    show(workHard);
    backgroundSong.muted = true;
    loseSong.play();
  };
};
const nextQuestion = () => {
  if(questionNumber > 0) {
    setTimeout(function() {updateQuestion(questionNumber)}, 1000 );
} else {
  questionNumber = 0;
  updateQuestion(questionNumber);
}
  
};

const save = () => {
  localStorage.setItem(nameInput.value, score);
};




const answerChecker = (selectedAnswer) => {
  if (selectedAnswer === correctAnswer[questionNumber - 1]) {
    correctSfx.play();
    score += 5;
    selectedAnswer.classList.add('correct');
  } else {
    wrongSfx.play();
    selectedAnswer.classList.add('wrong');
  }
  nextQuestion();
};



muteBtn.addEventListener('click', () => {
  backgroundSong.muted = !backgroundSong.muted;
  muteBtn.innerHTML = backgroundSong.muted ? 'unmute' : 'mute';
});


choiceA.addEventListener('click', () => {
  answerChecker(choiceA);
  choiceA.disabled = true;
  choiceB.disabled = true;
  choiceC.disabled = true;
  choiceD.disabled = true;
});

choiceB.addEventListener('click', () => {
  answerChecker(choiceB);
  choiceA.disabled = true;
  choiceB.disabled = true;
  choiceC.disabled = true;
  choiceD.disabled = true;
});

choiceC.addEventListener('click', () => {
  answerChecker(choiceC);
  choiceA.disabled = true;
  choiceB.disabled = true;
  choiceC.disabled = true;
  choiceD.disabled = true;
});

choiceD.addEventListener('click', () => {
  answerChecker(choiceD);
  choiceA.disabled = true;
  choiceB.disabled = true;
  choiceC.disabled = true;
  choiceD.disabled = true;
});

victorySong.addEventListener('ended' , () => {
  show(addNameMenu);
  hide(gangham);
});

loseSong.addEventListener('ended' , () => {
  show(addNameMenu);
  hide(workHard);
});

nameSubmitBtn.addEventListener('click', () => {
  save();
  hide(addNameMenu);
  setTimeout(function(){window.open('menu.html', '_self')}, 5000);
});

nextQuestion();
