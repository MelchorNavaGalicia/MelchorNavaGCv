//Aqui agregare el JS
function cambiarTema() {
    const body = document.body;
    const icon = document.getElementById("icon");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        icon.textContent = "☀️";
    } else {
        icon.textContent = "🌙";
    }
}

