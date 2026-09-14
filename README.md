# 🧱 Dev Stack Builder

A modern React web app that helps developers explore popular technologies and build their own ideal development stack. Browse frontend, backend, database, and tooling options side by side, add your favorites to a personal stack, and customize your setup in seconds.

---

## 🛠️ Technologies Used

- **React.js** — Component-based UI
- **TypeScript** — Type-safe code
- **Vite** — Fast build tool
- **Tailwind CSS** — Utility-first styling
- **DaisyUI** — Tailwind component library
- **React-Toastify** — Toast notifications
- **JSON** — Local data source for technologies

---

## ✨ Key Features

1. **Explore Technologies** — Browse 12 popular technologies (React, Vue, Node.js, PostgreSQL, Docker, and more) in a responsive card grid with icons, badges, ratings, and difficulty levels.

2. **Your Stack Builder** — Add any technology to your personal stack with one click. Duplicate prevention, live selected count, and the ability to remove individual items or clear everything at once.

3. **Instant Feedback with Toasts** — Every action (add, duplicate attempt, remove, remove all) triggers a toast notification, powered by React-Toastify, so users always know what happened.

---

## ❓ React Q&A

### 1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension that lets us write HTML-like code inside JavaScript. React uses JSX because it makes UI code easier to read and write — instead of calling `React.createElement()` for every element, we can just write `<div>Hello</div>`. It's not required, but it makes component code cleaner and more intuitive.

### 2. What is the difference between props and state?

**Props** are read-only data passed from a parent component to a child. They cannot be changed by the child. **State** is data managed *inside* a component that can change over time, usually via `useState`. When state changes, React re-renders the component. In short: props come from outside, state lives inside.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a functional component store and update data. It returns the current value and a setter function. In this project, I used `useState` for three things: `techs` (the fetched technology list), `loading` (to show a spinner while data loads), and `stack` (the user's selected technologies).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering — like fetching data, setting timers, or subscribing to events. I used it to load the technology JSON when the app first mounts. Since loading data is a side effect (it doesn't happen during rendering), `useEffect` is the right place for it. I also used it to briefly show a loading spinner before the data appears.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify which list items changed, were added, or removed. Without a unique key, React can't tell items apart efficiently, which can cause bugs or unnecessary re-renders. In this project, every tech card uses `key={tech.id}` so React can update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on some condition — using `&&`, `? :`, or `if`. In this project, I used it in the "Your Stack" sidebar: when the stack is empty, it shows a dashed box with the message *"Your stack is empty."*; when items exist, it shows the list of selected technologies instead.

### 7. How do you pass data from a parent to a child, and how does a child send something back to the parent?

Data goes **down** from parent to child via **props** — for example, `<TechCard tech={tech} onAdd={addToStack} />`. To send data **up**, the parent passes a **callback function** as a prop, and the child calls it when needed — like calling `onAdd(tech)` when the user clicks "Add to Stack". This keeps state centralized in the parent.

---
- **Live Site:** : https://agent-6aa6d1328d1--a05-dev-stack-builder-website.netlify.app


*© 2026 Dev Stack. All rights reserved.*
