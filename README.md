# 🐛 GitHub Issue Tracker

![GitHub Issue Tracker Banner](./assests/issueTracker.jpg)

[Click here for live link](https://tanvirhassan-official.github.io/GitHub-Issue-Tracker/)

## 📖 Description
**GitHub Issue Tracker** is a sleek, dynamic web application designed to help users interactively search, track, and manage GitHub issues. Built with vanilla JavaScript and styled entirely with Tailwind CSS, this tool provides a highly responsive and modern interface, ensuring that navigating through project tasks and bugs is seamless and visually engaging.

## ⚠️ The Problem
Managing and triaging issues across different repositories natively on GitHub can sometimes feel cluttered, especially when you only want to focus on active tasks. Developers, contributors, and project managers need a lightweight, dedicated dashboard to fetch, view, and organize issues from a repository without the noise of the main GitHub UI.

## 💡 The Solution
This application leverages the GitHub REST API to provide a focused, distraction-free environment for tracking repository issues. By offering a clean, user-friendly interface mapped out initially on Figma, it ensures:
* **Effortless Searching:** Instantly look up issues for specific repositories.
* **Modern UI/UX:** A beautiful, responsive design powered by Tailwind CSS.
* **Smooth Navigation:** Multiple structured views (including a landing page and a main dashboard page) for an organized user experience.

## 🛠️ Tech Stack
* **Frontend Markup:** HTML5 (54.3%)
* **Functionality:** Vanilla JavaScript / ES6+ (45.7%)
* **Styling:** Tailwind CSS (configured via `tailwind.config.js`)
* **Design:** Figma (`GitHub Issues Tracker.fig` included in the repo)
* **API:** GitHub REST API 

## ✨ Key Features
* **Landing & Dashboard Views:** Clean separation of concerns with `index.html` (Landing) and `mainpage.html` (Tracker Dashboard).
* **Live API Integration:** Fetches real-time issue data directly from GitHub using JavaScript.
* **Custom Styling:** Utility-first styling via Tailwind CSS allows for a fast, responsive, and mobile-friendly layout.
* **Modular Scripts:** JavaScript logic organized neatly inside the `script/` directory.
* **Design Transparency:** Includes the original Figma design file for reference and future UI iteration.

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
* A modern web browser (Chrome, Firefox, Edge, Safari)
* [Node.js](https://nodejs.org/) (required if you want to rebuild Tailwind CSS styles or run a local server)

### Installation & Usage
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/TanvirHassan-official/GitHub-Issue-Tracker.git](https://github.com/TanvirHassan-official/GitHub-Issue-Tracker.git)
