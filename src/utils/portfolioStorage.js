import { site } from "../data/site.js";
import { projects as initialProjects } from "../data/projects.js";
import { skills as initialSkills } from "../data/skills.js";
import { education as initialEducation } from "../data/education.js";

const STORAGE_KEY = "mucyo_portfolio_data_v2"; // incremented version for clean state
const AUTH_KEY = "mucyo_admin_logged_in";

// Default admin credentials as requested
const DEFAULT_ADMIN = {
  username: "mucyo answer",
  password: "Mucyo123@",
};

function getInitialData() {
  const flattenedSkills = [];
  initialSkills.forEach((group, gIdx) => {
    group.items.forEach((item, iIdx) => {
      flattenedSkills.push({
        id: `skill-${gIdx}-${iIdx}`,
        group_name: group.group,
        item_name: item,
      });
    });
  });

  const projectsWithIds = initialProjects.map((p, idx) => ({
    id: `proj-${idx + 1}`,
    ...p,
    technologies: Array.isArray(p.technologies) ? p.technologies : (p.technologies ? p.technologies.split(",").map(t => t.trim()) : []),
  }));

  const educationWithIds = initialEducation.map((e, idx) => ({
    id: `edu-${idx + 1}`,
    ...e,
    topics: Array.isArray(e.topics) ? e.topics : (e.topics ? e.topics.split(",").map(t => t.trim()) : []),
  }));

  return {
    admin: DEFAULT_ADMIN,
    profile: {
      name: site.name,
      title: site.title,
      secondary: site.secondary,
      school: site.school,
      location: site.location,
      tagline: site.tagline,
      sidebar_description: site.sidebarDescription,
      email: site.contact.email,
      github: site.contact.github,
      linkedin: site.contact.linkedin,
      form_endpoint: site.contact.formEndpoint,
      image: "/mucyo.JPG",
    },
    projects: projectsWithIds,
    skills: flattenedSkills,
    education: educationWithIds,
  };
}

export function getPortfolioData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getInitialData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw);
    // Ensure admin exists
    if (!parsed.admin) {
      parsed.admin = DEFAULT_ADMIN;
    }
    return parsed;
  } catch (err) {
    console.error("Error reading portfolio data from localStorage", err);
    return getInitialData();
  }
}

export function savePortfolioData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Error saving portfolio data to localStorage", err);
  }
}

// --- Authentication ---
export function loginAdmin(username, password) {
  const data = getPortfolioData();
  const admin = data.admin || DEFAULT_ADMIN;

  const inputUser = (username || "").trim();
  const inputPass = password || "";

  const targetUser = (admin.username || "mucyo answer").trim();
  const targetPass = admin.password || "Mucyo123@";

  if (inputUser === targetUser && inputPass === targetPass) {
    localStorage.setItem(AUTH_KEY, "true");
    return { success: true };
  }
  return { success: false, error: "Invalid username or password. (Username is 'mucyo answer', password is 'Mucyo123@')" };
}

export function checkAdminAuth() {
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function logoutAdmin() {
  localStorage.removeItem(AUTH_KEY);
}

// --- CRUD Operations ---
export function updateProfile(profileForm) {
  const data = getPortfolioData();
  data.profile = { ...data.profile, ...profileForm };
  savePortfolioData(data);
  return data;
}

export function updateCredentials(currentPassword, newUsername, newPassword) {
  const data = getPortfolioData();
  const admin = data.admin || DEFAULT_ADMIN;

  if (currentPassword !== admin.password) {
    throw new Error("Current password is incorrect.");
  }

  data.admin = {
    username: (newUsername || "").trim() || admin.username,
    password: newPassword ? newPassword : admin.password,
  };
  savePortfolioData(data);
  return { success: true };
}

// Projects
export function createProject(projectForm) {
  const data = getPortfolioData();
  const newProj = {
    id: `proj-${Date.now()}`,
    title: projectForm.title,
    kind: projectForm.kind || "Personal Project",
    description: projectForm.description,
    technologies: typeof projectForm.technologies === "string"
      ? projectForm.technologies.split(",").map(t => t.trim()).filter(Boolean)
      : (projectForm.technologies || []),
    github: projectForm.github || "",
    demo: projectForm.demo || "",
    image: projectForm.image || "",
  };
  data.projects.unshift(newProj);
  savePortfolioData(data);
  return data;
}

export function updateProject(id, projectForm) {
  const data = getPortfolioData();
  data.projects = data.projects.map((p) => {
    if (p.id === id) {
      return {
        ...p,
        title: projectForm.title,
        kind: projectForm.kind,
        description: projectForm.description,
        technologies: typeof projectForm.technologies === "string"
          ? projectForm.technologies.split(",").map(t => t.trim()).filter(Boolean)
          : (projectForm.technologies || []),
        github: projectForm.github || "",
        demo: projectForm.demo || "",
        image: projectForm.image || "",
      };
    }
    return p;
  });
  savePortfolioData(data);
  return data;
}

export function deleteProject(id) {
  const data = getPortfolioData();
  data.projects = data.projects.filter((p) => p.id !== id);
  savePortfolioData(data);
  return data;
}

// Skills
export function createSkill(skillForm) {
  const data = getPortfolioData();
  const newSkill = {
    id: `skill-${Date.now()}`,
    group_name: skillForm.group_name || "Frontend",
    item_name: skillForm.item_name,
  };
  data.skills.push(newSkill);
  savePortfolioData(data);
  return data;
}

export function deleteSkill(id) {
  const data = getPortfolioData();
  data.skills = data.skills.filter((s) => s.id !== id);
  savePortfolioData(data);
  return data;
}

// Education
export function createEducation(eduForm) {
  const data = getPortfolioData();
  const newEdu = {
    id: `edu-${Date.now()}`,
    period: eduForm.period,
    title: eduForm.title,
    institution: eduForm.institution,
    location: eduForm.location,
    description: eduForm.description,
    topics: typeof eduForm.topics === "string"
      ? eduForm.topics.split(",").map(t => t.trim()).filter(Boolean)
      : (eduForm.topics || []),
  };
  data.education.unshift(newEdu);
  savePortfolioData(data);
  return data;
}

export function deleteEducation(id) {
  const data = getPortfolioData();
  data.education = data.education.filter((e) => e.id !== id);
  savePortfolioData(data);
  return data;
}
