# Team Collaboration Dashboard & Portfolio

**Developed by:** Sri Kavya Manne  
**Role:** Computer Science & Engineering (B.Tech 2023–2027)  
**Institution:** Ashoka Women's Engineering College, JNTUA (CGPA: 8.2)  
**Contact:** [msrikavyachowdary064@gmail.com](mailto:msrikavyachowdary064@gmail.com) | +91 6303939250  
**Profiles:** [GitHub](https://github.com/msrikavya8) | [LinkedIn](https://linkedin.com/in/sri-kavya)  

---

## 🎯 Direct Alignment with Resume

This project embodies the specifications outlined in your resume and reference sample:

> **Project Description from Resume:**
> - *Developed a web dashboard to organize projects, team members, and project statuses in one interface.*
> - *Implemented project add, search, and delete functions, with Completed, Running, and Pending status tracking.*
> - *Presented project progress, technology skills, and team-member contributions through visual summaries.*

---

## 🚀 Key Modules & Interactive Features

### 1. Unified Dashboard
- **4 Primary Metric Cards**: Total Projects (`8`), Completed (`5`), Running (`2`), and Pending (`1`).
- **Project Progress Chart**: Visualizes proficiency and progress across key technologies (**HTML**, **CSS**, **JavaScript**, **Java**, **SQL**, and **Python**) matching your reference bar chart.
- **Project Status Distribution**: Doughnut chart showing proportional breakdown of **Completed** (Green), **Running** (Blue), and **Pending** (Amber/Red).
- **Team Member Contribution Chart**: Grouped bar chart comparing projects and milestones delivered across team members (**Kavya**, **Usha**, **Renuka**, **Jahnavi**, **Lahari**, **Jhansi**, **Kovela**).
- **Live Activity Audit Feed**: Real-time event log tracking updates and milestone achievements.

### 2. Profile & Resume Showcase
- Professional avatar with direct link to your real photo (`assets/images/kavya-profile.jpg`).
- Bio and Academic Background cards:
  - **B.Tech CSE (2023–2027)**, Ashoka Women's Engineering College, JNTUA (CGPA: 8.2)
  - **Senior Secondary (CBSE, MPC)**, The Nandyal Public School, RGM (CGPA: 7.8)
  - **Secondary Education (CBSE)**, The Nandyal Public School, RGM (CGPA: 8.4)
- **View & Download Resume Modal**: Interactive modal displaying your resume with a one-click print feature (`window.print()`).

### 3. Project Management (Full CRUD)
- **Table View (Matching Reference Output)**: High-density layout displaying Project Name, Technology, Group Members, Status Badges, and Delete Actions.
- **Card View Toggle**: Clean card grid layout with progress meters and quick controls.
- **Status Filter Pills**: Instant one-click filtering by **All**, **Running**, **Completed**, and **Pending**.
- **Real-Time Search**: Filters dynamically by project title, programming stack, or assigned group member.
- **Safe Delete Modal**: Custom confirmation dialog prevents accidental record loss.

### 4. Dedicated "Add Project" Module
- Form fields: **Project Name**, **Technology**, **Group Members** (comma-separated), and **Project Status** (`Running`, `Completed`, `Pending`).
- **Live Workload Sync**: Displays the **Team Members Workload Summary** table directly below the form, showing automatic updates to individual project counts.
- Full validation for required inputs.

### 5. Tasks & Kanban Board
- 3-column sprint board: **To Do**, **In Progress**, and **Completed**.
- **HTML5 Drag-and-Drop**: Drag task cards between status columns with automatic status updates.
- Quick status transition buttons (`Start →`, `Done ✓`, `Reopen ↺`).
- Priority badges: High (Red), Medium (Amber), and Low (Green).

### 6. Technical Skills Summary
- Chart.js bar chart displaying technical skill mastery.
- Categorized skill meter cards:
  - **Programming**: Java (85%), Python (80%), C Language (75%)
  - **Web Technologies**: HTML5 (95%), CSS3 (90%), JavaScript (80%)
  - **Databases & BI**: SQL/DBMS (80%), Excel & Power BI (85%)

### 7. Verified Certifications
Structured credential cards with verified badges:
1. **Java Programming** — CodeChef
2. **SQL Certification** — Simplilearn
3. **Database Management Systems (DBMS)** — NPTEL
4. **Web Development** — NoviTech R&D Pvt. Ltd.
5. **Cloud Computing** — NPTEL
6. **Data Analytics** — Trekverse

### 8. Internship Experience (Trekverse Pvt. Ltd.)
Interactive showcase of your **Data Analytics Internship (July 2026)**:
- Organization: Trekverse Pvt. Ltd.
- Domain: Data Analytics
- Milestone: Cleaned and analyzed 500+ records using Excel and SQL
- Capstone Project: **Prediction of Rainfall** machine learning model
- Key Deliverables: 3 PivotTables, 3 Charts, 3 Dashboards
- Technologies: Python, Excel, Power BI, Tableau, SQL

### 9. Team Members Workload Breakdown
Live table showing:
- **Member** (Kavya, Usha, Renuka, Jahnavi, Lahari, Jhansi, Kovela)
- **Projects** (Total count)
- **Completed** (Count of completed projects)
- **Running** (Count of running projects)
- **Pending** (Count of pending projects)
- Detailed profile modal for each collaborator.

### 10. Reports & Analytics
- Workspace health scores, overall completion percentage, and team velocity.
- Monthly milestone delivery line chart.
- Task priority breakdown polar area chart.
- **Export to CSV**: Generates a downloadable `.csv` file.
- **Print Report**: Formatted print styling hiding UI controls.

### 11. Additional Features
- **Dark Mode / Light Mode**: Toggle with `🌙` / `☀️` stored in `localStorage`.
- **Global Search**: Search projects and members with the `/` hotkey shortcut.
- **Notification Dropdown**: Unread badge count and real-time updates.
- **Reset Sample Data**: Restore the baseline data anytime during an interview.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Structure** | Semantic HTML5, accessible modal dialogs, and SVG iconography. |
| **Styling & Theming** | CSS3, CSS Custom Properties (`--primary`, `--bg-app`), Flexbox, CSS Grid, media queries, print styling. |
| **Logic & State** | Vanilla JavaScript (ES6+), singleton State Manager, Drag-and-Drop API, DOM manipulation. |
| **Persistence** | HTML5 `localStorage` (auto-saves all CRUD operations). |
| **Data Visualization** | Chart.js v4.4.1 (responsive bar, doughnut, line, and polar area charts). |
| **Icons & Fonts** | Font Awesome 6.5.2, Google Fonts (*Plus Jakarta Sans*). |

---

## 💻 How to Run with VS Code Live Server

1. Open **Visual Studio Code**.
2. Click **File → Open Folder...** and choose:
   ```text
   C:\Users\M.Srikavya\OneDrive\Desktop\Team Collaboration Dashboard
   ```
3. Install the **Live Server** extension (by Ritwick Dey) if you don't already have it.
4. Right-click `index.html` and select **"Open with Live Server"** (or click **Go Live** in the status bar).
5. The application will launch at `http://127.0.0.1:5500/index.html`.

---

## 🎓 Placement Interview Talking Points

### 1. How did you organize the project architecture without React?
> *"I designed the application with a modular Vanilla JavaScript architecture. State management is encapsulated in a singleton `DashboardState` class that handles all data mutations and automatically synchronizes with HTML5 `localStorage`. This ensures data persistence across browser reloads while keeping the project lightweight with zero build overhead."*

### 2. How did you implement real-time team contribution calculations?
> *"The `calculateTeamStatistics()` function iterates through the projects dataset and dynamically aggregates project counts per member across their respective statuses: Completed, Running, and Pending. When a user adds or deletes a project, the summary table and the team performance chart update immediately."*

### 3. How did you ensure visual consistency and Chart.js responsiveness across dark/light mode?
> *"The layout uses CSS custom properties with a `[data-theme='dark']` attribute selector. When the user toggles the theme, the `ChartManager` queries the active theme variables and re-renders the charts with appropriate grid lines and typography colors to maintain optimal contrast."*
