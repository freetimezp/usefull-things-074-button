
const root = document.querySelector(":root");
const button2 = document.querySelector(".button2");

button2.addEventListener("mousemove", (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    root.style.setProperty("--gradient-pos-x", `${x}%`);
    root.style.setProperty("--gradient-pos-y", `${y}%`);
});





















