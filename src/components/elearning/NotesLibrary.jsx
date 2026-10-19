import { useState } from "react";
import { javascriptCourse } from "../../data/javascriptCourse";
import { reactCourse } from "../../data/reactCourse";

export default function NotesLibrary({ onBack, bookmarks, onToggleBookmark }) {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");

  const allLessons = [
    ...javascriptCourse.lessons.map(l => ({ ...l, courseTitle: "JavaScript", courseId: "javascript" })),
    ...reactCourse.lessons.map(l => ({ ...l, courseTitle: "React.js", courseId: "react" }))
  ];

  const filtered = allLessons.filter(l => {
    const matchCourse = selectedCourse === "all" || l.courseId === selectedCourse;
    const matchSearch = l.title.toLowerCase().includes(search.toLowerCase()) || l.notes.toLowerCase().includes(search.toLowerCase());
    return matchCourse && matchSearch;
  });

  return (
    <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
      <button className="tag" style={{ background: "none", border: "1px solid var(--border)", color: "var(--text)", padding: "6px 12px", marginBottom: "16px", cursor: "pointer", fontWeight: 600 }} onClick={onBack}>
        ← Back to Dashboard
      </button>
      <h1 style={{ fontSize: "1.8rem", color: "var(--text)", marginBottom: "8px" }}>📚 Notes & Syntax Library</h1>
      <p className="muted small" style={{ marginBottom: "24px" }}>Search across all course notes, syntax snippets, and bookmarks.</p>

      {/* Filter & Search */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "32px", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search notes or syntax..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: "240px", padding: "12px 16px", background: "var(--bg-lighter)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--text)", outline: "none" }}
        />
        <div style={{ display: "flex", gap: "8px" }}>
          <button className="tag" style={{ background: selectedCourse === "all" ? "var(--accent)" : "var(--bg-lighter)", color: selectedCourse === "all" ? "var(--bg)" : "var(--text)", border: "1px solid var(--border)", padding: "8px 16px", cursor: "pointer", fontWeight: 600 }} onClick={() => setSelectedCourse("all")}>
            All
          </button>
          <button className="tag" style={{ background: selectedCourse === "javascript" ? "var(--accent)" : "var(--bg-lighter)", color: selectedCourse === "javascript" ? "var(--bg)" : "var(--text)", border: "1px solid var(--border)", padding: "8px 16px", cursor: "pointer", fontWeight: 600 }} onClick={() => setSelectedCourse("javascript")}>
            JavaScript
          </button>
          <button className="tag" style={{ background: selectedCourse === "react" ? "var(--accent)" : "var(--bg-lighter)", color: selectedCourse === "react" ? "var(--bg)" : "var(--text)", border: "1px solid var(--border)", padding: "8px 16px", cursor: "pointer", fontWeight: 600 }} onClick={() => setSelectedCourse("react")}>
            React.js
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div style={{ display: "grid", gap: "20px" }}>
        {filtered.map(l => {
          const isBookmarked = bookmarks[l.id] || false;
          return (
            <div key={l.id} style={{ background: "var(--bg-lighter)", border: "1px solid var(--border)", borderRadius: "8px", padding: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span className="small muted" style={{ fontWeight: 600 }}>{l.courseTitle} · {l.duration}</span>
                <button
                  onClick={() => onToggleBookmark(l.id)}
                  style={{ background: "none", border: 0, cursor: "pointer", fontSize: "1.1rem", color: isBookmarked ? "#f59e0b" : "var(--text-muted)" }}
                  title="Bookmark note"
                >
                  {isBookmarked ? "★ Bookmarked" : "☆ Bookmark"}
                </button>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--text)", marginBottom: "8px" }}>{l.title}</h3>
              <p className="muted small" style={{ marginBottom: "16px" }}>{l.introduction}</p>
              <pre style={{ background: "#0f172a", color: "#64ffda", padding: "12px", borderRadius: "6px", fontFamily: "monospace", fontSize: "0.85rem", overflowX: "auto" }}>
                <code>{l.syntax}</code>
              </pre>
            </div>
          );
        })}
      </div>
    </div>
  );
}
