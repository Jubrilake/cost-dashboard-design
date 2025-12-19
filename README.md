# Cost Dashboard Design (FE-4)

## 📌 Overview

This project implements a **Cost Dashboard** that visualizes project spending data in an intuitive and user-friendly way. The goal is to help stakeholders quickly understand how costs evolve across phases, categories, and over time.

The dashboard focuses on **clarity, usability, and data-driven insights**, using visual components to communicate trends and breakdowns effectively.

---

## 🎯 Problem Statement

Design a dashboard that shows:

* **Cost by Phase** – Breakdown of total cost across different project phases
* **Cost by Category** – Distribution of cost by spending categories
* **Cumulative Cost vs Time** – How total cost accumulates over a timeline

---

## ✨ Features

* 📊 **Cost by Phase Chart**
  Visualizes how spending is distributed across each project phase.

* 🧾 **Cost by Category Chart**
  Shows a categorical breakdown of expenses (e.g., labor, materials, operations).

* 📈 **Cumulative Cost Over Time**
  Displays cost accumulation trends to help identify spending velocity and growth.

* 🧭 **Clear Data Representation**
  Charts are labeled, readable, and optimized for quick interpretation.

* 📱 **Responsive Layout**
  Dashboard adapts well to different screen sizes.

---

## 🛠️ Tech Stack

* **Framework:** Next.js
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **State Management:** React Hooks
* **Data Source:** Static mock data (can be replaced with API)

---

## 📂 Project Structure

```bash
app/
├──page.tsx 
├── components/
│   ├── CostByPhaseChart.tsx
    ├── ui/
       ├── Card.tsx 
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (>= 18)
* pnpm

### Installation

```bash
git clone <repository-url>
cd cost-dashboard
npm install
```

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 📊 Data Assumptions

* Cost data is assumed to be:

  * Time-series based for cumulative cost
  * Categorized by phase and spending type
* Currency is displayed consistently across all charts.
* Mock data is used for demonstration purposes.

---

## 🔄 Trade-offs & Decisions

* Used chart libraries to prioritize clarity and development speed.
* Mock data instead of a live API to focus on UI and data visualization.
* Emphasis on readability over complex interactions.

---

## 🧪 Possible Improvements

* Add filters (date range, category, phase)
* Integrate real-time or API-based data
* Export charts as CSV or images
* Add tooltips and hover-based insights

---

## 👤 Author

**Adebayo Akerele**
Frontend Developer



