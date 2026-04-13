# 🦠 Disease Spread Simulator (Epidemic Model)

<div align="center">

🚀 **Interactive epidemic simulation built with HTML, CSS & JavaScript**
📊 Visualizing how diseases spread in a population in real-time

</div>

---

## 🌟 Features

🟦 **Healthy Population Simulation**
🟥 **Infection Spread via Contact**
🟩 **Recovery System (Immunity)**
⬛ **Death Probability System**
🟨 **Adjustable Infection Rate Slider**
🟪 **Dynamic Population Control**
🟧 **Real-time Statistics Dashboard**
⚫ **Smooth Animation using Canvas API**

---

## 🧠 Concept

```diff
+ Each person is represented as a moving particle
+ Infection spreads when particles come close
+ Over time, infected individuals recover or die
+ System behavior changes with user-controlled parameters
```

---

## 🎮 Controls

| 🎛 Control         | 📌 Description                   |
| ------------------ | -------------------------------- |
| 🟥 Infection Rate  | Probability of spread on contact |
| 🟦 Population Size | Total number of individuals      |
| 🔄 Restart Button  | Resets the simulation            |

---

## 🎨 Color Legend

```diff
🔵 Healthy      → Safe individuals
🔴 Infected     → Currently infected
🟢 Recovered    → Immune individuals
⚫ Dead         → Removed from simulation
```

---

## 📂 Project Structure

```bash
📁 Epidemic-Simulator/
│
├── 📄 index.html   # Structure
├── 🎨 style.css    # Styling
└── ⚙️ script.js    # Logic & simulation
```

---

## 🚀 How to Run

```bash
# Step 1
Download or clone the project

# Step 2
Open index.html in your browser

# Done 🎉
```

---

## ⚙️ Core Logic

### 🧍 Movement System

```js
// Random movement of individuals
this.dx = (Math.random() - 0.5) * 2;
this.dy = (Math.random() - 0.5) * 2;
```

---

### 🦠 Infection Mechanism

```js
// Infection spreads on close contact
if (dist < 10) {
  if (Math.random() < infectionRate) {
    other.state = "infected";
  }
}
```

---

### ⏳ Recovery / Death

```js
// After time, infected recover or die
if (p.timer > 300) {
  p.state = Math.random() < 0.8 ? "recovered" : "dead";
}
```

---

## 📊 Live Statistics

```diff
+ Healthy Count
+ Infected Count
+ Recovered Count
+ Death Count
```

---

## 🔥 Future Enhancements

```diff
+ 📊 Add real-time graph (Chart.js)
+ 😷 Mask effectiveness toggle
+ 🏠 Lockdown simulation mode
+ 🌍 Map-based epidemic spread
+ 🧬 Multiple virus strains
+ 🎮 Game mode (save the population)
```

---

## 🏆 Why This Project?

✔ Visually impressive
✔ Real-world relevance
✔ Interactive simulation
✔ Great for hackathons & viva

---

## 💡 Key Insight

> “Even a small increase in infection rate can drastically change the outcome of an epidemic.”

---

## 👨‍💻 Author

💻 Built with logic, creativity & simulation concepts
⚡ Turning data into visual understanding

---

<div align="center">

⭐ If you like this project, give it a star!

</div>
