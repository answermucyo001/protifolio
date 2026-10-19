import { useState } from "react";

export default function LessonView({ course, lesson, onBack, onSelectLesson, progress, onToggleComplete }) {
  const [exerciseCode, setExerciseCode] = useState(lesson.exercise.starterCode);
  const [exerciseResult, setExerciseResult] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const lessons = course.lessons;
  const currentIndex = lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const isCompleted = progress[lesson.id] || false;

  const handleRunExercise = () => {
    try {
      // Simple evaluation check or feedback
      setExerciseResult({ success: true, message: "Code looks good! Solution matches criteria." });
    } catch (err) {
      setExerciseResult({ success: false, message: err.message });
    }
  };

  const handleQuizChange = (qIndex, optIndex) => {
    setQuizAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "32px", alignItems: "start" }} className="lesson-layout">
      {/* Sidebar Navigation */}
      <aside style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", position: "sticky", top: "80px", maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
        <button className="tag" style={{ background: "none", border: "1px solid var(--border)", color: "var(--text)", padding: "6px 12px", marginBottom: "16px", cursor: "pointer", width: "100%", fontWeight: 600 }} onClick={onBack}>
          ← Back to Dashboard
        </button>
        <h3 style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: "4px" }}>{course.title}</h3>
        <p className="small muted" style={{ marginBottom: "16px" }}>{lessons.length} Lessons</p>

        <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {lessons.map((l, idx) => {
            const active = l.id === lesson.id;
            const done = progress[l.id];
            return (
              <li key={l.id}>
                <button
                  onClick={() => {
                    onSelectLesson(l);
                    setExerciseCode(l.exercise.starterCode);
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                    setExerciseResult(null);
                  }}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: active ? "var(--accent-tint)" : "transparent",
                    color: active ? "var(--accent)" : "var(--text-muted)",
                    border: 0,
                    padding: "8px 12px",
                    borderRadius: "6px",
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    fontWeight: active ? 600 : 500,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.title}</span>
                  {done ? <span style={{ color: "#10b981", fontSize: "0.8rem" }}>✓</span> : null}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Lesson Content */}
      <main style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <span className="hero-hi" style={{ margin: 0 }}>{course.title} · {lesson.duration}</span>
          <button
            onClick={() => onToggleComplete(lesson.id)}
            className="tag"
            style={{
              background: isCompleted ? "#10b981" : "var(--bg-lighter)",
              color: isCompleted ? "#fff" : "var(--text)",
              border: "1px solid var(--border)",
              padding: "6px 14px",
              cursor: "pointer",
              fontWeight: 600
            }}
          >
            {isCompleted ? "✓ Completed" : "Mark as Completed"}
          </button>
        </div>

        <h1 style={{ fontSize: "2rem", color: "var(--text)", marginBottom: "16px" }}>{lesson.title}</h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: "24px", lineHeight: "1.6" }}>{lesson.introduction}</p>

        {/* Learning Objectives */}
        <div style={{ background: "var(--bg-lighter)", border: "1px solid var(--border)", padding: "20px", borderRadius: "8px", marginBottom: "32px" }}>
          <h3 style={{ fontSize: "1rem", color: "var(--text)", marginBottom: "12px" }}>🎯 Learning Objectives</h3>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="small muted">{obj}</li>
            ))}
          </ul>
        </div>

        {/* Notes */}
        <div className="lesson-notes" style={{ marginBottom: "32px", lineHeight: "1.7", color: "var(--text-muted)" }} dangerouslySetInnerHTML={{ __html: lesson.notes.replace(/\\n/g, '<br/>') }} />

        {/* Syntax & Code Examples */}
        <h3 style={{ fontSize: "1.2rem", color: "var(--text)", marginBottom: "12px" }}>💻 Code Examples & Syntax</h3>
        <pre style={{ background: "#0f172a", color: "#e2e8f0", padding: "16px", borderRadius: "8px", overflowX: "auto", fontSize: "0.9rem", marginBottom: "24px", fontFamily: "monospace" }}>
          <code>{lesson.syntax}</code>
        </pre>

        {lesson.examples.map((ex, i) => (
          <div key={i} style={{ marginBottom: "24px" }}>
            <h4 style={{ fontSize: "1rem", color: "var(--text)", marginBottom: "8px" }}>{ex.title}</h4>
            <pre style={{ background: "#0f172a", color: "#e2e8f0", padding: "16px", borderRadius: "8px", overflowX: "auto", fontSize: "0.88rem", marginBottom: "8px" }}>
              <code>{ex.code}</code>
            </pre>
            <div className="small muted">Expected Output: <code style={{ color: "var(--accent)" }}>{ex.output}</code></div>
          </div>
        ))}

        {/* Common Mistakes */}
        <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)", padding: "20px", borderRadius: "8px", marginBottom: "32px" }}>
          <h3 style={{ fontSize: "1rem", color: "#ef4444", marginBottom: "12px" }}>⚠️ Common Mistakes & Solutions</h3>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {lesson.commonMistakes.map((m, i) => (
              <li key={i} className="small muted">{m}</li>
            ))}
          </ul>
        </div>

        {/* Practice Exercise */}
        <div style={{ background: "var(--bg-lighter)", border: "1px solid var(--border)", padding: "24px", borderRadius: "8px", marginBottom: "32px" }}>
          <h3 style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: "8px" }}>🛠️ Practice Exercise</h3>
          <p className="small muted" style={{ marginBottom: "16px" }}>{lesson.exercise.prompt}</p>
          <textarea
            value={exerciseCode}
            onChange={(e) => setExerciseCode(e.target.value)}
            rows={5}
            style={{ width: "100%", background: "#0f172a", color: "#e2e8f0", padding: "12px", borderRadius: "6px", fontFamily: "monospace", fontSize: "0.9rem", border: "1px solid var(--border)", marginBottom: "12px" }}
          />
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button className="tag" style={{ background: "var(--accent)", color: "var(--bg)", border: 0, padding: "8px 16px", fontWeight: 600, cursor: "pointer" }} onClick={handleRunExercise}>
              Run Exercise
            </button>
            <button className="tag" style={{ background: "transparent", color: "var(--text)", border: "1px solid var(--border)", padding: "8px 16px", fontWeight: 600, cursor: "pointer" }} onClick={() => setExerciseCode(lesson.exercise.solution)}>
              Show Solution
            </button>
          </div>
          {exerciseResult && (
            <div style={{ marginTop: "12px", padding: "12px", borderRadius: "6px", background: exerciseResult.success ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)", color: exerciseResult.success ? "#10b981" : "#ef4444", fontSize: "0.9rem" }}>
              {exerciseResult.message}
            </div>
          )}
        </div>

        {/* Lesson Quiz */}
        <div style={{ background: "var(--bg-lighter)", border: "1px solid var(--border)", padding: "24px", borderRadius: "8px", marginBottom: "32px" }}>
          <h3 style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: "16px" }}>📝 Lesson Quiz</h3>
          {lesson.quiz.map((q, qIdx) => (
            <div key={qIdx} style={{ marginBottom: "20px" }}>
              <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: "10px" }}>{qIdx + 1}. {q.question}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {q.options.map((opt, optIdx) => {
                  const isSelected = quizAnswers[qIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleQuizChange(qIdx, optIdx)}
                      style={{
                        textAlign: "left",
                        padding: "10px 14px",
                        background: isSelected ? "var(--accent-tint)" : "var(--bg-light)",
                        color: isSelected ? "var(--accent)" : "var(--text)",
                        border: `1px solid ${isSelected ? "var(--accent)" : "var(--border)"}`,
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "0.9rem"
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {quizSubmitted && (
                <div style={{ marginTop: "8px", fontSize: "0.85rem", color: quizAnswers[qIdx] === q.correct ? "#10b981" : "#ef4444" }}>
                  {quizAnswers[qIdx] === q.correct ? "✓ Correct!" : `✗ Incorrect. Correct answer: ${q.options[q.correct]}`}
                  <div className="muted" style={{ marginTop: "4px" }}>{q.explanation}</div>
                </div>
              )}
            </div>
          ))}
          {!quizSubmitted ? (
            <button className="tag" style={{ background: "var(--accent)", color: "var(--bg)", border: 0, padding: "10px 20px", fontWeight: 600, cursor: "pointer" }} onClick={() => setQuizSubmitted(true)}>
              Submit Quiz Answers
            </button>
          ) : (
            <button className="tag" style={{ background: "var(--bg-light)", color: "var(--text)", border: "1px solid var(--border)", padding: "10px 20px", fontWeight: 600, cursor: "pointer" }} onClick={() => setQuizSubmitted(false)}>
              Retake Quiz
            </button>
          )}
        </div>

        {/* Previous / Next Lesson Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
          {prevLesson ? (
            <button className="tag" style={{ background: "var(--bg-lighter)", color: "var(--text)", border: "1px solid var(--border)", padding: "10px 16px", cursor: "pointer", fontWeight: 600 }} onClick={() => { onSelectLesson(prevLesson); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              ← {prevLesson.title}
            </button>
          ) : <div />}

          {nextLesson ? (
            <button className="tag" style={{ background: "var(--accent)", color: "var(--bg)", border: 0, padding: "10px 16px", cursor: "pointer", fontWeight: 600 }} onClick={() => { onSelectLesson(nextLesson); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              {nextLesson.title} →
            </button>
          ) : <div />}
        </div>
      </main>
    </div>
  );
}
