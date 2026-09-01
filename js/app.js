// ===========================================================================
// INTRODUCTION TO MECHATRONICS (MEC 141) - APPLICATION LOGIC
// Quiz Engine, Study Bank Renderer, Randomizer & Web Audio Synth
// ===========================================================================

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const screens = $$('.screen');

let selectedCount = 20;
let quiz = [];
let current = 0;
let score = 0;
let answers = [];
let soundOn = true;
let audioCtx = null;
let pendingAdvance = null;
let currentReviewType = 'all';

// Unit Labels Helper
function getUnitTitle(unitKey) {
  if (window.UNIT_INFO && window.UNIT_INFO[unitKey]) {
    return window.UNIT_INFO[unitKey].title;
  }
  return unitKey;
}

function getUnitArabic(unitKey) {
  if (window.UNIT_INFO && window.UNIT_INFO[unitKey]) {
    return window.UNIT_INFO[unitKey].arabic;
  }
  return '';
}

// Utility: Fisher-Yates shuffle
function shuffle(items) {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

// Screen navigation
function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  const reviewMode = id === 'review-screen';
  $('#nav-review').classList.toggle('active', reviewMode);
  $('#nav-quiz').classList.toggle('active', !reviewMode);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sound Synthesis via Web Audio API
function playTone(isSuccess) {
  if (!soundOn) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (isSuccess) {
      // Pleasant dual-tone chime (Major 3rd / 5th)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.08); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.16); // G5
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.28);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.28);
    } else {
      // Gentle buzz for incorrect
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, audioCtx.currentTime); // A3
      osc.frequency.exponentialRampToValueAtTime(146.83, audioCtx.currentTime + 0.15); // D3
      gain.gain.setValueAtTime(0.09, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.22);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.22);
    }
  } catch (e) {
    console.warn('Audio play error:', e);
  }
}

// HTML escape helper
function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  const div = document.createElement('div');
  div.textContent = String(value);
  return div.innerHTML;
}

// Prepare question with shuffled choices
function prepareQuestion(question) {
  const choices = shuffle(
    question.options.map((text, index) => ({
      text,
      isCorrect: index === question.answer
    }))
  );
  return { ...question, choices };
}

// Setup Count buttons listener
$$('#count-options button').forEach(button => {
  button.addEventListener('click', () => {
    $$('#count-options button').forEach(item => item.classList.remove('selected'));
    button.classList.add('selected');
    selectedCount = button.dataset.count === 'all' ? 'all' : Number(button.dataset.count);
  });
});

// Setup Form submit
$('#quiz-setup').addEventListener('submit', event => {
  event.preventDefault();
  startQuiz();
});

// Start Quiz logic
function startQuiz() {
  clearTimeout(pendingAdvance);
  const unit = $('#unit-select').value;
  const pool = unit === 'all'
    ? window.QUESTION_BANK
    : window.QUESTION_BANK.filter(q => q.unit === unit);

  if (!pool || pool.length === 0) {
    alert('لا توجد أسئلة متوفرة في هذا القسم حالياً.');
    return;
  }

  const amount = selectedCount === 'all' ? pool.length : Math.min(selectedCount, pool.length);
  quiz = shuffle(pool).slice(0, amount).map(prepareQuestion);
  current = 0;
  score = 0;
  answers = [];

  $('#live-score').textContent = '0';
  showScreen('quiz-screen');
  renderQuestion();
}

// Render current question
function renderQuestion() {
  const question = quiz[current];
  const percent = Math.round(((current + 1) / quiz.length) * 100);

  $('#progress-label').textContent = `السؤال ${current + 1} من ${quiz.length}`;
  $('#progress-percent').textContent = `${percent}%`;
  $('#progress-fill').style.width = `${percent}%`;

  $('#question-number').textContent = String(current + 1).padStart(2, '0');
  $('#question-type-tag').textContent = question.type === 'fill' ? 'Fill-in (أكمل)' : 'MCQ (اختياري)';
  $('#unit-badge').textContent = getUnitTitle(question.unit);
  $('#question-text').textContent = question.question;

  $('#feedback').textContent = '';
  $('#feedback').className = 'feedback';
  $('#next-button').disabled = true;
  $('#next-button').innerHTML = current === quiz.length - 1 ? 'عرض النتيجة الشاملة <b>←</b>' : 'السؤال التالي <b>←</b>';

  const list = $('#options-list');
  list.innerHTML = '';

  question.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.type = 'button';
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-content">${escapeHtml(choice.text)}</span>
    `;
    button.addEventListener('click', () => selectAnswer(index));
    list.appendChild(button);
  });
}

// Handle Answer Selection
function selectAnswer(index) {
  const question = quiz[current];
  const buttons = $$('.option');
  if (buttons.some(button => button.disabled)) return;

  const correctIndex = question.choices.findIndex(choice => choice.isCorrect);
  const isCorrect = index === correctIndex;

  buttons.forEach((button, choiceIndex) => {
    button.disabled = true;
    if (choiceIndex === correctIndex) {
      button.classList.add('correct');
    } else if (choiceIndex === index) {
      button.classList.add('wrong');
    } else {
      button.classList.add('dimmed');
    }
  });

  const correctChoiceText = question.choices[correctIndex].text;
  const chosenText = question.choices[index].text;

  if (isCorrect) {
    score++;
    $('#live-score').textContent = score;
    $('#feedback').innerHTML = `<strong>✓ إجابة صحيحة!</strong> ${question.note ? `<span class="fb-note">${escapeHtml(question.note)}</span>` : 'عاش يا بطل الميكاترونكس!'}`;
    $('#feedback').className = 'feedback ok';
  } else {
    $('#feedback').innerHTML = `<strong>✕ إجابة غير دقيقة</strong> <br>الإجابة الصحيحة: <span class="correct-text-fb">${escapeHtml(correctChoiceText)}</span> ${question.note ? `<br><small class="fb-note">💡 ${escapeHtml(question.note)}</small>` : ''}`;
    $('#feedback').className = 'feedback no';
  }

  answers.push({
    num: current + 1,
    id: question.id,
    question: question.question,
    chosen: chosenText,
    correct: correctChoiceText,
    isCorrect,
    note: question.note || ''
  });

  playTone(isCorrect);
  $('#next-button').disabled = false;
}

// Next question or finish
function advanceQuiz() {
  clearTimeout(pendingAdvance);
  if (current < quiz.length - 1) {
    current++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}
$('#next-button').addEventListener('click', advanceQuiz);

// Finish Quiz & Results
function finishQuiz() {
  const total = quiz.length;
  const percent = Math.round((score / total) * 100);
  const wrong = total - score;

  let title = 'محتاج لفة كمان';
  let message = 'راجع الأسئلة التي أخطأت فيها من بنك المراجعة وجرّب مرة أخرى ✦';

  if (percent >= 90) {
    title = 'Mechatronics Engineer! 🦾🔥';
    message = 'أداء أسطوري ومتقن جداً! أنت جاهز تماماً للامتحان.';
  } else if (percent >= 75) {
    title = 'شغل عالي يا باشمهندس! ⚡';
    message = 'مستوى رائع وقريب جداً من الدرجة الكاملة، راجع النقاط البسيطة فقط.';
  } else if (percent >= 50) {
    title = 'بداية جيدة ومبشرة 👍';
    message = 'الأساسيات واضحة عندك، واستخدام بنك المراجعة هيثبت باقي التفاصيل.';
  }

  const storageKey = 'mec141-best-score';
  const best = Math.max(percent, Number(localStorage.getItem(storageKey) || 0));
  localStorage.setItem(storageKey, best);

  $('#result-percent').textContent = `${percent}%`;
  $('#result-ring').style.background = `conic-gradient(var(--emerald) ${percent}%, rgba(255, 255, 255, 0.08) ${percent}%)`;
  $('#result-title').textContent = title;
  $('#result-message').textContent = message;
  $('#correct-count').textContent = score;
  $('#wrong-count').textContent = wrong;
  $('#best-score').textContent = `${best}%`;
  $('#review-count').textContent = wrong ? `(${wrong})` : '';

  // Render mistakes list
  const reviewList = $('#review-list');
  reviewList.innerHTML = '';
  const wrongAnswers = answers.filter(a => !a.isCorrect);

  if (wrongAnswers.length > 0) {
    wrongAnswers.forEach(item => {
      const card = document.createElement('article');
      card.className = 'review-mistake-card';
      card.innerHTML = `
        <p class="mistake-question"><strong>#${item.num}</strong> ${escapeHtml(item.question)}</p>
        <div class="mistake-comparison">
          <div class="mistake-yours"><span>إجابتك:</span> <del>${escapeHtml(item.chosen)}</del></div>
          <div class="mistake-correct"><span>الإجابة الصحيحة:</span> <b>✓ ${escapeHtml(item.correct)}</b></div>
        </div>
        ${item.note ? `<p class="mistake-note">💡 ${escapeHtml(item.note)}</p>` : ''}
      `;
      reviewList.appendChild(card);
    });
    $('#review-details').style.display = 'block';
  } else {
    $('#review-details').style.display = 'none';
  }

  showScreen('result-screen');
}

// Open Review Bank
function openReview() {
  clearTimeout(pendingAdvance);
  showScreen('review-screen');
  renderReview();
}

// Render Review / Study Bank
function renderReview() {
  const filterUnit = $('#review-filter').value;
  const term = $('#review-search').value.trim().toLowerCase();
  const bank = $('#review-bank');
  bank.innerHTML = '';

  let allItems = [];

  // 1. Gather MCQs & Fill-ins
  if (window.QUESTION_BANK) {
    window.QUESTION_BANK.forEach(q => {
      allItems.push({ ...q, itemCategory: q.type === 'fill' ? 'fill' : 'mcq' });
    });
  }

  // 2. Gather Drawings
  if (window.DRAWING_BANK) {
    window.DRAWING_BANK.forEach(d => {
      allItems.push({ ...d, itemCategory: 'drawing' });
    });
  }

  // Filter by Type Pill
  if (currentReviewType !== 'all') {
    allItems = allItems.filter(item => item.itemCategory === currentReviewType);
  }

  // Filter by Unit Dropdown
  if (filterUnit !== 'all') {
    allItems = allItems.filter(item => item.unit === filterUnit);
  }

  // Filter by Search Term
  if (term) {
    allItems = allItems.filter(item => {
      const qText = item.question || '';
      const opts = item.options ? item.options.join(' ') : '';
      const unit = item.unit || '';
      const unitTitle = getUnitTitle(item.unit) || '';
      const note = item.note || '';
      const title = item.title || '';
      const comps = item.components ? item.components.join(' ') : '';
      const formula = item.formula || '';
      const corr = item.correctText || '';
      const hay = `${qText} ${opts} ${unit} ${unitTitle} ${note} ${title} ${comps} ${formula} ${corr} ${item.id}`.toLowerCase();
      return hay.includes(term);
    });
  }

  $('#visible-review-count').textContent = allItems.length;
  $('#review-empty').hidden = allItems.length > 0;

  allItems.forEach((item, index) => {
    if (item.itemCategory === 'mcq') {
      renderMcqStudyCard(bank, item, index);
    } else if (item.itemCategory === 'fill') {
      renderFillStudyCard(bank, item, index);
    } else if (item.itemCategory === 'drawing') {
      renderDrawingStudyCard(bank, item, index);
    }
  });
}

// Render MCQ Card in Study Bank
function renderMcqStudyCard(container, item, index) {
  const card = document.createElement('article');
  card.className = 'study-card study-card-mcq';

  const choicesHtml = item.options.map((option, idx) => {
    const isCorrect = idx === item.answer;
    return `
      <div class="study-option ${isCorrect ? 'correct-answer' : ''}">
        <span class="opt-badge">${String.fromCharCode(65 + idx)}</span>
        <span class="opt-text">${escapeHtml(option)}</span>
        ${isCorrect ? '<span class="correct-tag">✓ الإجابة الصحيحة</span>' : ''}
      </div>
    `;
  }).join('');

  card.innerHTML = `
    <div class="study-card-top">
      <span class="study-card-number">${escapeHtml(item.id)}</span>
      <span class="study-topic-badge">${escapeHtml(getUnitTitle(item.unit))}</span>
      <span class="study-type-pill pill-mcq">MCQ</span>
    </div>
    <h3 class="study-question">${escapeHtml(item.question)}</h3>
    <div class="study-options-grid">${choicesHtml}</div>
    ${item.note ? `
      <div class="study-note-box">
        <span class="note-icon">💡</span>
        <div class="note-body">
          <strong>ملاحظة هندسية:</strong>
          <p>${escapeHtml(item.note)}</p>
        </div>
      </div>
    ` : ''}
  `;
  container.appendChild(card);
}

// Render Fill-in Card in Study Bank
function renderFillStudyCard(container, item, index) {
  const card = document.createElement('article');
  card.className = 'study-card study-card-fill';

  card.innerHTML = `
    <div class="study-card-top">
      <span class="study-card-number">${escapeHtml(item.id.replace('FILL_', 'Fill '))}</span>
      <span class="study-topic-badge">${escapeHtml(getUnitTitle(item.unit))}</span>
      <span class="study-type-pill pill-fill">أكمل الفراغ</span>
    </div>
    <h3 class="study-question">${escapeHtml(item.question)}</h3>
    
    <div class="fill-answer-section">
      <div class="fill-key-badge">
        <span class="key-icon">🎯</span>
        <span>الإجابة النموذجية (Answer Key):</span>
        <strong class="highlighted-ans">${escapeHtml(item.correctText)}</strong>
      </div>
      ${item.filledSentence ? `
        <div class="fill-preview-box">
          <small>الجملة كاملة بعد التعويض:</small>
          <p class="filled-sentence-text">${escapeHtml(item.filledSentence).replace(/【(.*?)】/g, '<mark class="inline-token">$1</mark>')}</p>
        </div>
      ` : ''}
    </div>
  `;
  container.appendChild(card);
}

// Render Drawing & Application Card in Study Bank
function renderDrawingStudyCard(container, item, index) {
  const card = document.createElement('article');
  card.className = 'study-card study-card-drawing';

  const componentsList = (item.components || []).map(comp => `<li>${escapeHtml(comp)}</li>`).join('');

  card.innerHTML = `
    <div class="study-card-top">
      <span class="study-card-number">${escapeHtml(item.id.replace('DRAW_', 'Drawing '))}</span>
      <span class="study-topic-badge">${escapeHtml(getUnitTitle(item.unit))}</span>
      <span class="study-type-pill pill-draw">رسم ومخطط هندسي</span>
    </div>
    
    <h3 class="study-drawing-title">${escapeHtml(item.title)}</h3>
    <p class="study-question drawing-prompt">${escapeHtml(item.question)}</p>

    <div class="drawing-details-grid">
      <div class="drawing-components-col">
        <h4>📋 المكونات الرئيسية للتوضيح (Key Labels):</h4>
        <ul class="components-checklist">${componentsList}</ul>
        ${item.formula ? `
          <div class="formula-box">
            <span class="formula-label">العلاقة الرياضية / المعادلة:</span>
            <code>${escapeHtml(item.formula)}</code>
          </div>
        ` : ''}
      </div>

      <div class="drawing-schematic-col">
        <h4>📐 مخطط التوصيل والدائرة (Schematic / Wiring):</h4>
        <pre class="schematic-code"><code>${escapeHtml(item.asciiDiagram || '')}</code></pre>
      </div>
    </div>

    ${item.note ? `
      <div class="study-note-box drawing-note">
        <span class="note-icon">🔍</span>
        <div class="note-body">
          <strong>شرح المبدأ وطريقة التوصيل:</strong>
          <p>${escapeHtml(item.note)}</p>
        </div>
      </div>
    ` : ''}
  `;
  container.appendChild(card);
}

// Type pills tab click handlers
$$('.type-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    $$('.type-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentReviewType = pill.dataset.type;
    renderReview();
  });
});

// Event Listeners for Filters & Search
$('#review-filter').addEventListener('change', renderReview);
$('#review-search').addEventListener('input', renderReview);

// Navigation Handlers
$('#nav-review').addEventListener('click', openReview);
$('#review-shortcut').addEventListener('click', openReview);
$('#review-mistakes-button').addEventListener('click', openReview);

$('#nav-quiz').addEventListener('click', () => {
  clearTimeout(pendingAdvance);
  showScreen('start-screen');
});

$('#brand-home').addEventListener('click', event => {
  event.preventDefault();
  clearTimeout(pendingAdvance);
  showScreen('start-screen');
});

$('#retry-button').addEventListener('click', startQuiz);
$('#home-button').addEventListener('click', () => {
  clearTimeout(pendingAdvance);
  showScreen('start-screen');
});

$('#exit-button').addEventListener('click', () => {
  if (confirm('هل أنت متأكد من إنهاء الاختبار والعودة للرئيسية؟')) {
    clearTimeout(pendingAdvance);
    showScreen('start-screen');
  }
});

// Sound Toggle
$('#sound-toggle').addEventListener('click', event => {
  soundOn = !soundOn;
  event.currentTarget.classList.toggle('muted', !soundOn);
  event.currentTarget.textContent = soundOn ? '♪' : '×';
  event.currentTarget.title = soundOn ? 'كتم الصوت' : 'تشغيل الصوت';
});

// Keyboard Navigation
window.addEventListener('keydown', event => {
  if (!$('#quiz-screen').classList.contains('active')) return;

  if (['1', '2', '3', '4'].includes(event.key) && $('#next-button').disabled) {
    const optButtons = $$('.option');
    const idx = Number(event.key) - 1;
    if (optButtons[idx]) {
      optButtons[idx].click();
    }
  }

  if (event.key === 'Enter' && !$('#next-button').disabled) {
    advanceQuiz();
  }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  const totalCount = (window.QUESTION_BANK ? window.QUESTION_BANK.length : 0) + (window.DRAWING_BANK ? window.DRAWING_BANK.length : 0);
  $('#hero-count').textContent = totalCount;
  $('.question-bank-count').textContent = `${totalCount} سؤال ومخطط`;

  if (location.hash === '#review') {
    openReview();
  }
});
