import { useState, useEffect } from "react";
import { javascriptQuestions, reactQuestions } from "../../data/questionBank";

export default function TestsView({ onBack }) {
  const [courseType, setCourseType] = useState("javascript"); // javascript or react
  const [mode, setMode] = useState("dashboard"); // dashboard, practice, exam, results, review
  const [difficultyFilter, setDifficultyFilter] = useState("all"); // all, Beginner, Intermediate, Advanced
  
  // Quiz active state
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 mins for exam
  const [isExamActive, setIsExamActive] = useState(false);
  const [scoreHistory, setScoreHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mucyo_quiz_history")) || { js: [], react: [] };
    } catch {
      return { js: [], react: [] };
    }
  });

  const questionPool = courseType === "javascript" ? javascriptQuestions : reactQuestions;
  const filteredPool = questionPool.filter(q => difficultyFilter === "all" || q.difficulty === difficultyFilter);

  // Save history
  useEffect(() => {
    localStorage.setItem("mucyo_quiz_history", JSON.stringify(scoreHistory));
  }, [scoreHistory]);

  // Timer for exam mode
  useEffect(() => {
    if (!isExamActive || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isExamActive, timeLeft]);

  const startQuiz = (selectedMode) => {
    // Shuffle pool
    const shuffled = [...filteredPool].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setMode(selectedMode);
    if (selectedMode === "exam") {
      setTimeLeft(shuffled.length * 60); // 1 min per question
      setIsExamActive(true);
    } else {
      setIsExamActive(false);
    }
  };

  const handleSelectAnswer = (qId, optIdx) => {
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitQuiz = () => {
    setIsExamActive(false);
    // Calculate score
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) correct++;
    });
    const pct = Math.round((correct / questions.length) * 100);
    const resultRecord = { score: correct, total: questions.length, percentage: pct, date: new Date().toLocaleDateString() };

    setScoreHistory(prev => {
      const key = courseType === "javascript" ? "js" : "react";
      return { ...prev, [key]: [resultRecord, ...(prev[key] || [])] };
    });

    setMode("results");
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentHistory = scoreHistory[courseType === "javascript" ? "js" : "react"] || [];
  const bestScore = currentHistory.length > 0 ? Math.max(...currentHistory.map(h => h.percentage)) : 0;
  const latestScore = currentHistory.length > 0 ? currentHistory[0].percentage : null;

  return (
    <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
      <button className="tag" style={{ background: "none", border: "1px solid var(--border)", color: "var(--text)", padding: "6px 12px", marginBottom: "16px", cursor: "pointer", fontWeight: 600 }} onClick={onBack}>
        ← Back to Dashboard
      </button>

      {/* Header & Course Switcher */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <h1 style={{ fontSize: "1.8rem", color: "var(--text)", marginBottom: "4px" }}>📝 100-Question Assessment Center</h1>
          <p className="muted small">Test your expertise with 50 JavaScript and 50 React.js unique questions.</p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button className="tag" style={{ background: courseType === "javascript" ? "var(--accent)" : "var(--bg-lighter)", color: courseType === "javascript" ? "var(--bg)" : "var(--text)", border: "1px solid var(--border)", padding: "8px 16px", cursor: "pointer", fontWeight: 600 }} onClick={() => setCourseType("javascript")}>
            JavaScript (50 Qs)
          </button>
          <button className="tag" style={{ background: courseType === "react" ? "var(--accent)" : "var(--bg-lighter)", color: courseType === "react" ? "var(--bg)" : "var(--text)", border: "1px solid var(--border)", padding: "8px 16px", cursor: "pointer", fontWeight: 600 }} onClick={() => setCourseType("react")}>
            React.js (50 Qs)
          </button>
        </div>
      </div>

      {/* DASHBOARD MODE */}
      {mode === "dashboard" && (
        <div>
          {/* Stats Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            <div style={{ background: "var(--bg-lighter)", border: "1px solid var(--border)", padding: "20px", borderRadius: "8px" }}>
              <div className="small muted">Total Questions Available</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text)" }}>{questionPool.length}</div>
            </div>
            <div style={{ background: "var(--bg-lighter)", border: "1px solid var(--border)", padding: "20px", borderRadius: "8px" }}>
              <div className="small muted">Best Score</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#10b981" }}>{bestScore}%</div>
            </div>
            <div style={{ background: "var(--bg-lighter)", border: "1px solid var(--border)", padding: "20px", borderRadius: "8px" }}>
              <div className="small muted">Latest Score</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--accent)" }}>{latestScore !== null ? `${latestScore}%` : "N/A"}</div>
            </div>
            <div style={{ background: "var(--bg-lighter)", border: "1px solid var(--border)", padding: "20px", borderRadius: "8px" }}>
              <div className="small muted">Tests Taken</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text)" }}>{currentHistory.length}</div>
            </div>
          </div>

          {/* Difficulty Filter & Launch Options */}
          <div style={{ background: "var(--bg-lighter)", border: "1px solid var(--border)", padding: "24px", borderRadius: "8px", marginBottom: "32px" }}>
            <h3 style={{ fontSize: "1.2rem", color: "var(--text)", marginBottom: "16px" }}>Choose Difficulty Level</h3>
            <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
              {["all", "Beginner", "Intermediate", "Advanced"].map(diff => (
                <button
                  key={diff}
                  onClick={() => setDifficultyFilter(diff)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    background: difficultyFilter === diff ? "var(--accent-tint)" : "var(--bg-light)",
                    color: difficultyFilter === diff ? "var(--accent)" : "var(--text)",
                    border: `1px solid ${difficultyFilter === diff ? "var(--accent)" : "var(--border)"}`,
                    cursor: "pointer",
                    fontWeight: 600
                  }}
                >
                  {diff === "all" ? "All Levels" : diff} ({diff === "all" ? questionPool.length : questionPool.filter(q => q.difficulty === diff).length})
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button className="tag" style={{ background: "var(--accent)", color: "var(--bg)", border: 0, padding: "12px 24px", fontWeight: 600, cursor: "pointer", borderRadius: "8px", fontSize: "1rem" }} onClick={() => startQuiz("practice")}>
                📖 Start Practice Mode (Instant Feedback)
              </button>
              <button className="tag" style={{ background: "var(--bg-light)", color: "var(--text)", border: "1px solid var(--border)", padding: "12px 24px", fontWeight: 600, cursor: "pointer", borderRadius: "8px", fontSize: "1rem" }} onClick={() => startQuiz("exam")}>
                ⏱️ Start Timed Exam Mode (1 min/question)
              </button>
            </div>
          </div>

          {/* Past Results History */}
          {currentHistory.length > 0 && (
            <div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--text)", marginBottom: "16px" }}>Recent Assessment History</h3>
              <div style={{ display: "grid", gap: "10px" }}>
                {currentHistory.slice(0, 5).map((h, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", background: "var(--bg-lighter)", border: "1px solid var(--border)", borderRadius: "6px" }}>
                    <span className="small muted">{h.date}</span>
                    <span style={{ fontWeight: 600, color: h.percentage >= 70 ? "#10b981" : "#ef4444" }}>Score: {h.score} / {h.total} ({h.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* PRACTICE OR EXAM ACTIVE MODE */}
      {(mode === "practice" || mode === "exam") && questions.length > 0 && (
        <div>
          {/* Top progress & timer bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", background: "var(--bg-lighter)", padding: "12px 20px", borderRadius: "8px", border: "1px solid var(--border)" }}>
            <span className="small muted" style={{ fontWeight: 600 }}>Question {currentIndex + 1} of {questions.length}</span>
            {mode === "exam" && (
              <span style={{ fontWeight: 700, color: timeLeft < 60 ? "#ef4444" : "var(--accent)" }}>
                ⏳ Time Left: {formatTime(timeLeft)}
              </span>
            )}
            <span className="small muted">Topic: {questions[currentIndex].topic} ({questions[currentIndex].difficulty})</span>
          </div>

          {/* Question Box */}
          <div style={{ background: "var(--bg-lighter)", border: "1px solid var(--border)", borderRadius: "8px", padding: "28px", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "1.2rem", color: "var(--text)", marginBottom: "20px", lineHeight: "1.5" }}>
              {questions[currentIndex].question}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {questions[currentIndex].options.map((opt, optIdx) => {
                const qId = questions[currentIndex].id;
                const isSelected = answers[qId] === optIdx;
                const isPractice = mode === "practice";
                const isAnswered = answers[qId] !== undefined;
                const isCorrectOpt = optIdx === questions[currentIndex].correct;

                let bg = "var(--bg-light)";
                let color = "var(--text)";
                let border = "1px solid var(--border)";

                if (isPractice && isAnswered) {
                  if (isCorrectOpt) {
                    bg = "rgba(16, 185, 129, 0.15)";
                    color = "#10b981";
                    border = "1px solid #10b981";
                  } else if (isSelected && !isCorrectOpt) {
                    bg = "rgba(239, 68, 68, 0.15)";
                    color = "#ef4444";
                    border = "1px solid #ef4444";
                  }
                } else if (isSelected) {
                  bg = "var(--accent-tint)";
                  color = "var(--accent)";
                  border = "1px solid var(--accent)";
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectAnswer(qId, optIdx)}
                    style={{ textAlign: "left", padding: "14px 18px", background: bg, color: color, border: border, borderRadius: "8px", cursor: "pointer", fontSize: "1rem", fontWeight: isSelected ? 600 : 400 }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Explanation box in practice mode */}
            {mode === "practice" && answers[questions[currentIndex].id] !== undefined && (
              <div style={{ marginTop: "20px", padding: "16px", borderRadius: "8px", background: "var(--bg-light)", border: "1px solid var(--border)" }}>
                <div style={{ fontWeight: 600, color: answers[questions[currentIndex].id] === questions[currentIndex].correct ? "#10b981" : "#ef4444", marginBottom: "6px" }}>
                  {answers[questions[currentIndex].id] === questions[currentIndex].correct ? "✓ Correct!" : "✗ Incorrect."}
                </div>
                <p className="muted small" style={{ margin: 0 }}>{questions[currentIndex].explanation}</p>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button
              className="tag"
              style={{ background: "var(--bg-lighter)", color: "var(--text)", border: "1px solid var(--border)", padding: "10px 20px", cursor: currentIndex > 0 ? "pointer" : "not-allowed", opacity: currentIndex > 0 ? 1 : 0.5 }}
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
            >
              ← Previous
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                className="tag"
                style={{ background: "var(--accent)", color: "var(--bg)", border: 0, padding: "10px 24px", cursor: "pointer", fontWeight: 600 }}
                onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))}
              >
                Next →
              </button>
            ) : (
              <button
                className="tag"
                style={{ background: "#10b981", color: "#fff", border: 0, padding: "12px 28px", cursor: "pointer", fontWeight: 700 }}
                onClick={handleSubmitQuiz}
              >
                Submit Assessment 🚀
              </button>
            )}
          </div>
        </div>
      )}

      {/* RESULTS MODE */}
      {mode === "results" && (
        <div style={{ textAlign: "center" }}>
          {(() => {
            let correctCount = 0;
            questions.forEach(q => {
              if (answers[q.id] === q.correct) correctCount++;
            });
            const pct = Math.round((correctCount / questions.length) * 100);
            const passed = pct >= 70;

            return (
              <div>
                <div style={{ fontSize: "64px", marginBottom: "12px" }}>{passed ? "🎉" : "📚"}</div>
                <h2 style={{ fontSize: "2rem", color: passed ? "#10b981" : "#ef4444", marginBottom: "8px" }}>
                  {passed ? "Assessment Passed Successfully!" : "Keep Practicing! Review Notes."}
                </h2>
                <p style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text)", marginBottom: "24px" }}>
                  Final Score: {correctCount} / {questions.length} ({pct}%)
                </p>

                <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "32px" }}>
                  <button className="tag" style={{ background: "var(--accent)", color: "var(--bg)", border: 0, padding: "12px 24px", fontWeight: 600, cursor: "pointer", borderRadius: "8px" }} onClick={() => setMode("review")}>
                    🔍 Review Answers & Explanations
                  </button>
                  <button className="tag" style={{ background: "var(--bg-lighter)", color: "var(--text)", border: "1px solid var(--border)", padding: "12px 24px", fontWeight: 600, cursor: "pointer", borderRadius: "8px" }} onClick={() => setMode("dashboard")}>
                    🏠 Return to Dashboard
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* REVIEW MODE */}
      {mode === "review" && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text)" }}>🔍 Detailed Answers & Explanations Review</h2>
            <button className="tag" style={{ background: "var(--accent)", color: "var(--bg)", border: 0, padding: "8px 16px", cursor: "pointer", fontWeight: 600 }} onClick={() => setMode("dashboard")}>
              Back to Dashboard
            </button>
          </div>

          <div style={{ display: "grid", gap: "20px" }}>
            {questions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns === q.correct;
              return (
                <div key={q.id} style={{ background: "var(--bg-lighter)", border: `1px solid ${isCorrect ? "#10b981" : "#ef4444"}`, borderRadius: "8px", padding: "20px" }}>
                  <div className="small muted" style={{ marginBottom: "6px" }}>Question {idx + 1} · {q.topic} ({q.difficulty})</div>
                  <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: "12px" }}>{q.question}</p>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "12px" }}>
                    {q.options.map((opt, optIdx) => {
                      let bg = "var(--bg-light)";
                      let color = "var(--text)";
                      if (optIdx === q.correct) {
                        bg = "rgba(16, 185, 129, 0.15)";
                        color = "#10b981";
                      } else if (optIdx === userAns && !isCorrect) {
                        bg = "rgba(239, 68, 68, 0.15)";
                        color = "#ef4444";
                      }
                      return (
                        <div key={optIdx} style={{ padding: "8px 12px", background: bg, color: color, borderRadius: "6px", fontSize: "0.9rem" }}>
                          {optIdx === q.correct ? "✓ " : optIdx === userAns && !isCorrect ? "✗ " : "• "} {opt}
                        </div>
                      );
                    })}
                  </div>
                  <p className="small muted" style={{ margin: 0 }}><strong>Explanation:</strong> {q.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
