'use strict';
// All quiz state stays in memory. No cookies, storage or network requests.
const questions = [
  {q:'Pides una pizza con «peperoni» en italiano. ¿Qué ingrediente estás nombrando?', options:['Un embutido picante','Pimientos','Queso de oveja'], correct:1, explanation:'Peperoni es el plural italiano de peperone: pimiento. La palabra inglesa pepperoni se refiere a un embutido.'},
  {q:'¿Qué producto puede respaldar financiación a productores en Credem?', options:['Ruedas de queso DOP','Platos de spaghetti','Porciones de tiramisù'], correct:0, explanation:'Los quesos DOP en maduración pueden servir de garantía para financiar a productores y maduradores.'},
  {q:'¿Qué reconoció la UNESCO en 2017?', options:['Todas las pizzas del mundo','La receta de la carbonara','El arte del pizzaiuolo napolitano'], correct:2, explanation:'Reconoció un oficio, sus saberes y su transmisión entre generaciones como patrimonio cultural inmaterial.'},
  {q:'El tortellino inspirado en el ombligo de Venus es…', options:['Un hecho arqueológico','Una leyenda','Una norma para cocinar'], correct:1, explanation:'Es un relato literario y popular. La versión de Giuseppe Ceri se publicó en 1908; no demuestra el origen del plato.'},
  {q:'¿Qué lleva el lampredotto florentino?', options:['Una parte del estómago bovino','Solo tomate y albahaca','Huevas de pescado secadas'], correct:0, explanation:'El lampredotto se prepara con estómago bovino. Las huevas saladas y secadas son la bottarga.'},
  {q:'¿Qué significa que el cappuccino se asocie al desayuno?', options:['Que está prohibido después de las 12','Que todos lo toman igual','Que es una costumbre con excepciones'], correct:2, explanation:'Es un hábito cultural que varía entre personas y regiones. No hay una hora universal que prohíba pedirlo.'}
];
const el = id => document.getElementById(id);
let current = 0;
let answers = [];
function renderQuestion(focus = true) {
  const question = questions[current];
  el('quiz-progress').textContent = `PREGUNTA ${current + 1} DE ${questions.length}`;
  el('quiz-meter').value = current;
  el('quiz-question').textContent = question.q;
  el('quiz-feedback').textContent = '';
  el('quiz-next').hidden = true;
  el('quiz-next').textContent = current === questions.length - 1 ? 'Ver mi resultado →' : 'Siguiente pregunta →';
  el('quiz-options').replaceChildren();
  question.options.forEach((text,index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = text;
    button.addEventListener('click',() => answer(index),{once:true});
    el('quiz-options').append(button);
  });
  if(focus) el('quiz-question').focus({preventScroll:true});
}
function answer(index) {
  // Guard against repeated input before rendering another question.
  if(answers.length > current) return;
  const question = questions[current];
  answers.push(index);
  [...el('quiz-options').children].forEach((button,i) => {
    button.disabled = true;
    if(i === question.correct) {button.classList.add('correct'); button.textContent += ' ✓ Correcta';}
    if(i === index && i !== question.correct) {button.classList.add('wrong'); button.textContent += ' — Tu respuesta';}
  });
  el('quiz-meter').value = current + 1;
  el('quiz-feedback').textContent = `${index === question.correct ? '¡Esatto!' : 'Una curiosidad más para llevarte.'} ${question.explanation}`;
  el('quiz-next').hidden = false;
}
function showResult() {
  const score = answers.reduce((total,answer,i) => total + Number(answer === questions[i].correct),0);
  el('quiz-game').hidden = true;
  el('quiz-result').hidden = false;
  el('quiz-score').textContent = `${score} de ${questions.length} · ${score >= 5 ? '¡Maestro de la sobremesa!' : score >= 3 ? '¡Paladar explorador!' : '¡Aperitivo de curiosidad!'}`;
  el('quiz-verdict').textContent = score >= 5 ? 'Tu curiosidad se merece un aplauso. Comparte tu dato favorito con alguien en el stand.' : score >= 3 ? 'Ya tienes unas cuantas historias para la mesa. Abre el repaso y descubre las que faltan.' : 'Todo viaje empieza con un primer bocado. Repasa las respuestas y vuelve a probar.';
  el('quiz-review').replaceChildren();
  questions.forEach((question,i) => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = `${answers[i] === question.correct ? '✓' : '↻'} ${i+1}. ${question.q}`;
    const p = document.createElement('p');
    p.textContent = `Tu respuesta: ${question.options[answers[i]]}. Respuesta correcta: ${question.options[question.correct]}. ${question.explanation}`;
    details.append(summary,p);
    el('quiz-review').append(details);
  });
  el('quiz-score').focus({preventScroll:true});
}
el('quiz-next').addEventListener('click',() => {
  if(answers.length !== current + 1) return;
  if(current < questions.length - 1) {current++; renderQuestion();} else showResult();
});
el('quiz-restart').addEventListener('click',() => {
  current = 0; answers = [];
  el('quiz-result').hidden = true;
  el('quiz-game').hidden = false;
  renderQuestion();
});
el('quiz-game').hidden = false;
renderQuestion(false);
