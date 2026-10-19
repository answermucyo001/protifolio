import { useState } from "react";
import { javascriptCourse } from "../../data/javascriptCourse";
import { reactCourse } from "../../data/reactCourse";

export default function ELearningDashboard({ onSelectCourse, onOpenPlayground, onOpenNotes, onOpenTests, progress, bookmarks }) {
  const [search, setSearch] = useState("");

  const allLessons = [...javascriptCourse.lessons, ...reactCourse.lessons];
  const filteredLessons = allLessons.filter(l => 
    l.title.toLowerCase().includes(search.toLowerCase()) || 
    l.introduction.toLowerCase().includes(search.toLowerCase())
  );

  const completedCount = Object.values(progress).filter(Boolean).length;
  const totalLessons = allLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="elearning-dashboard" style={{ paddingBottom: "64px" }}>
      {/* Welcome Banner */}
      <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px", marginBottom: "32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-20px", bottom: "-20px", fontSize: "140px", opacity: 0.05, userSelect: "none" }}>⚡</div>
        <span className="hero-hi" style={{ display: "inline-block", marginBottom: "8px" }}>Interactive Programming Academy</span>
        <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--text)", marginBottom: "12px" }}>
          Master JavaScript & React.js
        </h1>
        <p style={{ maxWidth: "36rem", color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "24px" }}>
          Welcome to Mucyo's interactive e-learning platform. Learn by reading clear notes, testing your knowledge with quizzes, and writing live code in the browser playground.
        </p>

        {/* Quick Stats & Actions */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "24px" }}>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--accent)" }}>{completedCount} / {totalLessons}</div>
              <div className="small muted">Lessons Completed ({progressPercent}%)</div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)" }}>{Object.keys(bookmarks).length}</div>
              <div className="small muted">Bookmarked Notes</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button className="tag" style={{ background: "var(--accent)", color: "var(--bg)", border: 0, padding: "10px 20px", fontWeight: 600, cursor: "pointer", borderRadius: "8px" }} onClick={() => onSelectCourse(javascriptCourse, javascriptCourse.lessons[0])}>
              Continue Learning 🚀
            </button>
            <button className="tag" style={{ background: "var(--bg-lighter)", color: "var(--text)", border: "1px solid var(--border)", padding: "10px 20px", fontWeight: 600, cursor: "pointer", borderRadius: "8px" }} onClick={onOpenPlayground}>
              💻 Code Playground
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: "32px" }}>
        <input
          type="text"
          placeholder="Search lessons, topics, or notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "14px 20px", background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--text)", fontSize: "1rem", outline: "none" }}
        />
      </div>

      {search ? (
        <div style={{ marginBottom: "48px" }}>
          <h2 className="section-title">Search Results ({filteredLessons.length})</h2>
          <div style={{ display: "grid", gap: "12px" }}>
            {filteredLessons.map(l => (
              <div key={l.id} style={{ background: "var(--bg-light)", border: "1px solid var(--border)", padding: "16px 20px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "4px", color: "var(--text)" }}>{l.title}</h3>
                  <p className="small muted" style={{ margin: 0 }}>{l.introduction}</p>
                </div>
                <button className="tag" style={{ background: "var(--accent-tint)", color: "var(--accent)", border: 0, padding: "8px 16px", cursor: "pointer", fontWeight: 600 }} onClick={() => onSelectCourse(l.id.startsWith('js') ? javascriptCourse : reactCourse, l)}>
                  Start Lesson →
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Course Cards */}
      <h2 className="section-title">Available Courses</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "48px" }}>
        {/* JavaScript Card */}
        <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "transform 0.2s, box-shadow 0.2s" }}
             onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
             onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
          <div>
            <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: javascriptCourse.color, color: "#000", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", marginBottom: "16px" }}>
              {javascriptCourse.icon}
            </div>
            <h3 style={{ fontSize: "1.3rem", color: "var(--text)", marginBottom: "8px" }}>{javascriptCourse.title}</h3>
            <p className="muted small" style={{ marginBottom: "20px" }}>{javascriptCourse.description}</p>
            <div className="small muted" style={{ marginBottom: "16px" }}>{javascriptCourse.lessons.length} Comprehensive Lessons</div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button className="link" style={{ background: "none", border: 0, cursor: "pointer", color: "var(--accent)", fontWeight: 600, padding: 0 }} onClick={() => onSelectCourse(javascriptCourse, javascriptCourse.lessons[0])}>
              View Course →
            </button>
          </div>
        </div>

        {/* React Card */}
        <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "transform 0.2s, box-shadow 0.2s" }}
             onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
             onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
          <div>
            <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "rgba(97, 218, 251, 0.15)", color: "#61dafb", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "16px" }}>
              {reactCourse.icon}
            </div>
            <h3 style={{ fontSize: "1.3rem", color: "var(--text)", marginBottom: "8px" }}>{reactCourse.title}</h3>
            <p className="muted small" style={{ marginBottom: "20px" }}>{reactCourse.description}</p>
            <div className="small muted" style={{ marginBottom: "16px" }}>{reactCourse.lessons.length} Comprehensive Lessons</div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button className="link" style={{ background: "none", border: 0, cursor: "pointer", color: "var(--accent)", fontWeight: 600, padding: 0 }} onClick={() => onSelectCourse(reactCourse, reactCourse.lessons[0])}>
              View Course →
            </button>
          </div>
        </div>
      </div>

      {/* Quick Tools Navigation */}
      <h2 className="section-title">Interactive Learning Tools</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
        <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "8px", padding: "20px", cursor: "pointer" }} onClick={onOpenPlayground}>
          <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>💻</div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "4px", color: "var(--text)" }}>Code Playground</h3>
          <p className="small muted" style={{ margin: 0 }}>Write and execute JavaScript code live in browser sandbox.</p>
        </div>
        <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "8px", padding: "20px", cursor: "pointer" }} onClick={onOpenNotes}>
          <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>📚</div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "4px", color: "var(--text)" }}>Notes Library</h3>
          <p className="small muted" style={{ margin: 0 }}>Explore syntax notes, code snippets, and bookmarks.</p>
        </div>
        <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "8px", padding: "20px", cursor: "pointer" }} onClick={onOpenTests}>
          <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>📝</div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "4px", color: "var(--text)" }}>Tests & Quizzes</h3>
          <p className="small muted" style={{ margin: 0 }}>Take tests, predict output, and check your mastery score.</p>
        </div>
      </div>
    </div>
  );
}
