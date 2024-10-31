const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: 2,
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    answer: 1,
  },
  {
    question: "Which language is primarily used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: 1,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Zinc"],
    answer: 1,
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "4"],
    answer: 1,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Jane Austen", "Ernest Hemingway"],
    answer: 0,
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Rupee", "Dollar"],
    answer: 0,
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["100°C", "50°C", "75°C", "150°C"],
    answer: 0,
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Greyhound"],
    answer: 0,
  },
];

let currentQuestion = 0;
let score = 0;
const options = document.querySelectorAll(".option");

function loadQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.textContent = questions[currentQuestion].question;
  options.forEach((option, index) => {
    option.textContent = questions[currentQuestion].options[index];
    option.style.backgroundColor = "#e0e0e0";
  });
  document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(selectedOption) {
  if (selectedOption === questions[currentQuestion].answer) {
    options[selectedOption].style.backgroundColor = "#81c784";
    score++;
  } else {
    options[selectedOption].style.backgroundColor = "#e57373";
    options[questions[currentQuestion].answer].style.backgroundColor =
      "#81c784";
  }
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("next-btn").style.display = "inline-block";
  options.forEach((option) => (option.style.pointerEvents = "none"));
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(
      ".quiz-container"
    ).innerHTML = `<h2>Your final score is ${score} out of ${questions.length}!</h2>`;
  }
  options.forEach((option) => (option.style.pointerEvents = "auto"));
}

loadQuestion();
