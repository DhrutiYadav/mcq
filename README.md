# Quick Quiz 🎯

A simple **Multiple Choice Quiz (MCQ) web application** built with vanilla HTML, CSS, and JavaScript.

The project is designed as a lightweight quiz game where users can start a quiz, answer multiple-choice questions, track their score, and view high scores stored in the browser.

## ✨ Features

- 🎮 Start and play a multiple-choice quiz
- ❓ Displays one question at a time
- 🔀 Randomizes the order of available questions
- 📊 Shows quiz progress with a progress bar
- 🏆 Tracks the player's score
- ✅ Highlights correct answers
- ❌ Highlights incorrect answers
- 👤 Allows the player to enter a username after the quiz
- 💾 Uses browser `localStorage` for quiz score/high-score data
- 🔁 Play the quiz again
- 🏠 Return to the home page
- 📱 Responsive layout using simple CSS

## 🛠️ Tech Stack

- **HTML5** — Page structure
- **CSS3** — Styling and responsive layout
- **JavaScript (ES6)** — Quiz logic, scoring, DOM manipulation, and `localStorage`
- **Browser Local Storage** — Stores the latest score and high-score data

## 📂 Project Structure

```text
MCQ/
├── index.html          # Home page
├── game.html           # Quiz/game page
├── end.html            # Quiz result page
├── highscores.html     # High-score page
│
├── game.js             # Quiz questions, game flow, scoring
├── end.js              # Result page and score-saving logic
├── highscores.js       # Reads and displays high scores
│
├── app.css             # Shared application styles
├── game.css            # Quiz-specific styles
├── highscores.css      # High-score page styles
│
├── questions.json      # Question data file (currently not used by game.js)
└── IKS mcq.pdf         # Source/reference material for the quiz questions
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DhrutiYadav/mcq.git
cd MCQ
```

### 2. Run the project

This is a static HTML/CSS/JavaScript project, so no package installation or build process is required.

You can open:

```text
index.html
```

directly in a browser.

For a better development experience, you can use **VS Code Live Server** or any local static web server.

## 🎮 How It Works

### Home Page

The home page provides two options:

- **Play** — Starts the quiz
- **High Score** — Opens the high-score page

### Quiz Page

The quiz loads the questions defined in `game.js`.

For each question:

1. A random question is selected.
2. The four answer choices are displayed.
3. The player selects an answer.
4. The selected answer is marked as correct or incorrect.
5. A correct answer increases the score.
6. The progress bar is updated.
7. The next question is displayed.

The current quiz is configured for **10 questions** with **1 point per correct answer**.

### Result Page

After completing the quiz, the latest score is stored in:

```javascript
localStorage
```

The player can enter a username and save the score.

### High Scores

The high-score page reads saved data from browser `localStorage` and displays the stored scores.

## 📊 Quiz Configuration

The main quiz settings are defined in `game.js`:

```javascript
const CORRECT_BONUS = 1;
const MAX_QUSTIONS = 10;
```

You can change these values to modify the quiz behavior.

Questions can also be added or modified in the `questions` array inside `game.js`.

## 💾 Local Storage

The application uses browser `localStorage` so that quiz data can persist between page loads.

The project uses keys such as:

```text
mostRecentScore
highScores
```

Because the data is stored in the browser, scores are specific to the browser/device being used. There is no backend database or online leaderboard.

## ⚠️ Current Project Notes

This repository is a simple learning project and contains some unfinished/refactored code.

- `questions.json` is intended to hold question data, but it is not currently valid JSON and the fetch logic in `game.js` is commented out.
- The active questions are currently defined directly inside `game.js`.
- The high-score saving/display code has some naming/function inconsistencies that should be fixed before treating the leaderboard as production-ready.
- There is no backend, authentication system, or server-side database.
- The `.env` file is ignored by Git, but environment files containing secrets should never be committed or shared publicly.

## 🎓 Learning Goals

This project demonstrates fundamental frontend development concepts, including:

- DOM manipulation
- JavaScript event handling
- Arrays and objects
- Random selection
- Conditional logic
- Dynamic HTML updates
- CSS classes and animations
- Browser `localStorage`
- Multi-page website navigation

## 📄 License

This project is intended for educational and personal use.

---

**Built with HTML, CSS & JavaScript ❤️**
