# 🎯 Day 1: Full-Stack Todo App | 30-Day Full-Stack Challenge

<div align="center">
  
  ![Day 1 Progress](https://img.shields.io/badge/Challenge-Day%201%20of%2030-blueviolet?style=for-the-badge&logo=calendar)
  ![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
  ![React](https://img.shields.io/badge/Frontend-React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![MySQL](https://img.shields.io/badge/Database-MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

  <p align="center">
    <strong>"One Day, One Complete Full-Stack Project."</strong><br />
    <strong>Today: Todo App (Day 1)</strong> ➜ Yesterday: <i>The Idea Stage</i> ➜ Tomorrow: <i>Canvas Notes App (Day 2)</i>
  </p>

  <h4>
    <a href="#-the-project">The Project</a> •
    <a href="#-features">Features</a> •
    <a href="#-engineering-challenges-solved">Lessons Learned</a> •
    <a href="#-challenge-dashboard">Challenge Roadmap</a>
  </h4>
</div>

---

## 🎯 The Challenge & Project Target
Kickstarting an intensive 30-day architectural sprint, **Day 1** focuses on setting up the core foundation of full-stack engineering. The goal was to establish a bulletproof pipeline connecting an interactive user interface, synchronous RESTful API endpoints, and a relational database. 

This Todo App goes beyond typical local-storage setups by instantly recording, toggling, and flushing task items directly inside a permanent MySQL engine.

<div align="center">
  <img src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1000&q=80" alt="Todo App UI Preview" width="100%" style="border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
</div>

---

## ✨ Features Implemented (Within 24 Hours)

### ⚡ Live Status Toggling (State Synchronization)
- Tasks are saved with a structural boolean state (`completed: true/false`).
- Clicking a checkbox applies immediate CSS strike-through transitions on the frontend while triggering a swift HTTP `PUT` request to update the record in MySQL.

### 🧩 Reusable Component Architecture
- Divided the interface into structured sub-modules: a clean, semantic form handler to intake text values, and an isolated, map-rendered `<TodoItem />` component structure to abstract single task responsibilities.
- Configured real-time data flow using React arrays to add, cross-out, and instantly filter out deleted components without requiring a hard browser refresh.

---

## 🛠️ Tech Stack & Production Tooling
* **Frontend Core:** React 19, JavaScript (ES6+), Vite Build Tooling
* **Styling Matrix:** Tailwind CSS (Clean card rows, interactive check states, responsive flexboxes)
* **Backend Pipeline:** Spring Boot 3.x, Spring Data JPA, Hibernate Core
* **Data Layer:** MySQL Server, Relational Schema Mapping

---

## 🛑 Engineering Challenges Solved (Day 1 Battles)

When connecting a full stack from a blank terminal in under 24 hours, managing server handshakes is where the real learning happens. Day 1’s major breakthroughs included:

| Error / Challenge Faced | Root Cause | Architectural Solution |
| :--- | :--- | :--- |
| `CORS Policy Blocked Error` | The React client (`port 5173`) and Spring Boot server (`port 8080`) operate on different origins, making the browser block cross-origin requests. | Implemented the `@CrossOrigin(origins = "http://localhost:5173")` directive directly onto the backend RestControllers. |
| `Primary Key Assignment Fails` | Saving new tasks threw database constraint violations because Java objects were missing automatic key numbers. | Annotated the Entity model's primary key using `@GeneratedValue(strategy = GenerationType.IDENTITY)` to safely offload indexing to MySQL's auto-increment engine. |
| `State Desynchronization` | Deleting a task updated the database but the item remained visible on screen until manually reloading. | Fixed asynchronous callback timing. Reconfigured array operations to apply functional filtering arrays (`todos.filter(...)`) immediately after a successful `200 OK` server response. |

---

## 📅 The 30-Day Full-Stack Dashboard

Follow along with my daily progress as I build a new full-stack system every single day:

- [x] **Day 1: 🎯 Todo App — *Basic State, CORS Configurations & Relational DB Binding* (Current)**
- [ ] **Day 2:** 📝 Canvas Notes App — *Relational Entity Updates & Infinite Text Layouts*
- [ ] **Day 3:** 🚀 *Upcoming Project...*

---
<p align="center"><strong>The foundation is laid. Moving straight to Day 2 to escalate layout and entity complexities!</strong> 🔥</p>
