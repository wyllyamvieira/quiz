// Header shadow scroll
const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
   if(window.scrollY >= navHeight){
      header.classList.add('scroll')
   }else{
      header.classList.remove('scroll')
   }
})
// Menu hambuguer
const menuBtn = document.querySelector('#menu')
const navLinks = document.querySelector('#nav-links')
menuBtn.addEventListener('click', menuToggle)

function menuToggle(){
   menuBtn.classList.toggle('active')
   menuBtn.classList.toggle('bx-x')
   navLinks.classList.toggle('active')
   header.classList.toggle('active')
}



// scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});


// QUIZZZZZZZ
class questao {
   constructor(text, alternativas, answer) {
     this.text = text;
     this.alternativas = alternativas;
     this.answer = answer;
   }
   isCorrectAnswer(alternativa) {
     return this.answer === alternativa;
   }
 }
 let questaos = [
   new questao("O que é Hipertrofia Muscular?", ["Musculo dos Olhos", "O musculo do apresentador", "NDA(Nenhuma das Alternativas)", "Uma doença neuromuscular"], "NDA(Nenhuma das Alternativas)"),
   new questao("A alimentação influencia na hipertrofia muscular?", ["Não","Talvez", "NDA(Nenhuma das Alternativas)", "Sim"], "Sim"),
   new questao("Quais são os principais exercícios para a hipertrofia?", ["Levantamento de Peso","Comer", "Dormir", "Nadar"], "Levantamento de Peso"),
   new questao("Quais principal objetivo da Hipertrofia Muscular?", ["Almento da Massa Muscular","Cegueira 100%", "Desmaios", "Paixão em excesso"], "Almento da Massa Muscular"),
 
  ];
 
 console.log(questaos);
 
 class Quiz {
   constructor(questaos) {
     this.score = 0;
     this.questaos = questaos;
     this.currentquestaoIndex = 0;
   }
   getCurrentquestao() {
     return this.questaos[this.currentquestaoIndex];
   }
   guess(answer) {
     if (this.getCurrentquestao().isCorrectAnswer(answer)) {
       this.score++;
     }
     this.currentquestaoIndex++;
   }
   hasEnded() {
     return this.currentquestaoIndex >= this.questaos.length;
   }
 }
 
 // Regroup all  functions relative to the App Display
 const display = {
   elementShown: function(id, text) {
     let element = document.getElementById(id);
     element.innerHTML = text;
   },
   endQuiz: function() {
     endQuizHTML = `
       <h1>QUIZ FINALIZADO !</h1>
       <h3> SUA PONTUAÇÃO FOI DE: ${quiz.score} / ${quiz.questaos.length}</h3>`;
     this.elementShown("quiz", endQuizHTML);
   },
   questao: function() {
     this.elementShown("questao", quiz.getCurrentquestao().text);
   },
   alternativas: function() {
     let alternativas = quiz.getCurrentquestao().alternativas;
 
     guessHandler = (id, guess) => {
       document.getElementById(id).onclick = function() {
         quiz.guess(guess);
         quizApp();
       }
     }
     // display alternativas and handle guess
     for(let i = 0; i < alternativas.length; i++) {
       this.elementShown("alternativa" + i, alternativas[i]);
       guessHandler("guess" + i, alternativas[i]);
     }
   },
   progress: function() {
     let currentquestaoNumber = quiz.currentquestaoIndex + 1;
     this.elementShown("progress", "PERGUNTA " + currentquestaoNumber + " DE " + quiz.questaos.length);
   },
 };
 
 // Game logic
 quizApp = () => {
   if (quiz.hasEnded()) {
     display.endQuiz();
   } else {
     display.questao();
     display.alternativas();
     display.progress();
   } 
 }
 // Create Quiz
 let quiz = new Quiz(questaos);
 quizApp();
 
 console.log(quiz);
 
 