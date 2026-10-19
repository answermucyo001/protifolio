import { useState, useEffect } from "react";
import ELearningDashboard from "./ELearningDashboard";
import LessonView from "./LessonView";
import CodePlayground from "./CodePlayground";
import NotesLibrary from "./NotesLibrary";
import TestsView from "./TestsView";

export default function ELearningPage({ onReturnPortfolio }) {
  const [view, setView] = useState("dashboard"); // dashboard, lesson, playground, notes, tests
  const [currentCourse, setCurrentCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  // Persistent progress & bookmarks in localStorage
  const [progress, setProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mucyo_elearning_progress")) || {};
    } catch {
      return {};
    }
  });

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mucyo_elearning_bookmarks")) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("mucyo_elearning_progress", JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem("mucyo_elearning_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleToggleComplete = (lessonId) => {
    setProgress(prev => ({ ...prev, [lessonId]: !prev[lessonId] }));
  };

  const handleToggleBookmark = (lessonId) => {
    setBookmarks(prev => ({ ...prev, [lessonId]: !prev[lessonId] }));
  };

  const handleSelectCourse = (course, lesson) => {
    setCurrentCourse(course);
    setCurrentLesson(lesson);
    setView("lesson");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="elearning" className="section" style={{ paddingTop: "20px" }}>
      {/* Top Bar Navigation for E-Learning */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", paddingBottom: "16px", borderBottom: "1px solid var(--border)", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--accent)" }}>⚡ E-Learning Academy</span>
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <button className="tag" style={{ background: view === "dashboard" ? "var(--accent)" : "var(--bg-light)", color: view === "dashboard" ? "var(--bg)" : "var(--text)", border: "1px solid var(--border)", padding: "6px 14px", cursor: "pointer", fontWeight: 600 }} onClick={() => setView("dashboard")}>
            Dashboard
          </button>
          <button className="tag" style={{ background: view === "playground" ? "var(--accent)" : "var(--bg-light)", color: view === "playground" ? "var(--bg)" : "var(--text)", border: "1px solid var(--border)", padding: "6px 14px", cursor: "pointer", fontWeight: 600 }} onClick={() => setView("playground")}>
            Code Playground
          </button>
          <button className="tag" style={{ background: view === "notes" ? "var(--accent)" : "var(--bg-light)", color: view === "notes" ? "var(--bg)" : "var(--text)", border: "1px solid var(--border)", padding: "6px 14px", cursor: "pointer", fontWeight: 600 }} onClick={() => setView("notes")}>
            Notes Library
          </button>
          <button className="tag" style={{ background: view === "tests" ? "var(--accent)" : "var(--bg-light)", color: view === "tests" ? "var(--bg)" : "var(--text)", border: "1px solid var(--border)", padding: "6px 14px", cursor: "pointer", fontWeight: 600 }} onClick={() => setView("tests")}>
            Tests & Quizzes
          </button>
        </div>
      </div>

      {view === "dashboard" && (
        <ELearningDashboard
          onSelectCourse={handleSelectCourse}
          onOpenPlayground={() => setView("playground")}
          onOpenNotes={() => setView("notes")}
          onOpenTests={() => setView("tests")}
          progress={progress}
          bookmarks={bookmarks}
        />
      )}

      {view === "lesson" && currentCourse && currentLesson && (
        <LessonView
          course={currentCourse}
          lesson={currentLesson}
          onBack={() => setView("dashboard")}
          onSelectLesson={(l) => setCurrentLesson(l)}
          progress={progress}
          onToggleComplete={handleToggleComplete}
        />
      )}

      {view === "playground" && (
        <CodePlayground onBack={() => setView("dashboard")} />
      )}

      {view === "notes" && (
        <NotesLibrary
          onBack={() => setView("dashboard")}
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
        />
      )}

      {view === "tests" && (
        <TestsView onBack={() => setView("dashboard")} />
      )}
    </section>
  );
}
