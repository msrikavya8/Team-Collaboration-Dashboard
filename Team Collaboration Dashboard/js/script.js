/**
 * ============================================================================
 * TEAM COLLABORATION DASHBOARD - JAVASCRIPT CORE APPLICATION
 * ============================================================================
 * Technologies: Vanilla JavaScript (ES6+), Chart.js, HTML5 LocalStorage
 * Author: Sri Kavya Manne (CSE, Ashoka Women's Engineering College, JNTUA)
 *
 * Core Modules:
 *  1. State & Storage Management (with exact seed data from resume & reference)
 *  2. Application Routing / View Navigation (Dashboard, Profile, Projects,
 *     Add Project, Tasks, Skills, Certificates, Internship, Team, Reports)
 *  3. Dynamic Statistics & Visual Charts (Chart.js)
 *  4. Project Management (Full CRUD, Table View, Search, Status Tracking)
 *  5. Dedicated Add Project & Team Workload Sync
 *  6. Task Management & Kanban Board
 *  7. Team Member Contribution Analysis
 *  8. Resume Viewer Modal & PDF Print Integration
 *  9. Dark Mode & Theme Persistence
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. STORAGE KEYS & INITIAL DEMO DATA (Exact match to Sri Kavya's Sample)
// ----------------------------------------------------------------------------
const STORAGE_KEY = "collabsphere_kavya_data_v3";
const THEME_KEY = "collabsphere_theme_v3";

const INITIAL_SAMPLE_DATA = {
    projects: [
        {
            id: 1,
            name: "Placement Preparation Portal",
            technology: "HTML, CSS, JavaScript",
            members: ["Kavya"],
            status: "Completed",
            progress: 100,
            deadline: "2026-08-15"
        },
        {
            id: 2,
            name: "Chat Application",
            technology: "JAVA",
            members: ["Kavya", "Usha"],
            status: "Completed",
            progress: 100,
            deadline: "2026-07-20"
        },
        {
            id: 3,
            name: "Movie Review",
            technology: "HTML, CSS, JavaScript",
            members: ["Renuka", "Jahnavi", "Kavya"],
            status: "Completed",
            progress: 100,
            deadline: "2026-06-10"
        },
        {
            id: 4,
            name: "Weather Dashboard",
            technology: "HTML, CSS, JS",
            members: ["Kavya"],
            status: "Completed",
            progress: 100,
            deadline: "2026-05-01"
        },
        {
            id: 5,
            name: "Customer Dashboard",
            technology: "Python",
            members: ["Jahnavi", "Lahari", "Kavya"],
            status: "Running",
            progress: 65,
            deadline: "2026-11-30"
        },
        {
            id: 6,
            name: "Student Management",
            technology: "Java, SQL",
            members: ["Renuka", "Kavya"],
            status: "Completed",
            progress: 100,
            deadline: "2026-04-25"
        },
        {
            id: 7,
            name: "Team Collaboration Dashboard",
            technology: "HTML, CSS, JavaScript",
            members: ["Jhansi", "Lahari", "Kavya", "Kovela", "Jahnavi"],
            status: "Running",
            progress: 85,
            deadline: "2026-12-20"
        },
        {
            id: 8,
            name: "QR Code reader",
            technology: "HTML, CSS, JavaScript",
            members: ["Jhansi", "Lahari", "Kavya"],
            status: "Pending",
            progress: 25,
            deadline: "2027-01-15"
        }
    ],
    members: [
        {
            id: "mem-kavya",
            name: "Kavya",
            fullName: "Sri Kavya Manne",
            email: "msrikavyachowdary064@gmail.com",
            role: "Lead Full-Stack Developer",
            avatar: "assets/images/kavya-profile.jpg",
            skills: ["Java", "Python", "SQL", "HTML5", "CSS3", "JavaScript"]
        },
        {
            id: "mem-usha",
            name: "Usha",
            fullName: "Usha Rani",
            email: "usha@example.com",
            role: "Backend Java Developer",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
            skills: ["Java", "Socket Programming", "OOP", "DSA"]
        },
        {
            id: "mem-renuka",
            name: "Renuka",
            fullName: "Madugundu Renuka",
            email: "renuka@example.com",
            role: "Database & SQL Specialist",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
            skills: ["SQL", "DBMS", "Java", "JDBC"]
        },
        {
            id: "mem-jahnavi",
            name: "Jahnavi",
            fullName: "Jahnavi S.",
            email: "jahnavi@example.com",
            role: "Frontend UI/UX Developer",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
            skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
        },
        {
            id: "mem-lahari",
            name: "Lahari",
            fullName: "Lahari K.",
            email: "lahari@example.com",
            role: "Data & Python Analyst",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
            skills: ["Python", "Pandas", "Excel", "Data Analytics"]
        },
        {
            id: "mem-jhansi",
            name: "Jhansi",
            fullName: "Jhansi Lakshmi",
            email: "jhansi@example.com",
            role: "QA & Testing Specialist",
            avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80",
            skills: ["JavaScript", "Manual Testing", "Test Cases"]
        },
        {
            id: "mem-kovela",
            name: "Kovela",
            fullName: "Kovela Priya",
            email: "kovela@example.com",
            role: "Technical Documentation Specialist",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
            skills: ["Technical Writing", "Git", "Markdown"]
        }
    ],
    tasks: [
        {
            id: "task-1",
            title: "Connect LocalStorage persistence for projects",
            projectId: 7,
            assigneeName: "Kavya",
            priority: "High",
            status: "Completed",
            deadline: "2026-10-15"
        },
        {
            id: "task-2",
            title: "Build Chart.js visual skills progress bar chart",
            projectId: 7,
            assigneeName: "Kavya",
            priority: "High",
            status: "Completed",
            deadline: "2026-10-25"
        },
        {
            id: "task-3",
            title: "Implement real-time project search and filter",
            projectId: 7,
            assigneeName: "Jahnavi",
            priority: "Medium",
            status: "In Progress",
            deadline: "2026-11-20"
        },
        {
            id: "task-4",
            title: "Train rainfall prediction machine learning model",
            projectId: 5,
            assigneeName: "Lahari",
            priority: "High",
            status: "In Progress",
            deadline: "2026-11-28"
        },
        {
            id: "task-5",
            title: "Design Java multithreaded socket communication",
            projectId: 2,
            assigneeName: "Usha",
            priority: "High",
            status: "Completed",
            deadline: "2026-07-10"
        },
        {
            id: "task-6",
            title: "Normalize relational tables to 3NF in SQL",
            projectId: 6,
            assigneeName: "Renuka",
            priority: "Medium",
            status: "Completed",
            deadline: "2026-04-15"
        },
        {
            id: "task-7",
            title: "Build QR Code parsing and rendering canvas",
            projectId: 8,
            assigneeName: "Jhansi",
            priority: "Low",
            status: "To Do",
            deadline: "2026-12-30"
        },
        {
            id: "task-8",
            title: "Verify cross-browser responsiveness on mobile devices",
            projectId: 7,
            assigneeName: "Kovela",
            priority: "Medium",
            status: "In Progress",
            deadline: "2026-11-25"
        }
    ],
    activities: [
        {
            id: "act-1",
            userId: "Kavya",
            text: "updated progress on <strong>Team Collaboration Dashboard</strong> to <strong>85%</strong>",
            timestamp: "10 minutes ago"
        },
        {
            id: "act-2",
            userId: "Lahari",
            text: "started task <strong>Train rainfall prediction machine learning model</strong>",
            timestamp: "1 hour ago"
        },
        {
            id: "act-3",
            userId: "Jahnavi",
            text: "optimized responsive CSS grid layout for mobile screens",
            timestamp: "3 hours ago"
        },
        {
            id: "act-4",
            userId: "Kavya",
            text: "completed project milestone <strong>Placement Preparation Portal</strong>",
            timestamp: "Yesterday"
        }
    ],
    notifications: [
        {
            id: "notif-1",
            title: "Workspace Synchronized",
            message: "All 8 projects and 7 team members loaded from LocalStorage.",
            time: "Just now",
            unread: true,
            type: "info"
        },
        {
            id: "notif-2",
            title: "Milestone Completed",
            message: "Student Management system finalized with SQL backend.",
            time: "2 hours ago",
            unread: true,
            type: "success"
        },
        {
            id: "notif-3",
            title: "Sprint Update",
            message: "Team Collaboration Dashboard is at 85% completion.",
            time: "Yesterday",
            unread: false,
            type: "warning"
        }
    ]
};

// ----------------------------------------------------------------------------
// 2. STATE MANAGER CLASS (LocalStorage Persistence)
// ----------------------------------------------------------------------------
class DashboardState {
    constructor() {
        this.data = this.loadData();
    }

    loadData() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                this.saveData(INITIAL_SAMPLE_DATA);
                return JSON.parse(JSON.stringify(INITIAL_SAMPLE_DATA));
            }
            return JSON.parse(raw);
        } catch (e) {
            console.error("LocalStorage load error:", e);
            return JSON.parse(JSON.stringify(INITIAL_SAMPLE_DATA));
        }
    }

    saveData(customData = null) {
        if (customData) {
            this.data = customData;
        }
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        } catch (e) {
            console.error("LocalStorage save error:", e);
        }
    }

    resetToDemoData() {
        this.data = JSON.parse(JSON.stringify(INITIAL_SAMPLE_DATA));
        this.saveData();
    }

    // Projects CRUD
    getProjects() { return this.data.projects || []; }
    getProjectById(id) { return this.getProjects().find(p => p.id == id); }

    addProject(name, technology, membersArr, status = "Running") {
        const newProj = {
            id: Date.now(),
            name: name.trim(),
            technology: technology.trim(),
            members: membersArr,
            status: status,
            progress: status === "Completed" ? 100 : (status === "Pending" ? 20 : 60),
            deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
        };

        this.data.projects.unshift(newProj);
        this.logActivity("Kavya", `added new project <strong>${escapeHtml(newProj.name)}</strong> with status <strong>${status}</strong>`);
        this.addNotification("Project Added", `Project "${newProj.name}" has been registered.`, "success");
        this.saveData();
        return newProj;
    }

    deleteProject(id) {
        const proj = this.getProjectById(id);
        if (proj) {
            const name = proj.name;
            this.data.projects = this.data.projects.filter(p => p.id != id);
            this.data.tasks = this.data.tasks.filter(t => t.projectId != id);
            this.logActivity("Kavya", `deleted project <strong>${escapeHtml(name)}</strong>`);
            this.addNotification("Project Deleted", `Project "${name}" was removed.`, "warning");
            this.saveData();
            return true;
        }
        return false;
    }

    // Tasks CRUD
    getTasks() { return this.data.tasks || []; }
    getTaskById(id) { return this.getTasks().find(t => t.id == id); }

    addTask(task) {
        task.id = "task-" + Date.now();
        this.data.tasks.unshift(task);
        this.logActivity("Kavya", `created task <strong>${escapeHtml(task.title)}</strong>`);
        this.saveData();
        return task;
    }

    updateTask(id, updatedFields) {
        const idx = this.data.tasks.findIndex(t => t.id == id);
        if (idx !== -1) {
            this.data.tasks[idx] = { ...this.data.tasks[idx], ...updatedFields };
            this.saveData();
            return this.data.tasks[idx];
        }
        return null;
    }

    deleteTask(id) {
        this.data.tasks = this.data.tasks.filter(t => t.id != id);
        this.saveData();
        return true;
    }

    // Members CRUD
    getMembers() { return this.data.members || []; }
    getMemberByName(name) {
        return this.getMembers().find(m => m.name.toLowerCase() === name.trim().toLowerCase());
    }

    addMember(name, email, role, skills) {
        const member = {
            id: "mem-" + Date.now(),
            name: name.trim(),
            fullName: name.trim(),
            email: email.trim(),
            role: role.trim(),
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0284c7&color=fff&bold=true`,
            skills: skills.split(",").map(s => s.trim()).filter(Boolean)
        };
        this.data.members.push(member);
        this.saveData();
        return member;
    }

    deleteMember(id) {
        this.data.members = this.data.members.filter(m => m.id != id);
        this.saveData();
        return true;
    }

    // Activities & Notifications
    logActivity(userId, htmlText) {
        if (!this.data.activities) this.data.activities = [];
        this.data.activities.unshift({
            id: "act-" + Date.now(),
            userId: userId || "Kavya",
            text: htmlText,
            timestamp: "Just now"
        });
        if (this.data.activities.length > 20) this.data.activities.pop();
    }

    addNotification(title, message, type = "info") {
        if (!this.data.notifications) this.data.notifications = [];
        this.data.notifications.unshift({
            id: "notif-" + Date.now(),
            title,
            message,
            time: "Just now",
            unread: true,
            type
        });
        if (this.data.notifications.length > 20) this.data.notifications.pop();
    }

    markAllNotificationsRead() {
        if (this.data.notifications) {
            this.data.notifications.forEach(n => n.unread = false);
            this.saveData();
        }
    }

    clearNotifications() {
        this.data.notifications = [];
        this.saveData();
    }

    clearActivities() {
        this.data.activities = [];
        this.saveData();
    }
}

const appState = new DashboardState();

// ----------------------------------------------------------------------------
// 3. CHART MANAGER CLASS (Chart.js Integration)
// ----------------------------------------------------------------------------
class ChartManager {
    constructor() {
        this.charts = {};
    }

    isDark() {
        return document.documentElement.getAttribute("data-theme") === "dark";
    }

    getThemeColors() {
        const dark = this.isDark();
        return {
            textColor: dark ? "#cbd5e1" : "#475569",
            textPrimary: dark ? "#f8fafc" : "#0f172a",
            gridColor: dark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
            tooltipBg: dark ? "#1e293b" : "#0f172a",
            tooltipText: "#ffffff"
        };
    }

    destroyChart(key) {
        if (this.charts[key]) {
            this.charts[key].destroy();
            this.charts[key] = null;
        }
    }

    // 1. Bar Chart: Project Progress / Technology Skills (Matches Screenshot 25109 & 25113)
    renderSkillsBarChart(canvasId = "chartProjectProgress", key = "skillsBar") {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        this.destroyChart(key);

        const theme = this.getThemeColors();
        const labels = ["HTML", "CSS", "JavaScript", "Java", "SQL", "Python"];
        const data = [95, 90, 85, 85, 80, 75];
        const colors = [
            "#3b82f6", // HTML Blue
            "#22c55e", // CSS Green
            "#f59e0b", // JS Amber
            "#ef4444", // Java Red
            "#8b5cf6", // SQL Purple
            "#06b6d4"  // Python Cyan
        ];

        this.charts[key] = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Skill Progress %",
                    data: data,
                    backgroundColor: colors,
                    borderRadius: 8,
                    maxBarThickness: 42
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: theme.tooltipBg,
                        callbacks: {
                            label: (item) => ` ${item.raw}% Proficiency`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: theme.textColor,
                            callback: (v) => v + "%",
                            font: { family: "'Plus Jakarta Sans', sans-serif" }
                        },
                        grid: { color: theme.gridColor }
                    },
                    x: {
                        ticks: {
                            color: theme.textColor,
                            font: { family: "'Plus Jakarta Sans', sans-serif", weight: 600 }
                        },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // 2. Doughnut Chart: Project Status (Completed, Running, Pending - Matches Screenshot 25109)
    renderStatusDoughnutChart() {
        const ctx = document.getElementById("chartTaskStatus");
        if (!ctx) return;
        this.destroyChart("statusDoughnut");

        const theme = this.getThemeColors();
        const projects = appState.getProjects();
        const completed = projects.filter(p => p.status === "Completed").length;
        const running = projects.filter(p => p.status === "Running").length;
        const pending = projects.filter(p => p.status === "Pending").length;

        const total = completed + running + pending;
        const data = total === 0 ? [1] : [completed, running, pending];
        const colors = total === 0 ? ["#e2e8f0"] : ["#22c55e", "#3b82f6", "#ef4444"];

        this.charts.statusDoughnut = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: total === 0 ? ["No Projects"] : ["Completed", "Running", "Pending"],
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 2,
                    borderColor: theme.tooltipBg === "#0f172a" ? "#ffffff" : "#111a2e",
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: "65%",
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            color: theme.textColor,
                            font: { family: "'Plus Jakarta Sans', sans-serif", weight: 600, size: 12 },
                            padding: 16,
                            usePointStyle: true,
                            pointStyle: "circle"
                        }
                    },
                    tooltip: {
                        backgroundColor: theme.tooltipBg,
                        padding: 10
                    }
                }
            }
        });
    }

    // 3. Team Performance Grouped Chart (Dashboard View)
    renderTeamPerformanceChart() {
        const ctx = document.getElementById("chartTeamPerformance");
        if (!ctx) return;
        this.destroyChart("teamPerformance");

        const theme = this.getThemeColors();
        const teamStats = calculateTeamStatistics();
        const labels = Object.keys(teamStats);
        const completedProjects = labels.map(m => teamStats[m].completed);
        const runningProjects = labels.map(m => teamStats[m].running);
        const pendingProjects = labels.map(m => teamStats[m].pending);

        this.charts.teamPerformance = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Completed",
                        data: completedProjects,
                        backgroundColor: "#22c55e",
                        borderRadius: 4
                    },
                    {
                        label: "Running",
                        data: runningProjects,
                        backgroundColor: "#3b82f6",
                        borderRadius: 4
                    },
                    {
                        label: "Pending",
                        data: pendingProjects,
                        backgroundColor: "#ef4444",
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "top",
                        labels: {
                            color: theme.textColor,
                            font: { family: "'Plus Jakarta Sans', sans-serif", weight: 600 },
                            usePointStyle: true
                        }
                    },
                    tooltip: { backgroundColor: theme.tooltipBg }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 1, color: theme.textColor },
                        grid: { color: theme.gridColor }
                    },
                    x: {
                        ticks: { color: theme.textColor, font: { weight: 600 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // 4. Monthly Tasks Chart (Reports View)
    renderMonthlyTasksChart() {
        const ctx = document.getElementById("chartMonthlyTasks");
        if (!ctx) return;
        this.destroyChart("monthlyTasks");

        const theme = this.getThemeColors();
        const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
        const taskCounts = [3, 5, 8, 12, 16, 20, 24];

        this.charts.monthlyTasks = new Chart(ctx, {
            type: "line",
            data: {
                labels: months,
                datasets: [{
                    label: "Milestones Completed",
                    data: taskCounts,
                    borderColor: "#0284c7",
                    backgroundColor: "rgba(2, 132, 199, 0.15)",
                    fill: true,
                    tension: 0.35,
                    borderWidth: 3,
                    pointBackgroundColor: "#0284c7",
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { backgroundColor: theme.tooltipBg } },
                scales: {
                    y: { beginAtZero: true, ticks: { color: theme.textColor }, grid: { color: theme.gridColor } },
                    x: { ticks: { color: theme.textColor }, grid: { display: false } }
                }
            }
        });
    }

    // 5. Task Priority Polar Chart (Reports View)
    renderTaskPriorityChart() {
        const ctx = document.getElementById("chartTaskPriority");
        if (!ctx) return;
        this.destroyChart("taskPriority");

        const theme = this.getThemeColors();
        const tasks = appState.getTasks();
        const high = tasks.filter(t => t.priority === "High").length;
        const medium = tasks.filter(t => t.priority === "Medium").length;
        const low = tasks.filter(t => t.priority === "Low").length;

        this.charts.taskPriority = new Chart(ctx, {
            type: "polarArea",
            data: {
                labels: ["High Priority", "Medium Priority", "Low Priority"],
                datasets: [{
                    data: [high || 4, medium || 3, low || 2],
                    backgroundColor: [
                        "rgba(239, 68, 68, 0.8)",
                        "rgba(245, 158, 11, 0.8)",
                        "rgba(34, 197, 94, 0.8)"
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: "bottom", labels: { color: theme.textColor } },
                    tooltip: { backgroundColor: theme.tooltipBg }
                },
                scales: { r: { grid: { color: theme.gridColor }, ticks: { display: false } } }
            }
        });
    }

    updateDashboardCharts() {
        this.renderSkillsBarChart("chartProjectProgress", "skillsBarDash");
        this.renderStatusDoughnutChart();
        this.renderTeamPerformanceChart();
    }

    updateSkillsCharts() {
        this.renderSkillsBarChart("chartSkillsView", "skillsBarFull");
    }

    updateReportsCharts() {
        this.renderMonthlyTasksChart();
        this.renderTaskPriorityChart();
    }
}

const chartManager = new ChartManager();

// ----------------------------------------------------------------------------
// 4. UI UTILITY HELPERS
// ----------------------------------------------------------------------------
function escapeHtml(str) {
    if (!str) return "";
    const div = document.createElement("div");
    div.innerText = str;
    return div.innerHTML;
}

function showToast(title, message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon = "fa-check";
    if (type === "info") icon = "fa-info";
    if (type === "warning") icon = "fa-triangle-exclamation";
    if (type === "error") icon = "fa-xmark";

    toast.innerHTML = `
        <div class="toast-icon"><i class="fa-solid ${icon}"></i></div>
        <div class="toast-content">
            <div class="toast-title">${escapeHtml(title)}</div>
            <div class="toast-message">${escapeHtml(message)}</div>
        </div>
        <button class="toast-close" aria-label="Close notification"><i class="fa-solid fa-xmark"></i></button>
    `;

    container.appendChild(toast);
    toast.querySelector(".toast-close").addEventListener("click", () => removeToast(toast));
    setTimeout(() => removeToast(toast), 4000);
}

function removeToast(toast) {
    if (!toast) return;
    toast.classList.add("toast-exit");
    setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 300);
}

// ----------------------------------------------------------------------------
// 5. TEAM WORKLOAD CALCULATION ENGINE (Matching Screenshot 25116)
// ----------------------------------------------------------------------------
function calculateTeamStatistics() {
    const projects = appState.getProjects();
    const stats = {};

    // Standard initial team members
    const defaultMembers = ["Kavya", "Usha", "Renuka", "Jahnavi", "Lahari", "Jhansi", "Kovela"];
    defaultMembers.forEach(m => {
        stats[m] = { projects: 0, completed: 0, running: 0, pending: 0 };
    });

    // Aggregate through all projects
    projects.forEach(project => {
        (project.members || []).forEach(mName => {
            const trimmed = mName.trim();
            if (!stats[trimmed]) {
                stats[trimmed] = { projects: 0, completed: 0, running: 0, pending: 0 };
            }

            stats[trimmed].projects++;
            if (project.status === "Completed") stats[trimmed].completed++;
            if (project.status === "Running") stats[trimmed].running++;
            if (project.status === "Pending") stats[trimmed].pending++;
        });
    });

    return stats;
}

function renderTeamTables() {
    const stats = calculateTeamStatistics();
    const teamTableBody = document.getElementById("teamTableBody");
    const dedicatedTeamTableBody = document.getElementById("dedicatedTeamTableBody");

    const html = Object.keys(stats).map(member => `
        <tr>
            <td><strong>${escapeHtml(member)}</strong></td>
            <td>${stats[member].projects}</td>
            <td><span class="text-success font-bold">${stats[member].completed}</span></td>
            <td><span class="text-primary font-bold">${stats[member].running}</span></td>
            <td><span class="text-warning font-bold">${stats[member].pending}</span></td>
        </tr>
    `).join("");

    if (teamTableBody) teamTableBody.innerHTML = html;
    if (dedicatedTeamTableBody) dedicatedTeamTableBody.innerHTML = html;

    // Also update team profile cards in team view
    renderTeamCards();
}

function renderTeamCards() {
    const container = document.getElementById("teamContainer");
    if (!container) return;

    const members = appState.getMembers();
    const stats = calculateTeamStatistics();

    container.innerHTML = members.map(m => {
        const mStat = stats[m.name] || { projects: 0, completed: 0, running: 0, pending: 0 };
        const skillsHtml = (m.skills || []).map(s => `<span class="skill-chip">${escapeHtml(s)}</span>`).join("");

        return `
            <div class="team-card">
                <img src="${escapeHtml(m.avatar)}" alt="${escapeHtml(m.name)}" class="team-card-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=0284c7&color=fff&bold=true'">
                <h3 class="team-card-name">${escapeHtml(m.fullName || m.name)}</h3>
                <span class="team-card-role">${escapeHtml(m.role)}</span>

                <div class="team-card-skills mt-3">
                    ${skillsHtml}
                </div>

                <div class="team-card-stats">
                    <div class="team-stat-item">
                        <div class="team-stat-val">${mStat.projects}</div>
                        <div class="team-stat-lbl">Projects</div>
                    </div>
                    <div class="team-stat-item">
                        <div class="team-stat-val">${mStat.completed}</div>
                        <div class="team-stat-lbl">Completed</div>
                    </div>
                </div>

                <button class="btn btn-outline btn-sm btn-block" onclick="viewMemberDetails('${m.name}')">
                    <i class="fa-solid fa-eye"></i> View Profile
                </button>
            </div>
        `;
    }).join("");
}

// ----------------------------------------------------------------------------
// 6. VIEW ROUTING & NAVIGATION
// ----------------------------------------------------------------------------
let currentView = "dashboard";

function navigateToView(viewName) {
    currentView = viewName;

    // Update nav links
    document.querySelectorAll(".sidebar-nav .nav-link").forEach(link => {
        if (link.dataset.view === viewName) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Toggle view sections
    document.querySelectorAll(".view-section").forEach(sec => {
        if (sec.id === `view-${viewName}`) {
            sec.classList.add("active");
        } else {
            sec.classList.remove("active");
        }
    });

    // Breadcrumb Update
    const titles = {
        dashboard: "Dashboard",
        profile: "Profile & Resume",
        projects: "Projects",
        addProject: "Add Project",
        tasks: "Tasks & Kanban",
        skills: "Skills Summary",
        certificates: "Certificates",
        internship: "Internship",
        team: "Team Members",
        reports: "Reports & Analytics"
    };

    const breadcrumb = document.getElementById("currentViewTitle");
    if (breadcrumb) breadcrumb.textContent = titles[viewName] || "Dashboard";

    closeMobileSidebar();

    // Trigger render logic per view
    if (viewName === "dashboard") {
        renderDashboard();
    } else if (viewName === "projects") {
        renderProjects();
    } else if (viewName === "addProject") {
        renderTeamTables();
    } else if (viewName === "tasks") {
        renderTasks();
    } else if (viewName === "skills") {
        setTimeout(() => chartManager.updateSkillsCharts(), 50);
    } else if (viewName === "team") {
        renderTeamTables();
    } else if (viewName === "reports") {
        renderReports();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ----------------------------------------------------------------------------
// 7. DASHBOARD MODULE
// ----------------------------------------------------------------------------
function renderDashboard() {
    const projects = appState.getProjects();
    const tasks = appState.getTasks();
    const members = appState.getMembers();
    const activities = appState.data.activities || [];

    // Calculate Core Metrics (Total: 8, Completed: 5, Running: 2, Pending: 1)
    const totalProjects = projects.length;
    const completedProjects = projects.filter(p => p.status === "Completed").length;
    const runningProjects = projects.filter(p => p.status === "Running").length;
    const pendingProjects = projects.filter(p => p.status === "Pending").length;

    const completionRate = totalProjects > 0 ? Math.round((completedProjects / totalProjects) * 100) : 0;

    document.getElementById("statTotalProjects").textContent = totalProjects;
    document.getElementById("statCompletedProjects").textContent = completedProjects;
    document.getElementById("statOngoingProjects").textContent = runningProjects;
    document.getElementById("statPendingTasks").textContent = pendingProjects;
    document.getElementById("statProjectCompletionRate").textContent = `${completionRate}%`;

    // Activity feed render
    const actContainer = document.getElementById("dashboardActivityList");
    if (actContainer) {
        if (activities.length === 0) {
            actContainer.innerHTML = `<div class="text-muted" style="padding: 1.5rem; text-align: center;">No recent activities yet.</div>`;
        } else {
            actContainer.innerHTML = activities.slice(0, 6).map(act => {
                const user = appState.getMemberByName(act.userId) || {
                    name: act.userId || "Kavya",
                    avatar: "assets/images/kavya-profile.jpg"
                };
                return `
                    <div class="activity-item">
                        <img src="${escapeHtml(user.avatar)}" alt="${escapeHtml(user.name)}" class="activity-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0284c7&color=fff'">
                        <div class="activity-details">
                            <p><strong>${escapeHtml(user.name)}</strong> ${act.text}</p>
                            <span class="activity-time"><i class="fa-regular fa-clock"></i> ${escapeHtml(act.timestamp)}</span>
                        </div>
                    </div>
                `;
            }).join("");
        }
    }

    updateNavBadges();

    setTimeout(() => {
        chartManager.updateDashboardCharts();
    }, 50);
}

function updateNavBadges() {
    const projects = appState.getProjects();
    const tasks = appState.getTasks();
    const members = appState.getMembers();

    const pBadge = document.getElementById("badgeProjectCount");
    const tBadge = document.getElementById("badgeTaskCount");
    const mBadge = document.getElementById("badgeTeamCount");

    if (pBadge) pBadge.textContent = projects.length;
    if (tBadge) tBadge.textContent = tasks.length;
    if (mBadge) mBadge.textContent = members.length;

    // Quick links in sidebar
    const quickList = document.getElementById("sidebarProjectQuickList");
    if (quickList) {
        quickList.innerHTML = projects.slice(0, 5).map(p => `
            <li class="quick-project-item" onclick="openProjectDetails(${p.id})">
                <span class="quick-project-dot" style="background-color: ${p.status === 'Completed' ? '#22c55e' : (p.status === 'Running' ? '#0284c7' : '#ea580c')}"></span>
                <span class="text-truncate">${escapeHtml(p.name)}</span>
            </li>
        `).join("");
    }
}

// ----------------------------------------------------------------------------
// 8. PROJECTS MODULE (Matching Screenshot 25111 Table & Cards)
// ----------------------------------------------------------------------------
let projectFilter = "all";
let projectSearchQuery = "";
let projectViewMode = "table"; // 'table' or 'card'

function renderProjects() {
    const allProjects = appState.getProjects();
    const tableBody = document.getElementById("projectTableBody");
    const cardContainer = document.getElementById("projectsContainer");
    const emptyState = document.getElementById("projectsEmptyState");
    const tableView = document.getElementById("projectTableViewContainer");

    // Filter counts update
    const cAll = allProjects.length;
    const cRunning = allProjects.filter(p => p.status === "Running").length;
    const cCompleted = allProjects.filter(p => p.status === "Completed").length;
    const cPending = allProjects.filter(p => p.status === "Pending").length;

    document.getElementById("countFilterAll").textContent = cAll;
    document.getElementById("countFilterRunning").textContent = cRunning;
    document.getElementById("countFilterCompleted").textContent = cCompleted;
    document.getElementById("countFilterPending").textContent = cPending;

    // Filter by status and search
    let filtered = allProjects.filter(p => {
        if (projectFilter !== "all" && p.status !== projectFilter) return false;
        if (projectSearchQuery) {
            const q = projectSearchQuery.toLowerCase();
            const inName = p.name.toLowerCase().includes(q);
            const inTech = (p.technology || "").toLowerCase().includes(q);
            const inMembers = (p.members || []).join(" ").toLowerCase().includes(q);
            return inName || inTech || inMembers;
        }
        return true;
    });

    if (filtered.length === 0) {
        if (tableView) tableView.style.display = "none";
        if (cardContainer) cardContainer.style.display = "none";
        if (emptyState) emptyState.style.display = "block";
        return;
    }

    if (emptyState) emptyState.style.display = "none";

    // Table View Render (Matching Screenshot 25111)
    if (tableBody) {
        tableBody.innerHTML = filtered.map(p => {
            const statusClass = p.status.toLowerCase();
            return `
                <tr>
                    <td><strong>${escapeHtml(p.name)}</strong></td>
                    <td>${escapeHtml(p.technology)}</td>
                    <td>${escapeHtml((p.members || []).join(", "))}</td>
                    <td><span class="status-pill status-${statusClass}">${escapeHtml(p.status)}</span></td>
                    <td class="text-right">
                        <button class="delete-action-btn" title="Delete Project" onclick="confirmDeleteProject(${p.id})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join("");
    }

    // Card View Render
    if (cardContainer) {
        cardContainer.innerHTML = filtered.map(p => `
            <div class="project-card">
                <div>
                    <div class="project-card-header">
                        <span class="status-pill status-${p.status.toLowerCase()}">${p.status}</span>
                        <button class="icon-btn-xs text-danger" title="Delete" onclick="confirmDeleteProject(${p.id})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <h3 class="project-card-title">${escapeHtml(p.name)}</h3>
                    <p class="text-muted" style="font-size: 0.85rem; margin: 0.4rem 0;">Tech: ${escapeHtml(p.technology)}</p>
                    <div style="margin: 0.6rem 0;">
                        ${(p.members || []).map(m => `<span class="badge badge-subtle" style="margin-right: 4px;">${escapeHtml(m)}</span>`).join("")}
                    </div>
                </div>
            </div>
        `).join("");
    }

    if (projectViewMode === "table") {
        if (tableView) tableView.style.display = "block";
        if (cardContainer) cardContainer.style.display = "none";
    } else {
        if (tableView) tableView.style.display = "none";
        if (cardContainer) cardContainer.style.display = "grid";
    }
}

function filterProjectsByStatus(status) {
    navigateToView("projects");
    projectFilter = status;
    document.querySelectorAll("#projectStatusFilters .filter-pill").forEach(p => {
        if (p.dataset.filter === status) p.classList.add("active");
        else p.classList.remove("active");
    });
    renderProjects();
}

function openProjectDetails(projectId) {
    navigateToView("projects");
    projectFilter = "all";
    document.querySelectorAll("#projectStatusFilters .filter-pill").forEach(p => p.classList.remove("active"));
    document.querySelector("#projectStatusFilters .filter-pill[data-filter='all']")?.classList.add("active");
    renderProjects();
}

function confirmDeleteProject(id) {
    const proj = appState.getProjectById(id);
    if (!proj) return;

    openConfirmModal(
        "Delete Project",
        `Are you sure you want to delete "${proj.name}"?`,
        () => {
            appState.deleteProject(id);
            showToast("Project Deleted", `"${proj.name}" removed successfully.`, "warning");
            renderProjects();
            renderDashboard();
            renderTeamTables();
        }
    );
}

// ----------------------------------------------------------------------------
// 9. DEDICATED ADD PROJECT FORM (Matching Screenshot 25112)
// ----------------------------------------------------------------------------
function initDedicatedAddProjectForm() {
    const form = document.getElementById("dedicatedAddProjectForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("dedProjectName");
        const techInput = document.getElementById("dedTechnology");
        const membersInput = document.getElementById("dedMembers");
        const statusSelect = document.getElementById("dedStatus");

        const name = nameInput.value.trim();
        const tech = techInput.value.trim();
        const membersStr = membersInput.value.trim();
        const status = statusSelect.value;

        // Validation
        let hasError = false;
        if (!name) {
            document.getElementById("errDedProjectName").style.display = "block";
            hasError = true;
        } else {
            document.getElementById("errDedProjectName").style.display = "none";
        }

        if (!tech) {
            document.getElementById("errDedTechnology").style.display = "block";
            hasError = true;
        } else {
            document.getElementById("errDedTechnology").style.display = "none";
        }

        const membersArr = membersStr.split(",").map(m => m.trim()).filter(Boolean);
        if (membersArr.length === 0) {
            document.getElementById("errDedMembers").style.display = "block";
            hasError = true;
        } else {
            document.getElementById("errDedMembers").style.display = "none";
        }

        if (hasError) return;

        // Add Project
        appState.addProject(name, tech, membersArr, status);
        showToast("Project Added", `"${name}" added successfully!`, "success");

        form.reset();

        // Refresh stats, tables, and charts
        renderTeamTables();
        renderDashboard();
        renderProjects();

        // Navigate to Projects view to see the new item in table
        navigateToView("projects");
    });
}

// ----------------------------------------------------------------------------
// 10. TASK MANAGEMENT MODULE (KANBAN BOARD)
// ----------------------------------------------------------------------------
let taskViewMode = "kanban";
let taskFilterProjectVal = "all";
let taskFilterPriorityVal = "all";
let taskFilterAssigneeVal = "all";
let taskSearchQuery = "";

function renderTasks() {
    populateTaskFilterDropdowns();

    const allTasks = appState.getTasks();
    const emptyState = document.getElementById("tasksEmptyState");
    const kanbanView = document.getElementById("kanbanBoardView");
    const listView = document.getElementById("taskListView");

    const filtered = allTasks.filter(t => {
        if (taskFilterProjectVal !== "all" && t.projectId != taskFilterProjectVal) return false;
        if (taskFilterPriorityVal !== "all" && t.priority !== taskFilterPriorityVal) return false;
        if (taskFilterAssigneeVal !== "all" && t.assigneeName !== taskFilterAssigneeVal) return false;
        if (taskSearchQuery) {
            const q = taskSearchQuery.toLowerCase();
            return t.title.toLowerCase().includes(q);
        }
        return true;
    });

    if (filtered.length === 0) {
        if (emptyState) emptyState.style.display = "block";
        if (kanbanView) kanbanView.style.display = "none";
        if (listView) listView.style.display = "none";
        return;
    }

    if (emptyState) emptyState.style.display = "none";

    if (taskViewMode === "kanban") {
        if (kanbanView) kanbanView.style.display = "grid";
        if (listView) listView.style.display = "none";
        renderKanbanColumns(filtered);
    } else {
        if (kanbanView) kanbanView.style.display = "none";
        if (listView) listView.style.display = "block";
        renderTaskTable(filtered);
    }
}

function populateTaskFilterDropdowns() {
    const projSelect = document.getElementById("taskFilterProject");
    const assignSelect = document.getElementById("taskFilterAssignee");
    if (!projSelect || !assignSelect) return;

    const projects = appState.getProjects();
    const members = appState.getMembers();

    projSelect.innerHTML = `<option value="all">All Projects (${projects.length})</option>` +
        projects.map(p => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join("");

    assignSelect.innerHTML = `<option value="all">All Assignees (${members.length})</option>` +
        members.map(m => `<option value="${m.name}">${escapeHtml(m.name)}</option>`).join("");
}

function renderKanbanColumns(tasks) {
    const colTodo = document.getElementById("colListTodo");
    const colProg = document.getElementById("colListProgress");
    const colComp = document.getElementById("colListCompleted");

    const todoTasks = tasks.filter(t => t.status === "To Do");
    const progTasks = tasks.filter(t => t.status === "In Progress");
    const compTasks = tasks.filter(t => t.status === "Completed");

    document.getElementById("countColTodo").textContent = todoTasks.length;
    document.getElementById("countColProgress").textContent = progTasks.length;
    document.getElementById("countColCompleted").textContent = compTasks.length;

    colTodo.innerHTML = todoTasks.map(t => createKanbanCardHtml(t)).join("");
    colProg.innerHTML = progTasks.map(t => createKanbanCardHtml(t)).join("");
    colComp.innerHTML = compTasks.map(t => createKanbanCardHtml(t)).join("");

    initKanbanDragAndDrop();
}

function createKanbanCardHtml(task) {
    const project = appState.getProjectById(task.projectId) || { name: "General Project" };
    const member = appState.getMemberByName(task.assigneeName) || {
        name: task.assigneeName || "Kavya",
        avatar: "assets/images/kavya-profile.jpg"
    };

    let quickActionBtn = "";
    if (task.status === "To Do") {
        quickActionBtn = `<button class="task-quick-status-btn" onclick="quickChangeTaskStatus('${task.id}', 'In Progress')">Start <i class="fa-solid fa-arrow-right"></i></button>`;
    } else if (task.status === "In Progress") {
        quickActionBtn = `<button class="task-quick-status-btn text-success" onclick="quickChangeTaskStatus('${task.id}', 'Completed')">Done <i class="fa-solid fa-circle-check"></i></button>`;
    } else {
        quickActionBtn = `<button class="task-quick-status-btn text-muted" onclick="quickChangeTaskStatus('${task.id}', 'In Progress')"><i class="fa-solid fa-rotate-left"></i> Reopen</button>`;
    }

    return `
        <div class="kanban-card" draggable="true" data-task-id="${task.id}">
            <div class="kanban-card-top">
                <span class="task-project-pill" title="${escapeHtml(project.name)}">${escapeHtml(project.name)}</span>
                <span class="priority-badge priority-${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span>
            </div>
            <h4 class="kanban-card-title">${escapeHtml(task.title)}</h4>
            <div class="kanban-card-footer">
                <div class="task-assignee-wrap">
                    <img src="${escapeHtml(member.avatar)}" alt="${escapeHtml(member.name)}" class="task-assignee-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0284c7&color=fff'">
                    <span class="task-assignee-name">${escapeHtml(member.name)}</span>
                </div>
                <div class="task-deadline">
                    <i class="fa-regular fa-clock"></i> ${task.deadline || 'Nov 30'}
                </div>
            </div>
            <div class="kanban-card-actions">
                ${quickActionBtn}
                <button class="icon-btn-xs text-danger" title="Delete" onclick="deleteTaskAction('${task.id}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    `;
}

function renderTaskTable(tasks) {
    const tbody = document.getElementById("taskTableBody");
    if (!tbody) return;

    tbody.innerHTML = tasks.map(t => {
        const project = appState.getProjectById(t.projectId) || { name: "General" };
        return `
            <tr>
                <td><strong>${escapeHtml(t.title)}</strong></td>
                <td><span class="badge badge-subtle">${escapeHtml(project.name)}</span></td>
                <td>${escapeHtml(t.assigneeName)}</td>
                <td><span class="priority-badge priority-${t.priority.toLowerCase()}">${t.priority}</span></td>
                <td>${t.deadline || 'N/A'}</td>
                <td>
                    <select class="form-control" style="padding: 2px 6px; font-size: 0.8rem;" onchange="quickChangeTaskStatus('${t.id}', this.value)">
                        <option value="To Do" ${t.status === 'To Do' ? 'selected' : ''}>To Do</option>
                        <option value="In Progress" ${t.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                        <option value="Completed" ${t.status === 'Completed' ? 'selected' : ''}>Completed</option>
                    </select>
                </td>
                <td class="text-right">
                    <button class="icon-btn-xs text-danger" onclick="deleteTaskAction('${t.id}')">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join("");
}

function initKanbanDragAndDrop() {
    const cards = document.querySelectorAll(".kanban-card");
    const columns = document.querySelectorAll(".kanban-cards-list");

    cards.forEach(card => {
        card.addEventListener("dragstart", (e) => {
            card.classList.add("dragging");
            e.dataTransfer.setData("text/plain", card.dataset.taskId);
        });
        card.addEventListener("dragend", () => card.classList.remove("dragging"));
    });

    columns.forEach(col => {
        col.addEventListener("dragover", (e) => {
            e.preventDefault();
            col.style.backgroundColor = "rgba(2, 132, 199, 0.08)";
        });
        col.addEventListener("dragleave", () => col.style.backgroundColor = "");
        col.addEventListener("drop", (e) => {
            e.preventDefault();
            col.style.backgroundColor = "";
            const taskId = e.dataTransfer.getData("text/plain");
            const targetStatus = col.dataset.status;
            if (taskId && targetStatus) {
                quickChangeTaskStatus(taskId, targetStatus);
            }
        });
    });
}

function quickChangeTaskStatus(taskId, newStatus) {
    appState.updateTask(taskId, { status: newStatus });
    showToast("Status Updated", `Task moved to ${newStatus}`, "info");
    renderTasks();
}

function deleteTaskAction(id) {
    appState.deleteTask(id);
    showToast("Task Removed", "Task deleted successfully.", "warning");
    renderTasks();
}

function openNewTaskModalWithStatus(status) {
    const form = document.getElementById("taskForm");
    if (!form) return;
    form.reset();
    document.getElementById("taskId").value = "";
    document.getElementById("taskStatus").value = status || "To Do";

    // Populate project and assignee dropdowns
    const projSelect = document.getElementById("taskProject");
    const assignSelect = document.getElementById("taskAssignee");
    const projects = appState.getProjects();
    const members = appState.getMembers();

    projSelect.innerHTML = `<option value="" disabled selected>Select Project</option>` +
        projects.map(p => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join("");

    assignSelect.innerHTML = `<option value="" disabled selected>Select Assignee</option>` +
        members.map(m => `<option value="${m.name}">${escapeHtml(m.name)}</option>`).join("");

    openModal("modalTask");
}

function saveTaskHandler(e) {
    e.preventDefault();
    const title = document.getElementById("taskTitle").value.trim();
    const projId = document.getElementById("taskProject").value;
    const assignee = document.getElementById("taskAssignee").value;
    const priority = document.getElementById("taskPriority").value;
    const status = document.getElementById("taskStatus").value;
    const deadline = document.getElementById("taskDeadline").value;

    if (!title || !projId || !assignee) {
        showToast("Validation Error", "Please fill in all required task fields.", "error");
        return;
    }

    appState.addTask({
        title,
        projectId: projId,
        assigneeName: assignee,
        priority,
        status,
        deadline
    });

    closeModal("modalTask");
    showToast("Task Created", `"${title}" has been scheduled.`, "success");
    renderTasks();
}

// ----------------------------------------------------------------------------
// 11. REPORTS MODULE
// ----------------------------------------------------------------------------
function renderReports() {
    const projects = appState.getProjects();
    const tasks = appState.getTasks();

    const completed = projects.filter(p => p.status === "Completed").length;
    const running = projects.filter(p => p.status === "Running").length;
    const overallPct = projects.length > 0 ? Math.round((completed / projects.length) * 100) : 0;

    document.getElementById("repOverallCompletion").textContent = `${overallPct}%`;
    document.getElementById("repCompletedItems").textContent = completed;
    document.getElementById("repHighPriorityCount").textContent = running;

    const tbody = document.getElementById("reportProjectsTableBody");
    if (tbody) {
        tbody.innerHTML = projects.map(p => `
            <tr>
                <td><strong>${escapeHtml(p.name)}</strong></td>
                <td><span class="status-pill status-${p.status.toLowerCase()}">${p.status}</span></td>
                <td>${escapeHtml(p.technology)}</td>
                <td>${escapeHtml((p.members || []).join(", "))}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 0.5rem; min-width: 110px;">
                        <div class="meter-bar" style="flex: 1;"><div class="meter-fill" style="width: ${p.progress}%;"></div></div>
                        <small><strong>${p.progress}%</strong></small>
                    </div>
                </td>
            </tr>
        `).join("");
    }

    setTimeout(() => chartManager.updateReportsCharts(), 50);
}

function exportCSVReport() {
    const projects = appState.getProjects();
    let csvContent = "data:text/csv;charset=utf-8,ID,Project Name,Technology,Group Members,Status,Progress\n";

    projects.forEach(p => {
        const safeName = `"${p.name.replace(/"/g, '""')}"`;
        const safeTech = `"${p.technology.replace(/"/g, '""')}"`;
        const safeMem = `"${(p.members || []).join(', ')}"`;
        csvContent += `${p.id},${safeName},${safeTech},${safeMem},${p.status},${p.progress}%\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `sri_kavya_projects_report_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("CSV Exported", "Project summary downloaded successfully!", "success");
}

// ----------------------------------------------------------------------------
// 12. GLOBAL SEARCH FUNCTIONALITY
// ----------------------------------------------------------------------------
function initGlobalSearch() {
    const input = document.getElementById("globalSearchInput");
    const clearBtn = document.getElementById("searchClearBtn");
    const dropdown = document.getElementById("searchResultsDropdown");

    if (!input || !dropdown) return;

    document.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
            e.preventDefault();
            input.focus();
        }
    });

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        if (query.length > 0) {
            clearBtn.style.display = "block";
            performSearch(query, dropdown);
        } else {
            clearBtn.style.display = "none";
            dropdown.style.display = "none";
        }
    });

    clearBtn.addEventListener("click", () => {
        input.value = "";
        clearBtn.style.display = "none";
        dropdown.style.display = "none";
        input.focus();
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".global-search-bar")) {
            dropdown.style.display = "none";
        }
    });
}

function performSearch(query, dropdown) {
    const projects = appState.getProjects().filter(p =>
        p.name.toLowerCase().includes(query) || (p.technology || "").toLowerCase().includes(query)
    );
    const members = appState.getMembers().filter(m =>
        m.name.toLowerCase().includes(query) || (m.role || "").toLowerCase().includes(query)
    );

    if (projects.length === 0 && members.length === 0) {
        dropdown.innerHTML = `<div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No matching results for "${escapeHtml(query)}"</div>`;
        dropdown.style.display = "block";
        return;
    }

    let html = "";
    if (projects.length > 0) {
        html += `<div class="search-result-group-title">Projects (${projects.length})</div>`;
        projects.slice(0, 4).forEach(p => {
            html += `
                <div class="search-result-item" onclick="openProjectDetails(${p.id})">
                    <div class="search-result-info">
                        <h5><i class="fa-solid fa-folder text-primary"></i> ${escapeHtml(p.name)}</h5>
                        <p>${p.status} • Tech: ${escapeHtml(p.technology)}</p>
                    </div>
                    <span class="status-pill status-${p.status.toLowerCase()}">${p.status}</span>
                </div>
            `;
        });
    }

    if (members.length > 0) {
        html += `<div class="search-result-group-title">Team Members (${members.length})</div>`;
        members.slice(0, 3).forEach(m => {
            html += `
                <div class="search-result-item" onclick="viewMemberDetails('${m.name}')">
                    <div class="search-result-info">
                        <h5><i class="fa-solid fa-user text-success"></i> ${escapeHtml(m.fullName || m.name)}</h5>
                        <p>${m.role}</p>
                    </div>
                </div>
            `;
        });
    }

    dropdown.innerHTML = html;
    dropdown.style.display = "block";
}

// ----------------------------------------------------------------------------
// 13. MEMBER DETAILS & MODAL HELPERS
// ----------------------------------------------------------------------------
function viewMemberDetails(memberName) {
    const mem = appState.getMemberByName(memberName) || {
        name: memberName,
        fullName: memberName,
        role: "Team Contributor",
        avatar: "https://ui-avatars.com/api/?name=" + encodeURIComponent(memberName) + "&background=0284c7&color=fff&bold=true",
        skills: ["Web Development", "Teamwork"]
    };

    const stats = calculateTeamStatistics();
    const mStat = stats[memberName] || { projects: 0, completed: 0, running: 0, pending: 0 };
    const memberProjects = appState.getProjects().filter(p => (p.members || []).includes(memberName));

    const content = document.getElementById("memberDetailContent");
    content.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color);">
            <img src="${escapeHtml(mem.avatar)}" alt="${escapeHtml(mem.name)}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid #38bdf8;" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(mem.name)}&background=0284c7&color=fff&bold=true'">
            <div>
                <h2 style="font-size: 1.4rem; font-weight: 800;">${escapeHtml(mem.fullName || mem.name)}</h2>
                <div style="color: #0284c7; font-weight: 600; font-size: 0.95rem;">${escapeHtml(mem.role)}</div>
                <div style="color: var(--text-muted); font-size: 0.82rem; margin-top: 3px;">Email: ${escapeHtml(mem.email || memberName.toLowerCase() + '@example.com')}</div>
            </div>
        </div>

        <div class="metrics-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 1.5rem;">
            <div class="metric-card metric-blue" style="padding: 1rem;"><div class="metric-data"><span class="metric-title">Total</span><div class="metric-number">${mStat.projects}</div></div></div>
            <div class="metric-card metric-emerald" style="padding: 1rem;"><div class="metric-data"><span class="metric-title">Completed</span><div class="metric-number">${mStat.completed}</div></div></div>
            <div class="metric-card metric-cyan" style="padding: 1rem;"><div class="metric-data"><span class="metric-title">Running</span><div class="metric-number">${mStat.running}</div></div></div>
            <div class="metric-card metric-amber" style="padding: 1rem;"><div class="metric-data"><span class="metric-title">Pending</span><div class="metric-number">${mStat.pending}</div></div></div>
        </div>

        <div class="chart-card">
            <h4>Assigned Projects (${memberProjects.length})</h4>
            <ul style="margin-top: 0.8rem; display: flex; flex-direction: column; gap: 0.5rem;">
                ${memberProjects.length ? memberProjects.map(p => `
                    <li style="display: flex; justify-content: space-between; align-items: center; padding: 0.4rem 0; border-bottom: 1px solid var(--border-light);">
                        <span><strong>${escapeHtml(p.name)}</strong> (${p.technology})</span>
                        <span class="status-pill status-${p.status.toLowerCase()}">${p.status}</span>
                    </li>
                `).join("") : '<span class="text-muted">No projects currently assigned</span>'}
            </ul>
        </div>
    `;

    openModal("modalMemberDetail");
}

let confirmCallback = null;

function openConfirmModal(title, message, onConfirm) {
    document.getElementById("confirmModalTitle").innerHTML = `<i class="fa-solid fa-triangle-exclamation text-danger"></i> ${escapeHtml(title)}`;
    document.getElementById("confirmModalMessage").textContent = message;
    confirmCallback = onConfirm;
    openModal("modalConfirm");
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }
}

// ----------------------------------------------------------------------------
// 14. THEME TOGGLE (Matches '🌙' and '☀️' in Sample)
// ----------------------------------------------------------------------------
function initTheme() {
    const saved = localStorage.getItem(THEME_KEY) || "light";
    setTheme(saved);

    const btn = document.getElementById("themeToggleBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme");
            const next = current === "dark" ? "light" : "dark";
            setTheme(next);
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);

    const icon = document.getElementById("themeIcon");
    if (icon) {
        icon.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    setTimeout(() => {
        if (currentView === "dashboard") chartManager.updateDashboardCharts();
        if (currentView === "skills") chartManager.updateSkillsCharts();
        if (currentView === "reports") chartManager.updateReportsCharts();
    }, 80);
}

// ----------------------------------------------------------------------------
// 15. MOBILE SIDEBAR DRAWER
// ----------------------------------------------------------------------------
function initMobileSidebar() {
    const menuBtn = document.getElementById("mobileMenuBtn");
    const closeBtn = document.getElementById("sidebarCloseBtn");
    const backdrop = document.getElementById("sidebarBackdrop");
    const sidebar = document.getElementById("sidebar");

    if (menuBtn && sidebar && backdrop) {
        menuBtn.addEventListener("click", () => {
            sidebar.classList.add("open");
            backdrop.classList.add("show");
        });
    }
    if (closeBtn) closeBtn.addEventListener("click", closeMobileSidebar);
    if (backdrop) backdrop.addEventListener("click", closeMobileSidebar);
}

function closeMobileSidebar() {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebarBackdrop");
    if (sidebar) sidebar.classList.remove("open");
    if (backdrop) backdrop.classList.remove("show");
}

// ----------------------------------------------------------------------------
// 16. INITIALIZATION & GLOBAL LISTENERS
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Theme
    initTheme();

    // 2. Setup Navigation
    document.querySelectorAll(".sidebar-nav .nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetView = link.dataset.view;
            if (targetView) navigateToView(targetView);
        });
    });

    // 3. Dropdown Controls
    const quickCreateBtn = document.getElementById("btnQuickCreateToggle");
    const quickCreateMenu = document.getElementById("quickCreateMenu");
    const notifBtn = document.getElementById("notificationToggleBtn");
    const notifDropdown = document.getElementById("notificationDropdown");

    if (quickCreateBtn && quickCreateMenu) {
        quickCreateBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            quickCreateMenu.classList.toggle("show");
            if (notifDropdown) notifDropdown.classList.remove("show");
        });
    }

    if (notifBtn && notifDropdown) {
        notifBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            notifDropdown.classList.toggle("show");
            if (quickCreateMenu) quickCreateMenu.classList.remove("show");
        });
    }

    document.addEventListener("click", () => {
        if (quickCreateMenu) quickCreateMenu.classList.remove("show");
        if (notifDropdown) notifDropdown.classList.remove("show");
    });

    // 4. Quick Create Links
    document.getElementById("quickAddProjectBtn")?.addEventListener("click", (e) => {
        e.preventDefault();
        navigateToView("addProject");
    });
    document.getElementById("quickAddTaskBtn")?.addEventListener("click", (e) => {
        e.preventDefault();
        openNewTaskModalWithStatus("To Do");
    });
    document.getElementById("quickAddMemberBtn")?.addEventListener("click", (e) => {
        e.preventDefault();
        openModal("modalMember");
    });

    // 5. Dashboard Action Buttons
    document.getElementById("dashAddProjectBtn")?.addEventListener("click", () => navigateToView("addProject"));
    document.getElementById("btnOpenResumeModal")?.addEventListener("click", () => openModal("modalResume"));

    // 6. Project View Switcher (Table vs Card)
    const btnTable = document.getElementById("btnProjectTableView");
    const btnCards = document.getElementById("btnProjectCardView");
    if (btnTable && btnCards) {
        btnTable.addEventListener("click", () => {
            btnTable.classList.add("active");
            btnCards.classList.remove("active");
            projectViewMode = "table";
            renderProjects();
        });
        btnCards.addEventListener("click", () => {
            btnCards.classList.add("active");
            btnTable.classList.remove("active");
            projectViewMode = "card";
            renderProjects();
        });
    }

    // Project Status Filter Pills
    document.querySelectorAll("#projectStatusFilters .filter-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            document.querySelectorAll("#projectStatusFilters .filter-pill").forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            projectFilter = pill.dataset.filter;
            renderProjects();
        });
    });

    // Project Search Input
    document.getElementById("projectSearchInput")?.addEventListener("input", (e) => {
        projectSearchQuery = e.target.value.trim();
        renderProjects();
    });

    // 7. Initialize Dedicated Add Project Form
    initDedicatedAddProjectForm();

    // 8. Task Management Handlers
    document.getElementById("btnOpenNewTaskModal")?.addEventListener("click", () => openNewTaskModalWithStatus("To Do"));
    document.getElementById("emptyAddTaskBtn")?.addEventListener("click", () => openNewTaskModalWithStatus("To Do"));
    document.getElementById("taskForm")?.addEventListener("submit", saveTaskHandler);

    const btnKanban = document.getElementById("btnViewKanban");
    const btnList = document.getElementById("btnViewList");
    if (btnKanban && btnList) {
        btnKanban.addEventListener("click", () => {
            btnKanban.classList.add("active");
            btnList.classList.remove("active");
            taskViewMode = "kanban";
            renderTasks();
        });
        btnList.addEventListener("click", () => {
            btnList.classList.add("active");
            btnKanban.classList.remove("active");
            taskViewMode = "list";
            renderTasks();
        });
    }

    document.getElementById("taskFilterProject")?.addEventListener("change", (e) => {
        taskFilterProjectVal = e.target.value;
        renderTasks();
    });
    document.getElementById("taskFilterPriority")?.addEventListener("change", (e) => {
        taskFilterPriorityVal = e.target.value;
        renderTasks();
    });
    document.getElementById("taskFilterAssignee")?.addEventListener("change", (e) => {
        taskFilterAssigneeVal = e.target.value;
        renderTasks();
    });
    document.getElementById("taskSearchInput")?.addEventListener("input", (e) => {
        taskSearchQuery = e.target.value.trim();
        renderTasks();
    });

    // 9. Team Search Input
    document.getElementById("teamSearchInput")?.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const rows = document.querySelectorAll("#teamTableBody tr");
        rows.forEach(r => {
            const text = r.innerText.toLowerCase();
            r.style.display = text.includes(query) ? "" : "none";
        });
    });

    // Add Member Form Handler
    document.getElementById("btnOpenNewMemberModal")?.addEventListener("click", () => openModal("modalMember"));
    document.getElementById("memberForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("memberName").value.trim();
        const email = document.getElementById("memberEmail").value.trim();
        const role = document.getElementById("memberRole").value.trim();
        const skills = document.getElementById("memberSkills").value.trim();

        if (name && email && role) {
            appState.addMember(name, email, role, skills);
            closeModal("modalMember");
            showToast("Member Added", `${name} added to team!`, "success");
            renderTeamTables();
        }
    });

    // 10. Reports Actions
    document.getElementById("btnPrintReport")?.addEventListener("click", () => window.print());
    document.getElementById("btnExportCSV")?.addEventListener("click", exportCSVReport);

    // 11. Modal Delete Confirmation Button
    document.getElementById("btnConfirmDeleteAction")?.addEventListener("click", () => {
        if (typeof confirmCallback === "function") {
            confirmCallback();
            confirmCallback = null;
        }
        closeModal("modalConfirm");
    });

    // Modal Close Buttons
    document.querySelectorAll("[data-close-modal]").forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.dataset.closeModal;
            if (modalId) closeModal(modalId);
        });
    });

    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) {
                backdrop.classList.remove("show");
                document.body.style.overflow = "";
            }
        });
    });

    // 12. Reset Sample Data Button
    document.getElementById("btnResetDemoData")?.addEventListener("click", () => {
        openConfirmModal(
            "Reset Sample Data",
            "This will restore all projects, tasks, and team members to their default state matching Sri Kavya's resume. Continue?",
            () => {
                appState.resetToDemoData();
                showToast("Data Reset", "Sample resume data restored!", "info");
                navigateToView("dashboard");
                renderTeamTables();
            }
        );
    });

    // Clear Activity Feed
    document.getElementById("btnClearActivityLogs")?.addEventListener("click", () => {
        appState.clearActivities();
        renderDashboard();
        showToast("Activity Feed", "Activity log cleared.", "info");
    });

    // 13. Mobile Drawer & Global Search
    initMobileSidebar();
    initGlobalSearch();

    // 14. Initial Render
    navigateToView("dashboard");
    renderTeamTables();
});
