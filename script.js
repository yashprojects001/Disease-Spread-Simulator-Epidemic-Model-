const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

let people = [];
let infectionRate = 0.3;

class Person {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.state = "healthy";
    this.timer = 0;

    this.dx = (Math.random() - 0.5) * 2;
    this.dy = (Math.random() - 0.5) * 2;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
  }

  draw() {
    if (this.state === "healthy") ctx.fillStyle = "blue";
    if (this.state === "infected") ctx.fillStyle = "red";
    if (this.state === "recovered") ctx.fillStyle = "green";
    if (this.state === "dead") ctx.fillStyle = "gray";

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function startSimulation() {
  people = [];
  const pop = document.getElementById("population").value;

  for (let i = 0; i < pop; i++) {
    people.push(new Person(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    ));
  }

  people[0].state = "infected";
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  people.forEach(p => {
    p.move();

    if (p.state === "infected") {
      p.timer++;

      if (p.timer > 300) {
        p.state = Math.random() < 0.8 ? "recovered" : "dead";
      }
    }

    people.forEach(other => {
      const dx = p.x - other.x;
      const dy = p.y - other.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 10) {
        if (p.state === "infected" && other.state === "healthy") {
          if (Math.random() < infectionRate) {
            other.state = "infected";
          }
        }
      }
    });

    p.draw();
  });

  updateStats();
  requestAnimationFrame(update);
}

function updateStats() {
  let h = 0, i = 0, r = 0, d = 0;

  people.forEach(p => {
    if (p.state === "healthy") h++;
    if (p.state === "infected") i++;
    if (p.state === "recovered") r++;
    if (p.state === "dead") d++;
  });

  document.getElementById("healthy").innerText = "Healthy: " + h;
  document.getElementById("infected").innerText = "Infected: " + i;
  document.getElementById("recovered").innerText = "Recovered: " + r;
  document.getElementById("dead").innerText = "Dead: " + d;
}

// Controls
document.getElementById("infectionRate").addEventListener("input", e => {
  infectionRate = parseFloat(e.target.value);
});

startSimulation();
update();