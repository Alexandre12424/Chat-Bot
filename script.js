let username = "";

/* =========================================
ENTRAR NO CHAT
========================================= */

function enterChat() {

    const nameInput =
    document.getElementById("username");

    username =
    nameInput.value.trim();

    if (!username) {

        alert("Digite seu nome.");
        return;

    }

    document
    .getElementById("login-screen")
    .classList.remove("active");

    document
    .getElementById("chat-screen")
    .classList.add("active");

    addMessage(
        `Olá ${username}! 👋 Como posso ajudar você hoje?`,
        "bot"
    );

}

/* =========================================
FORMATAR MARKDOWN
========================================= */

function formatText(text) {

    return text

    /* negrito */
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

    /* itálico */
    .replace(/\*(.*?)\*/g, "<em>$1</em>")

    /* código */
    .replace(/`(.*?)`/g, "<code>$1</code>")

    /* títulos */
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")

    /* listas */
    .replace(/^- (.*$)/gim, "<li>$1</li>")

    /* links */
    .replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank">$1</a>'
    )

    /* quebra de linha */
    .replace(/\n/g, "<br>");

}

/* =========================================
ADICIONAR MENSAGEM
========================================= */

function addMessage(text, sender) {

    const chatBox =
    document.getElementById("chat-box");

    const msg =
    document.createElement("div");

    msg.classList.add("message");
    msg.classList.add(sender);

    msg.innerHTML = formatText(text);

    chatBox.appendChild(msg);

    chatBox.scrollTop =
    chatBox.scrollHeight;

}

/* =========================================
ENVIAR MENSAGEM
========================================= */

async function sendMessage() {

    const input =
    document.getElementById("user-input");

    const text =
    input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    showTyping();

    try {

        const response =
        await fetch("http://localhost:3000/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: text
            })

        });

        const data =
        await response.json();

        removeTyping();

        addMessage(data.reply, "bot");

    } catch (error) {

        removeTyping();

        addMessage(
            "Erro ao conectar com a IA.",
            "bot"
        );

        console.log(error);

    }

}

/* =========================================
DIGITANDO
========================================= */

function showTyping() {

    const typing =
    document.createElement("div");

    typing.classList.add("typing");

    typing.id = "typing";

    typing.innerHTML = `

    <span></span>
    <span></span>
    <span></span>

    `;

    document
    .getElementById("chat-box")
    .appendChild(typing);

}

function removeTyping() {

    const typing =
    document.getElementById("typing");

    if (typing) {

        typing.remove();

    }

}

/* =========================================
TEMA
========================================= */

function toggleTheme() {

    document.body
    .classList
    .toggle("dark-mode");

    const button =
    document.getElementById("theme-toggle");

    if (
        document.body.classList
        .contains("dark-mode")
    ) {

        button.innerText = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        button.innerText = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

}

window.onload = () => {

    const savedTheme =
    localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body
        .classList
        .add("dark-mode");

        document
        .getElementById("theme-toggle")
        .innerText = "☀️";

    }

};

/* =========================================
ENTER
========================================= */

document
.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        sendMessage();

    }

});

/* =========================================
RECONHECIMENTO DE VOZ
========================================= */

function startVoiceRecognition() {

    if (
        !("webkitSpeechRecognition" in window)
    ) {

        alert(
            "Seu navegador não suporta reconhecimento de voz."
        );

        return;

    }

    const recognition =
    new webkitSpeechRecognition();

    recognition.lang = "pt-BR";

    recognition.start();

    recognition.onresult =
    (event) => {

        document
        .getElementById("user-input")
        .value =
        event.results[0][0].transcript;

    };

}

/* =========================================
OLHOS DO ROBÔ
========================================= */

document.addEventListener(
    "mousemove",
    (e) => {

        const eyes =
        document.querySelectorAll(".eye");

        eyes.forEach((eye) => {

            const rect =
            eye.getBoundingClientRect();

            const eyeX =
            rect.left +
            rect.width / 2;

            const eyeY =
            rect.top +
            rect.height / 2;

            const angle =
            Math.atan2(
                e.clientY - eyeY,
                e.clientX - eyeX
            );

            const moveX =
            Math.cos(angle) * 3;

            const moveY =
            Math.sin(angle) * 3;

            eye.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

        });

    }
);