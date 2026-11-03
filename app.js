// Normalize BANK_200_DATA into unified question objects
const PART_NAMES_200 = {
  1: "Phần 1: Lý luận về Nhà nước",
  2: "Phần 2: Lý luận về Pháp luật",
  3: "Phần 3: Luật Dân sự & Thừa kế",
  4: "Phần 4: Luật Hành chính",
  5: "Phần 5: Luật Hình sự"
};

const NORMALIZED_BANK_200 = (typeof BANK_200_DATA !== "undefined" ? BANK_200_DATA : []).map(q => ({
  id: q.id,
  set: 3, // 3 = Ngân hàng 200 câu PDF (TLAW0111)
  number: q.stt,
  part: q.part,
  level: q.level,
  section: `Phần ${q.part} • Cấp độ ${q.level}`,
  question: q.question,
  options: q.options,
  correctIndex: q.correctIndex,
  explanation: `Đáp án chuẩn theo Ngân hàng câu hỏi Đề thi học phần Pháp luật đại cương (TLAW0111) - Câu ${q.stt} (${PART_NAMES_200[q.part] || "Phần " + q.part}, Cấp độ ${q.level}).`,
  images: []
}));

const ALL_QUESTIONS = [...QUIZ_DATA, ...NORMALIZED_BANK_200];

// State Management
const state = {
  activeTab: "home", // 'home' | 'pdf200' | 'quiz' | 'bank'
  quizTitle: "",
  mode: "practice", // 'practice' | 'exam'
  viewMode: "single", // 'single' | 'all'
  questions: [],
  currentIndex: 0,
  answers: {}, // { questionId: selectedOptionIndex }
  flagged: new Set(),
  submitted: false,
  filterAfterSubmit: "all", // 'all' | 'wrong' | 'flagged'
  timerSeconds: 0,
  timeLimitSeconds: 0,
  timerInterval: null,
  wrongHistoryIds: new Set(JSON.parse(localStorage.getItem("pldc_wrong_ids") || "[]"))
};

// Utility Functions
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cleanOptionPrefix(optText) {
  return optText.replace(/^[A-DÂ]\.\s*/i, "").trim();
}

function hasPositionalReference(options) {
  return options.some(o => /cả\s+a|cả\s+b|cả\s+ba|cả\s+3|đáp án trên|phương án trên/i.test(o));
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatQuestionHtml(q) {
  let html = escapeHtml(q.question);
  if (q.underlined) {
    const target = escapeHtml(q.underlined);
    html = html.replace(target, `<span class="underlined-segment">${target}</span>`);
  }
  return html;
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function saveWrongHistory() {
  localStorage.setItem("pldc_wrong_ids", JSON.stringify([...state.wrongHistoryIds]));
  updateHeroStats();
}

function updateHeroStats() {
  const trapCount = QUIZ_DATA.filter(q => q.wasWrongInImage).length;
  const userWrongCount = state.wrongHistoryIds.size;
  const elTrap = document.getElementById("stat-trap-count");
  const elWrong = document.getElementById("stat-user-wrong");
  const btnWrongCount = document.getElementById("btn-user-wrong-count");
  if (elTrap) elTrap.textContent = trapCount;
  if (elWrong) elWrong.textContent = userWrongCount;
  if (btnWrongCount) btnWrongCount.textContent = userWrongCount;
}

// Navigation between main tabs
function switchTab(tab) {
  state.activeTab = tab;
  document.getElementById("view-home")?.classList.toggle("hidden", tab !== "home");
  document.getElementById("view-pdf200")?.classList.toggle("hidden", tab !== "pdf200");
  document.getElementById("view-quiz")?.classList.toggle("hidden", tab !== "quiz");
  document.getElementById("view-bank")?.classList.toggle("hidden", tab !== "bank");

  document.getElementById("tab-btn-home")?.classList.toggle("active", tab === "home");
  document.getElementById("tab-btn-pdf200")?.classList.toggle("active", tab === "pdf200");
  document.getElementById("tab-btn-quiz")?.classList.toggle("active", tab === "quiz");
  document.getElementById("tab-btn-bank")?.classList.toggle("active", tab === "bank");

  if (tab === "bank") {
    renderQuestionBank();
  }
  if (tab === "home" || tab === "pdf200") {
    updateHeroStats();
  }
}

// Generate Official 50-question Exam based on TLAW0111 Matrix (Page 2 of PDF)
function generateMatrixExam50() {
  // Matrix:
  // Part 1: L1=3, L2=2, L3=0 (5)
  // Part 2: L1=7, L2=11, L3=2 (20)
  // Part 3: L1=4, L2=4, L3=12 (20)
  // Part 4: L1=0, L2=1, L3=1 (2)
  // Part 5: L1=1, L2=1, L3=1 (3)
  const matrix = [
    { part: 1, level: 1, count: 3 },
    { part: 1, level: 2, count: 2 },
    { part: 2, level: 1, count: 7 },
    { part: 2, level: 2, count: 11 },
    { part: 2, level: 3, count: 2 },
    { part: 3, level: 1, count: 4 },
    { part: 3, level: 2, count: 4 },
    { part: 3, level: 3, count: 12 },
    { part: 4, level: 2, count: 1 },
    { part: 4, level: 3, count: 1 },
    { part: 5, level: 1, count: 1 },
    { part: 5, level: 2, count: 1 },
    { part: 5, level: 3, count: 1 }
  ];

  const selected = [];
  matrix.forEach(rule => {
    const candidates = NORMALIZED_BANK_200.filter(q => q.part === rule.part && q.level === rule.level);
    selected.push(...shuffleArray(candidates).slice(0, rule.count));
  });
  return selected;
}

// Build & Start a Quiz Session
function startQuizSession(preset, customFilter = null) {
  const modeSelect = document.getElementById("cfg-mode")?.value || "practice";
  const viewSelect = document.getElementById("cfg-view")?.value || "single";
  const timeLimitMin = parseInt(document.getElementById("cfg-time")?.value || "0", 10) || 0;
  const doShuffleQ = document.getElementById("cfg-shuffle-q")?.checked || false;
  const doShuffleOpt = document.getElementById("cfg-shuffle-opt")?.checked || false;

  let pool = [];
  let title = "";

  if (preset === "set1") {
    pool = QUIZ_DATA.filter(q => q.set === 1 && (!customFilter || q.section === customFilter));
    title = customFilter ? `Bộ đề 1 - ${customFilter}` : "Bộ đề 1 (50 câu - Giao diện xanh)";
  } else if (preset === "set2") {
    pool = QUIZ_DATA.filter(q => q.set === 2 && (!customFilter || q.section === customFilter));
    title = customFilter ? `Bộ đề 2 - ${customFilter}` : "Bộ đề 2 (50 câu - Giao diện tím)";
  } else if (preset === "all100") {
    pool = [...QUIZ_DATA];
    title = "Tổng hợp 100 câu Google Forms (Bộ đề 1 & 2)";
  } else if (preset === "trap") {
    pool = QUIZ_DATA.filter(q => q.wasWrongInImage);
    title = `Câu dễ sai (0/2 điểm trong ảnh gốc - ${pool.length} câu)`;
  } else if (preset === "user-wrong") {
    pool = ALL_QUESTIONS.filter(q => state.wrongHistoryIds.has(q.id));
    if (pool.length === 0) {
      alert("Bạn chưa có câu trả lời sai nào được lưu! Hãy làm thử một bộ đề trước.");
      return;
    }
    title = `Ôn lại câu bạn từng làm sai (${pool.length} câu)`;
  } else if (preset === "random40" || preset === "random50") {
    const count = preset === "random40" ? 40 : 50;
    pool = shuffleArray(QUIZ_DATA).slice(0, count);
    title = `Đề ngẫu nhiên Google Forms (${count} câu)`;
  } else if (preset === "pdf200-all") {
    pool = [...NORMALIZED_BANK_200];
    title = "Trọn bộ 200 Câu Ngân Hàng Đề Thi Học Phần (TLAW0111)";
  } else if (preset === "pdf200-matrix") {
    pool = generateMatrixExam50();
    title = "Đề Thi Chuẩn 50 Câu Theo Bảng Trọng Số (TLAW0111)";
  } else if (preset === "pdf200-part") {
    pool = NORMALIZED_BANK_200.filter(q => q.part === customFilter);
    title = `Ngân hàng 200 câu - ${PART_NAMES_200[customFilter]} (${pool.length} câu)`;
  } else if (preset === "pdf200-level") {
    pool = NORMALIZED_BANK_200.filter(q => q.level === customFilter);
    const lvlNames = {
      1: "Cấp độ 1 - Nhận biết (74 câu)",
      2: "Cấp độ 2 - Thông hiểu (72 câu)",
      3: "Cấp độ 3 - Vận dụng & Bài tập chia thừa kế (54 câu)"
    };
    title = `Ngân hàng 200 câu - ${lvlNames[customFilter] || "Cấp độ " + customFilter}`;
  } else if (preset === "pdf200-range") {
    const [startIdx, endIdx] = customFilter;
    pool = NORMALIZED_BANK_200.slice(startIdx, endIdx);
    title = `Ngân hàng Đề thi (Câu ${startIdx + 1} - ${endIdx})`;
  }

  if (doShuffleQ && !["random40", "random50", "pdf200-matrix"].includes(preset)) {
    pool = shuffleArray(pool);
  }

  // Clone questions and optionally shuffle options safely
  state.questions = pool.map((q, idx) => {
    const cloned = {
      ...q,
      displayNumber: idx + 1,
      options: [...q.options],
      correctIndex: q.correctIndex
    };
    if (doShuffleOpt && !hasPositionalReference(q.options)) {
      const pairs = q.options.map((text, i) => ({ text, isCorrect: i === q.correctIndex }));
      const shuffledPairs = shuffleArray(pairs);
      cloned.options = shuffledPairs.map(p => p.text);
      cloned.correctIndex = shuffledPairs.findIndex(p => p.isCorrect);
    }
    return cloned;
  });

  state.quizTitle = title;
  state.mode = modeSelect;
  state.viewMode = viewSelect;
  state.currentIndex = 0;
  state.answers = {};
  state.flagged = new Set();
  state.submitted = false;
  state.filterAfterSubmit = "all";
  state.timeLimitSeconds = timeLimitMin * 60;
  state.timerSeconds = state.timeLimitSeconds > 0 ? state.timeLimitSeconds : 0;

  startTimer();
  document.getElementById("tab-btn-quiz")?.classList.remove("hidden");
  switchTab("quiz");
  renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  const timerEl = document.getElementById("quiz-timer");
  const updateDisplay = () => {
    if (timerEl) {
      timerEl.textContent = `⏱️ ${formatTime(state.timerSeconds)}`;
    }
  };
  updateDisplay();

  state.timerInterval = setInterval(() => {
    if (state.submitted) {
      clearInterval(state.timerInterval);
      return;
    }
    if (state.timeLimitSeconds > 0) {
      state.timerSeconds--;
      updateDisplay();
      if (state.timerSeconds <= 0) {
        clearInterval(state.timerInterval);
        alert("Hết thời gian làm bài! Hệ thống sẽ tự động chấm điểm.");
        submitQuiz(true);
      }
    } else {
      state.timerSeconds++;
      updateDisplay();
    }
  }, 1000);
}

// Render Quiz Interface
function renderQuiz() {
  const total = state.questions.length;
  const answeredCount = Object.keys(state.answers).length;

  document.getElementById("quiz-title-display").textContent = state.quizTitle;
  document.getElementById("quiz-progress-display").textContent = `Đã làm: ${answeredCount}/${total} câu`;

  const viewToggleBtn = document.getElementById("btn-toggle-view");
  viewToggleBtn.textContent = state.viewMode === "single" ? "📋 Xem tất cả câu" : "🎯 Xem từng câu";

  const submitBtn = document.getElementById("btn-submit-quiz");
  submitBtn.textContent = state.submitted ? "🔄 Làm lại đề này" : "✅ Nộp bài & Chấm điểm";
  submitBtn.className = state.submitted ? "btn btn-primary" : "btn btn-success";

  renderResultBanner();
  renderQuestionsArea();
  renderPalette();
}

function renderResultBanner() {
  const banner = document.getElementById("quiz-result-banner");
  if (!state.submitted) {
    banner.classList.add("hidden");
    banner.innerHTML = "";
    return;
  }

  const total = state.questions.length;
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;

  state.questions.forEach(q => {
    const ans = state.answers[q.id];
    if (ans === undefined) {
      unanswered++;
    } else if (ans === q.correctIndex) {
      correct++;
    } else {
      wrong++;
    }
  });

  const pointsEarned = correct * 2;
  const maxPoints = total * 2;
  const scale10 = ((correct / total) * 10).toFixed(2);
  const percent = Math.round((correct / total) * 100);

  banner.classList.remove("hidden");
  banner.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
      <div>
        <h2 style="font-size:1.3rem;">🎉 Kết quả bài làm: ${state.quizTitle}</h2>
        <p style="color:var(--text-muted);font-size:0.9rem;">Hoàn thành trong ${formatTime(
          state.timeLimitSeconds > 0 ? state.timeLimitSeconds - state.timerSeconds : state.timerSeconds
        )}</p>
      </div>
      <div style="display:flex;gap:0.6rem;flex-wrap:wrap;">
        ${
          wrong + unanswered > 0
            ? `<button class="btn btn-danger" onclick="retryWrongQuestionsInSession()">🔁 Làm lại ${wrong + unanswered} câu sai/chưa làm</button>`
            : ""
        }
        <button class="btn btn-outline" onclick="restartCurrentQuiz()">🔄 Làm lại từ đầu</button>
      </div>
    </div>

    <div class="result-grid">
      <div class="result-stat-box">
        <span class="result-stat-val" style="color:var(--purple)">${scale10} / 10</span>
        <span class="result-stat-lbl">Thang điểm 10 (${percent}%)</span>
      </div>
      <div class="result-stat-box">
        <span class="result-stat-val" style="color:var(--primary)">${pointsEarned}/${maxPoints}</span>
        <span class="result-stat-lbl">Điểm hệ số 2 (${correct}/${total} câu)</span>
      </div>
      <div class="result-stat-box">
        <span class="result-stat-val" style="color:var(--success)">${correct}</span>
        <span class="result-stat-lbl">Câu trả lời đúng</span>
      </div>
      <div class="result-stat-box">
        <span class="result-stat-val" style="color:var(--danger)">${wrong}</span>
        <span class="result-stat-lbl">Câu trả lời sai</span>
      </div>
      <div class="result-stat-box">
        <span class="result-stat-val" style="color:var(--warning)">${unanswered}</span>
        <span class="result-stat-lbl">Câu chưa chọn</span>
      </div>
    </div>

    <div class="filter-pills">
      <button class="mini-btn ${state.filterAfterSubmit === "all" ? "flagged" : ""}" onclick="setResultFilter('all')">
        Tất cả (${total})
      </button>
      <button class="mini-btn ${state.filterAfterSubmit === "wrong" ? "flagged" : ""}" onclick="setResultFilter('wrong')">
        ❌ Chỉ xem câu sai / chưa làm (${wrong + unanswered})
      </button>
      <button class="mini-btn ${state.filterAfterSubmit === "flagged" ? "flagged" : ""}" onclick="setResultFilter('flagged')">
        🚩 Câu đã đánh dấu (${state.flagged.size})
      </button>
    </div>
  `;
}

function setResultFilter(filter) {
  state.filterAfterSubmit = filter;
  state.viewMode = "all";
  renderQuiz();
}

function renderQuestionsArea() {
  const container = document.getElementById("quiz-questions-container");
  const letters = ["A", "B", "C", "D"];

  let listToRender = [];
  if (state.viewMode === "single" && !state.submitted) {
    listToRender = [state.questions[state.currentIndex]];
  } else if (state.viewMode === "single" && state.submitted && state.filterAfterSubmit === "all") {
    listToRender = [state.questions[state.currentIndex]];
  } else {
    listToRender = state.questions.filter(q => {
      if (!state.submitted || state.filterAfterSubmit === "all") return true;
      if (state.filterAfterSubmit === "wrong") {
        return state.answers[q.id] !== q.correctIndex;
      }
      if (state.filterAfterSubmit === "flagged") {
        return state.flagged.has(q.id);
      }
      return true;
    });
  }

  if (listToRender.length === 0) {
    container.innerHTML = `
      <div class="question-card" style="text-align:center;padding:2.5rem;">
        <p style="font-size:1.05rem;color:var(--text-muted);">Không có câu hỏi nào trong bộ lọc này.</p>
      </div>
    `;
    return;
  }

  const cardsHtml = listToRender
    .map(q => {
      const selectedIdx = state.answers[q.id];
      const hasAnswered = selectedIdx !== undefined;
      const showFeedback = state.submitted || (state.mode === "practice" && hasAnswered);
      const isCorrect = hasAnswered && selectedIdx === q.correctIndex;
      const isFlagged = state.flagged.has(q.id);
      const hasImages = q.images && q.images.length > 0;

      let cardStatusClass = "";
      if (showFeedback) {
        cardStatusClass = isCorrect ? "card-correct" : "card-wrong";
      }

      const sourceLabel =
        q.set === 3
          ? `Đề thi TLAW0111 • ${q.section} (Câu #${q.number})`
          : `Bộ đề ${q.set} • ${q.section} (Câu #${q.number})`;

      const optionsHtml = q.options
        .map((opt, idx) => {
          let btnClass = "option-btn";
          if (showFeedback) {
            if (idx === q.correctIndex) {
              btnClass += " correct";
            } else if (idx === selectedIdx && selectedIdx !== q.correctIndex) {
              btnClass += " wrong";
            }
          } else if (idx === selectedIdx) {
            btnClass += " selected";
          }

          const cleanText = cleanOptionPrefix(opt);
          const disabledAttr = state.submitted ? "disabled" : "";

          return `
            <button class="${btnClass}" ${disabledAttr} onclick="selectOption(${q.id}, ${idx})">
              <span class="option-key">${letters[idx] || idx + 1}</span>
              <span style="flex:1">${escapeHtml(cleanText)}</span>
            </button>
          `;
        })
        .join("");

      const feedbackHtml = showFeedback
        ? `
          <div class="explanation-box ${isCorrect ? "exp-correct" : "exp-wrong"}">
            <div class="exp-header">
              <span>
                ${
                  isCorrect
                    ? "✅ Chính xác!"
                    : hasAnswered
                    ? `❌ Chưa đúng! Đáp án đúng là: ${letters[q.correctIndex]}. ${escapeHtml(
                        cleanOptionPrefix(q.options[q.correctIndex])
                      )}`
                    : `⚠️ Chưa chọn đáp án! Đáp án đúng là: ${letters[q.correctIndex]}. ${escapeHtml(
                        cleanOptionPrefix(q.options[q.correctIndex])
                      )}`
                }
              </span>
              ${hasImages ? `<button class="mini-btn" onclick="openImageModal(${q.id})">📷 Xem ảnh gốc</button>` : ""}
            </div>
            <p>${escapeHtml(q.explanation)}</p>
          </div>
        `
        : "";

      return `
        <div class="question-card ${cardStatusClass}" id="q-card-${q.displayNumber}">
          <div class="q-header">
            <div class="q-meta">
              <span class="q-num-badge ${q.set === 2 ? "set-2" : ""}">Câu ${q.displayNumber}/${state.questions.length}</span>
              <span class="q-section-tag">${escapeHtml(sourceLabel)}</span>
              ${
                q.wasWrongInImage
                  ? `<span class="q-trap-tag" title="Câu này trong ảnh chụp gốc bị chọn sai (0/2 điểm)">⚠️ Câu 0/2 trong ảnh gốc</span>`
                  : ""
              }
            </div>
            <div class="q-actions">
              <button class="mini-btn ${isFlagged ? "flagged" : ""}" onclick="toggleFlag(${q.id})">
                ${isFlagged ? "🚩 Đã đánh dấu" : "🏳️ Đánh dấu"}
              </button>
              ${
                hasImages
                  ? `<button class="mini-btn" onclick="openImageModal(${q.id})">📷 Ảnh gốc</button>`
                  : ""
              }
            </div>
          </div>

          <div class="q-text">${formatQuestionHtml(q)}</div>

          <div class="options-list">
            ${optionsHtml}
          </div>

          ${feedbackHtml}
        </div>
      `;
    })
    .join("");

  const singleNavHtml =
    state.viewMode === "single" && (!state.submitted || state.filterAfterSubmit === "all")
      ? `
        <div class="single-nav-bar">
          <button class="btn btn-outline" onclick="prevQuestion()" ${state.currentIndex === 0 ? "disabled" : ""}>
            ⬅️ Câu trước
          </button>
          <span class="kbd-hint">Mẹo: Nhấn phím <b>1-4</b> (hoặc <b>A-D</b>) để chọn đáp án, phím <b>← / →</b> để chuyển câu</span>
          <button class="btn btn-primary" style="flex:0 0 auto;" onclick="nextQuestion()" ${
            state.currentIndex === state.questions.length - 1 ? "disabled" : ""
          }>
            Câu tiếp theo ➡️
          </button>
        </div>
      `
      : "";

  container.innerHTML = cardsHtml + singleNavHtml;
}

function renderPalette() {
  const grid = document.getElementById("palette-grid");
  grid.innerHTML = state.questions
    .map((q, idx) => {
      const selectedIdx = state.answers[q.id];
      const hasAnswered = selectedIdx !== undefined;
      const showFeedback = state.submitted || (state.mode === "practice" && hasAnswered);

      let classes = ["palette-btn"];
      if (state.viewMode === "single" && idx === state.currentIndex) {
        classes.push("current");
      }
      if (showFeedback) {
        if (hasAnswered && selectedIdx === q.correctIndex) {
          classes.push("correct");
        } else {
          classes.push("wrong");
        }
      } else if (hasAnswered) {
        classes.push("answered");
      }
      if (state.flagged.has(q.id)) {
        classes.push("flagged");
      }

      return `<button class="${classes.join(" ")}" onclick="jumpToQuestion(${idx})">${q.displayNumber}</button>`;
    })
    .join("");
}

// User Interactions in Quiz
function selectOption(questionId, optionIndex) {
  if (state.submitted) return;
  state.answers[questionId] = optionIndex;

  const q = state.questions.find(item => item.id === questionId);
  if (q) {
    if (optionIndex !== q.correctIndex) {
      state.wrongHistoryIds.add(q.id);
    }
    saveWrongHistory();
  }

  renderQuiz();

  if (state.mode === "exam" && state.viewMode === "single" && state.currentIndex < state.questions.length - 1) {
    setTimeout(() => {
      nextQuestion();
    }, 220);
  }
}

function toggleFlag(questionId) {
  if (state.flagged.has(questionId)) {
    state.flagged.delete(questionId);
  } else {
    state.flagged.add(questionId);
  }
  renderQuiz();
}

function prevQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderQuiz();
  }
}

function nextQuestion() {
  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex++;
    renderQuiz();
  }
}

function jumpToQuestion(idx) {
  state.currentIndex = idx;
  if (state.viewMode === "single") {
    renderQuiz();
  } else {
    renderPalette();
    const card = document.getElementById(`q-card-${idx + 1}`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

function toggleViewMode() {
  state.viewMode = state.viewMode === "single" ? "all" : "single";
  renderQuiz();
}

function handleSubmitOrRestart() {
  if (state.submitted) {
    restartCurrentQuiz();
  } else {
    submitQuiz(false);
  }
}

function submitQuiz(force = false) {
  const total = state.questions.length;
  const answered = Object.keys(state.answers).length;
  if (!force && answered < total) {
    const confirmSubmit = confirm(
      `Bạn mới làm ${answered}/${total} câu (còn ${total - answered} câu chưa chọn).\nBạn có chắc chắn muốn nộp bài ngay không?`
    );
    if (!confirmSubmit) return;
  }

  state.submitted = true;
  if (state.timerInterval) clearInterval(state.timerInterval);

  state.questions.forEach(q => {
    if (state.answers[q.id] !== q.correctIndex) {
      state.wrongHistoryIds.add(q.id);
    }
  });
  saveWrongHistory();

  renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartCurrentQuiz() {
  state.answers = {};
  state.flagged = new Set();
  state.submitted = false;
  state.currentIndex = 0;
  state.filterAfterSubmit = "all";
  state.timerSeconds = state.timeLimitSeconds > 0 ? state.timeLimitSeconds : 0;
  startTimer();
  renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function retryWrongQuestionsInSession() {
  const wrongPool = state.questions.filter(q => state.answers[q.id] !== q.correctIndex);
  if (wrongPool.length === 0) return;

  state.questions = wrongPool.map((q, idx) => ({
    ...q,
    displayNumber: idx + 1
  }));
  state.quizTitle = `Làm lại các câu sai (${wrongPool.length} câu)`;
  restartCurrentQuiz();
}

function clearWrongHistory() {
  if (confirm("Xóa danh sách các câu bạn đã làm sai trước đây?")) {
    state.wrongHistoryIds.clear();
    saveWrongHistory();
  }
}

// Original Image Modal
function openImageModal(questionId) {
  const q = ALL_QUESTIONS.find(item => item.id === questionId);
  if (!q || !q.images || q.images.length === 0) return;

  const modal = document.getElementById("image-modal");
  const title = document.getElementById("modal-title");
  const body = document.getElementById("modal-body");

  title.textContent = `Ảnh chụp gốc - Bộ đề ${q.set} (${q.section} - Câu #${q.number})`;
  body.innerHTML = q.images
    .map(
      img => `
        <div style="width:100%;text-align:center;">
          <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.4rem;">File: ${img}</p>
          <img src="${img}" alt="Ảnh gốc câu hỏi ${q.number}" loading="lazy" />
        </div>
      `
    )
    .join("");

  modal.classList.remove("hidden");
}

function closeImageModal(e) {
  if (!e || e.target.id === "image-modal" || e.target.id === "modal-close-btn") {
    document.getElementById("image-modal").classList.add("hidden");
  }
}

// Question Bank / Lookup Tab
function renderQuestionBank() {
  const query = (document.getElementById("bank-search-input")?.value || "").trim().toLowerCase();
  const setFilter = document.getElementById("bank-filter-set")?.value || "all";
  const container = document.getElementById("bank-list-container");
  const countLabel = document.getElementById("bank-count-label");
  const letters = ["A", "B", "C", "D"];

  const filtered = ALL_QUESTIONS.filter(q => {
    if (setFilter === "3" && q.set !== 3) return false;
    if (setFilter === "1" && q.set !== 1) return false;
    if (setFilter === "2" && q.set !== 2) return false;
    if (setFilter === "trap" && !q.wasWrongInImage) return false;
    if (query) {
      const inQ = q.question.toLowerCase().includes(query);
      const inOpt = q.options.some(o => o.toLowerCase().includes(query));
      const inExp = (q.explanation || "").toLowerCase().includes(query);
      return inQ || inOpt || inExp;
    }
    return true;
  });

  if (countLabel) {
    countLabel.textContent = `Hiển thị ${filtered.length}/${ALL_QUESTIONS.length} câu`;
  }

  container.innerHTML = filtered
    .map(q => {
      const hasImages = q.images && q.images.length > 0;
      const badgeTitle = q.set === 3 ? `Đề thi TLAW0111 • Câu ${q.number}` : `Bộ đề ${q.set} • Câu ${q.number}`;
      const optionsHtml = q.options
        .map((opt, idx) => {
          const isCorr = idx === q.correctIndex;
          return `
            <div class="option-btn ${isCorr ? "correct" : ""}" style="cursor:default;">
              <span class="option-key">${letters[idx]}</span>
              <span style="flex:1">${escapeHtml(cleanOptionPrefix(opt))}</span>
              ${isCorr ? `<span style="color:var(--success);font-weight:700;">✓ Đáp án đúng</span>` : ""}
            </div>
          `;
        })
        .join("");

      return `
        <div class="question-card">
          <div class="q-header">
            <div class="q-meta">
              <span class="q-num-badge ${q.set === 2 ? "set-2" : ""}">${escapeHtml(badgeTitle)}</span>
              <span class="q-section-tag">${escapeHtml(q.section)}</span>
              ${
                q.wasWrongInImage
                  ? `<span class="q-trap-tag">⚠️ Bị 0/2 điểm trong ảnh gốc (Ảnh chọn: ${escapeHtml(
                      q.wrongSelectedInImage
                    )})</span>`
                  : ""
              }
            </div>
            ${hasImages ? `<button class="mini-btn" onclick="openImageModal(${q.id})">📷 Xem ảnh gốc</button>` : ""}
          </div>
          <div class="q-text">${formatQuestionHtml(q)}</div>
          <div class="options-list">${optionsHtml}</div>
          <div class="explanation-box" style="margin-top:0.85rem;">
            <strong>💡 Giải thích:</strong> ${escapeHtml(q.explanation)}
          </div>
        </div>
      `;
    })
    .join("");
}

// Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("pldc_theme", next);
  document.getElementById("theme-btn").textContent = next === "dark" ? "☀️" : "🌙";
}

// Keyboard Shortcuts
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeImageModal();
    return;
  }
  if (state.activeTab !== "quiz" || state.viewMode !== "single") return;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;

  const currentQ = state.questions[state.currentIndex];
  if (!currentQ) return;

  const key = e.key.toUpperCase();
  if (["1", "A"].includes(key)) {
    selectOption(currentQ.id, 0);
  } else if (["2", "B"].includes(key)) {
    selectOption(currentQ.id, 1);
  } else if (["3", "C"].includes(key)) {
    selectOption(currentQ.id, 2);
  } else if (["4", "D"].includes(key) && currentQ.options.length >= 4) {
    selectOption(currentQ.id, 3);
  } else if (e.key === "ArrowLeft") {
    prevQuestion();
  } else if (e.key === "ArrowRight") {
    nextQuestion();
  } else if (key === "F") {
    toggleFlag(currentQ.id);
  }
});

// Initialize on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("pldc_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeBtn = document.getElementById("theme-btn");
  if (themeBtn) themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  updateHeroStats();

  // Check URL hash or query param to auto-open 200-question PDF tab if requested
  if (window.location.hash === "#pdf200" || window.location.search.includes("set=pdf200")) {
    switchTab("pdf200");
  }
});
