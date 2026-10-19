import { useState, useEffect } from "react";
import { sections } from "./data/site.js";
import useActiveSection from "./hooks/useActiveSection.js";
import { getPortfolioData, checkAdminAuth } from "./utils/portfolioStorage.js";
import TopNav from "./components/TopNav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import IoT from "./components/IoT.jsx";
import ELearningPage from "./components/elearning/ELearningPage.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import AdminLogin from "./components/admin/AdminLogin.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";

const ids = sections.map((s) => s.id);

export default function App() {
  const [route, setRoute] = useState(window.location.pathname);
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);

  // Dynamic portfolio data from localStorage storage
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    // Check admin session locally
    const authStatus = checkAdminAuth();
    setIsAdminAuth(authStatus);
    setAuthChecking(false);

    // Load portfolio data locally
    const data = getPortfolioData();
    setPortfolioData(data);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const active = useActiveSection(ids);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("mucyo_theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mucyo_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (authChecking) {
    return <div style={{ padding: "80px", textAlign: "center", color: "var(--text)" }}>Loading...</div>;
  }

  if (route === "/admin/login") {
    if (isAdminAuth) {
      window.location.href = "/admin/dashboard";
      return null;
    }
    return <AdminLogin onLoginSuccess={() => { setIsAdminAuth(true); window.location.href = "/admin/dashboard"; }} />;
  }

  if (route === "/admin/dashboard") {
    if (!isAdminAuth) {
      window.location.href = "/admin/login";
      return null;
    }
    return <AdminDashboard onLogout={() => { setIsAdminAuth(false); window.location.href = "/admin/login"; }} />;
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <CursorGlow />
      <TopNav active={active} theme={theme} toggleTheme={toggleTheme} />
      <div className="layout">
        <main id="main" className="content">
          <Hero profile={portfolioData?.profile} />
          <About profile={portfolioData?.profile} />
          <Education data={portfolioData?.education} />
          <Projects data={portfolioData?.projects} />
          <Skills data={portfolioData?.skills} />
          <IoT />
          <ELearningPage />
          <Contact />
          <Footer />
        </main>
      </div>
      <div style={{ textAlign: "center", paddingBottom: "32px" }}>
        <a href="/admin/login" className="small muted" style={{ textDecoration: "underline" }}>Admin Dashboard Portal</a>
      </div>
    </>
  );
}
