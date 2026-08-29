const $=selector=>document.querySelector(selector);
const screens=[...document.querySelectorAll('.screen')];
let selectedCount=20,quiz=[],current=0,score=0,answers=[],soundOn=true,audioCtx,pendingAdvance;
const unitNames={
  'IP Addressing':'IP ADDRESSING','OSI & Addressing':'OSI / ADDRESSING',Ethernet:'ETHERNET',
  'Wireless LAN':'WIRELESS LAN','Transmission Media':'TRANSMISSION MEDIA','Protocols & Scenarios':'PROTOCOLS / SCENARIOS'
};

function shuffle(items){const list=[...items];for(let i=list.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[list[i],list[j]]=[list[j],list[i]]}return list}
function show(id){screens.forEach(screen=>screen.classList.toggle('active',screen.id===id));const reviewMode=id==='review-screen';$('#nav-review').classList.toggle('active',reviewMode);$('#nav-quiz').classList.toggle('active',!reviewMode);window.scrollTo({top:0,behavior:'smooth'})}
function tone(success){if(!soundOn)return;audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();const oscillator=audioCtx.createOscillator(),gain=audioCtx.createGain();oscillator.connect(gain);gain.connect(audioCtx.destination);oscillator.type='sine';oscillator.frequency.setValueAtTime(success?520:180,audioCtx.currentTime);if(success)oscillator.frequency.exponentialRampToValueAtTime(780,audioCtx.currentTime+.1);gain.gain.setValueAtTime(.06,audioCtx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+.18);oscillator.start();oscillator.stop(audioCtx.currentTime+.18)}
function prepareQuestion(question){const choices=shuffle(question.options.map((text,index)=>({text,isCorrect:index===question.answer})));return{...question,choices}}
function escapeHtml(value){const element=document.createElement('div');element.textContent=value;return element.innerHTML}

document.querySelectorAll('#count-options button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('#count-options button').forEach(item=>item.classList.remove('selected'));button.classList.add('selected');selectedCount=button.dataset.count==='all'?'all':Number(button.dataset.count)}));
$('#quiz-setup').addEventListener('submit',event=>{event.preventDefault();startQuiz()});

function startQuiz(){
  clearTimeout(pendingAdvance);
  const unit=$('#unit-select').value;
  const pool=unit==='all'?QUESTION_BANK:QUESTION_BANK.filter(question=>question.unit===unit);
  const amount=selectedCount==='all'?pool.length:Math.min(selectedCount,pool.length);
  quiz=shuffle(pool).slice(0,amount).map(prepareQuestion);current=0;score=0;answers=[];
  $('#live-score').textContent='0';show('quiz-screen');renderQuestion();
}
function renderQuestion(){
  const question=quiz[current],percent=Math.round(((current+1)/quiz.length)*100);
  $('#progress-label').textContent=`السؤال ${current+1} من ${quiz.length}`;$('#progress-percent').textContent=`${percent}%`;$('#progress-fill').style.width=`${percent}%`;
  $('#question-number').textContent=String(current+1).padStart(2,'0');$('#unit-badge').textContent=unitNames[question.unit];$('#question-text').textContent=question.question;
  $('#feedback').textContent='';$('#feedback').className='feedback';$('#next-button').disabled=true;$('#next-button').innerHTML=current===quiz.length-1?'عرض النتيجة <b>←</b>':'السؤال التالي <b>←</b>';
  const list=$('#options-list');list.innerHTML='';question.choices.forEach((choice,index)=>{const button=document.createElement('button');button.className='option';button.innerHTML=`<span class="option-letter">${String.fromCharCode(65+index)}</span><span>${escapeHtml(choice.text)}</span>`;button.addEventListener('click',()=>selectAnswer(index));list.appendChild(button)});
}
function selectAnswer(index){
  const question=quiz[current],buttons=[...document.querySelectorAll('.option')];if(buttons.some(button=>button.disabled))return;
  const correctIndex=question.choices.findIndex(choice=>choice.isCorrect),isCorrect=index===correctIndex;
  buttons.forEach((button,choiceIndex)=>{button.disabled=true;if(choiceIndex===correctIndex)button.classList.add('correct');else if(choiceIndex===index)button.classList.add('wrong');else button.classList.add('dimmed')});
  if(isCorrect){score++;$('#live-score').textContent=score;$('#feedback').textContent='✓ إجابة صحيحة — عاش يا بطل!';$('#feedback').classList.add('ok')}else{$('#feedback').textContent=`✕ الإجابة الصحيحة: ${question.choices[correctIndex].text}`;$('#feedback').classList.add('no')}
  answers.push({question:question.question,chosen:question.choices[index].text,correct:question.choices[correctIndex].text,isCorrect});tone(isCorrect);$('#next-button').disabled=false;
  pendingAdvance=setTimeout(advanceQuiz,isCorrect?900:1900);
}
function advanceQuiz(){clearTimeout(pendingAdvance);if(current<quiz.length-1){current++;renderQuestion()}else finishQuiz()}
$('#next-button').addEventListener('click',advanceQuiz);

function finishQuiz(){
  const percent=Math.round(score/quiz.length*100),wrong=quiz.length-score;let title='محتاج لفة كمان',message='راجع أخطاءك وجرّب من جديد — كل محاولة بتفرق.';
  if(percent>=90){title='Network Master! 🔥';message='أنت جاهز جدًا للامتحان. حافظ على تركيزك!'}else if(percent>=75){title='شغل عالي يا مهندس!';message='قريب جدًا من الكمال — راجع الغلطات بس.'}else if(percent>=50){title='ماشي في الطريق الصح';message='الأساس كويس، وضع المراجعة هيثبّت التفاصيل.'}
  const key='data-networks-best',best=Math.max(percent,Number(localStorage.getItem(key)||0));localStorage.setItem(key,best);
  $('#result-percent').textContent=`${percent}%`;$('#result-ring').style.background=`conic-gradient(var(--lime) ${percent}%,rgba(255,255,255,.08) ${percent}%)`;$('#result-title').textContent=title;$('#result-message').textContent=message;$('#correct-count').textContent=score;$('#wrong-count').textContent=wrong;$('#best-score').textContent=`${best}%`;$('#review-count').textContent=wrong?`(${wrong})`:'';
  const review=$('#review-list');review.innerHTML='';answers.filter(answer=>!answer.isCorrect).forEach(answer=>{const item=document.createElement('article');item.className='review-item';item.innerHTML=`<p>${escapeHtml(answer.question)}</p><small>إجابتك: ${escapeHtml(answer.chosen)}</small><br><small>الصحيح: <b>${escapeHtml(answer.correct)}</b></small>`;review.appendChild(item)});$('#review-details').style.display=wrong?'block':'none';show('result-screen');
}

function openReview(){clearTimeout(pendingAdvance);show('review-screen');renderReview()}
function renderReview(){
  const filter=$('#review-filter').value,term=$('#review-search').value.trim().toLowerCase();
  const visible=QUESTION_BANK.filter(question=>(filter==='all'||question.unit===filter)&&(!term||`${question.question} ${question.options.join(' ')} ${question.unit}`.toLowerCase().includes(term)));
  $('#visible-review-count').textContent=visible.length;$('#review-empty').hidden=visible.length>0;
  const bank=$('#review-bank');bank.innerHTML='';visible.forEach((question,index)=>{const card=document.createElement('article');card.className='study-card';const choices=question.options.map((option,choiceIndex)=>`<div class="study-option ${choiceIndex===question.answer?'correct-answer':''}"><b>${String.fromCharCode(65+choiceIndex)}</b><span>${escapeHtml(option)}</span></div>`).join('');card.innerHTML=`<span class="study-card-number">${String(index+1).padStart(2,'0')}</span><span class="study-topic">${escapeHtml(unitNames[question.unit])}</span><h2 class="study-question">${escapeHtml(question.question)}</h2><div class="study-options">${choices}</div>${question.note?`<p class="study-note">💡 ${escapeHtml(question.note)}</p>`:''}`;bank.appendChild(card)});
}

$('#review-filter').addEventListener('change',renderReview);$('#review-search').addEventListener('input',renderReview);$('#nav-review').addEventListener('click',openReview);$('#review-shortcut').addEventListener('click',openReview);$('#review-mistakes-button').addEventListener('click',openReview);
$('#nav-quiz').addEventListener('click',()=>{clearTimeout(pendingAdvance);show('start-screen')});$('#brand-home').addEventListener('click',event=>{event.preventDefault();clearTimeout(pendingAdvance);show('start-screen')});
$('#retry-button').addEventListener('click',startQuiz);$('#home-button').addEventListener('click',()=>{clearTimeout(pendingAdvance);show('start-screen')});$('#exit-button').addEventListener('click',()=>{if(confirm('متأكد إنك عايز تخرج من التحدي؟')){clearTimeout(pendingAdvance);show('start-screen')}});
$('#sound-toggle').addEventListener('click',event=>{soundOn=!soundOn;event.currentTarget.classList.toggle('muted',!soundOn);event.currentTarget.textContent=soundOn?'♪':'×'});
window.addEventListener('keydown',event=>{if(!$('#quiz-screen').classList.contains('active'))return;if(['1','2','3','4'].includes(event.key)&&$('#next-button').disabled)document.querySelectorAll('.option')[Number(event.key)-1]?.click();if(event.key==='Enter'&&!$('#next-button').disabled)advanceQuiz()});

$('#hero-count').textContent=QUESTION_BANK.length;document.querySelector('.question-bank-count').textContent=`${QUESTION_BANK.length} سؤال`;
const invalidQuestions=QUESTION_BANK.filter(question=>!question.question||question.options.length!==4||question.answer<0||question.answer>3||!unitNames[question.unit]);
if(invalidQuestions.length)console.error('Question bank validation failed',invalidQuestions);else console.info(`Data Networks bank loaded and validated: ${QUESTION_BANK.length} questions`);
if(location.hash==='#review')openReview();
