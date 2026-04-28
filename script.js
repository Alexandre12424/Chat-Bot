// Banco de dados de perguntas e respostas
const faq = {
    "Oi": "Olá! Como posso ajudar você hoje?",
    "Olá": "Olá! Tudo bem? Como posso ajudar?",
    "Bom dia": "Bom dia! Como posso ajudar você?",
    "Boa tarde": "Boa tarde! Como posso ajudar você?",
    "Boa noite": "Boa noite! Como posso ajudar você?",
    "Qual o nome da empresa?": "Somos a Nom, especializada em soluções digitais.",
    "O que vocês fazem?": "Oferecemos serviços de tecnologia e atendimento digital para empresas.",
    "Como posso entrar em contato?": "Você pode falar conosco por aqui ou pelo nosso WhatsApp.",
    "Qual o horário de atendimento?": "Atendemos de segunda a sexta, das 8h às 18h.",
    "Vocês atendem aos finais de semana?": "Nos finais de semana atendemos apenas por mensagens.",
    "Quais serviços vocês oferecem?": "Desenvolvimento de sites, sistemas e chatbots.",
    "Vocês fazem sites?": "Sim, criamos sites modernos e responsivos.",
    "Vocês fazem aplicativos?": "Sim, desenvolvemos aplicativos personalizados.",
    "Vocês fazem chatbot com IA?": "Sim, integramos chatbots com inteligência artificial.",
    "Vocês fazem sistemas personalizados?": "Sim, criamos sistemas sob medida para sua empresa.",
    "Quanto custa um site?": "O valor depende do projeto. Podemos fazer um orçamento.",
    "O orçamento é gratuito?": "Sim, fazemos orçamento sem compromisso.",
    "Quais formas de pagamento?": "Aceitamos PIX, cartão e boleto.",
    "Parcelam?": "Sim, parcelamos no cartão.",
    "Tem desconto à vista?": "Sim, oferecemos desconto no pagamento à vista.",
    "Como funciona o serviço?": "Você nos explica sua ideia e desenvolvemos o projeto.",
    "Quanto tempo demora?": "Depende do projeto, mas geralmente entre 7 e 30 dias.",
    "Vocês dão suporte depois?": "Sim, oferecemos suporte após a entrega.",
    "Posso acompanhar o projeto?": "Sim, você acompanha todas as etapas.",
    "Vocês fazem alterações?": "Sim, fazemos ajustes conforme necessário.",
    "O site funciona no celular?": "Sim, todos os sites são responsivos.",
    "Vocês hospedam o site?": "Sim, podemos cuidar da hospedagem.",
    "Vocês registram domínio?": "Sim, ajudamos no registro do domínio.",
    "Posso atualizar meu site depois?": "Sim, você pode editar ou solicitar alterações.",
    "O site aparece no Google?": "Sim, aplicamos técnicas básicas de SEO.",
    "O chatbot responde sozinho?": "Sim, ele pode responder automaticamente.",
    "Ele usa IA?": "Sim, pode usar inteligência artificial.",
    "Dá pra personalizar respostas?": "Sim, totalmente personalizável.",
    "Funciona no WhatsApp?": "Sim, pode integrar com WhatsApp.",
    "Funciona 24h?": "Sim, atende 24 horas por dia.",
    "Vocês oferecem suporte técnico?": "Sim, temos suporte dedicado.",
    "Como peço suporte?": "Você pode pedir por aqui mesmo.",
    "O suporte é pago?": "Depende do plano contratado.",
    "Tempo de resposta?": "Normalmente em até 24h.",
    "Vocês corrigem erros?": "Sim, corrigimos bugs rapidamente.",
    "Meus dados estão seguros?": "Sim, usamos sistemas seguros.",
    "Vocês seguem LGPD?": "Sim, seguimos as normas de proteção de dados.",
    "Tem backup?": "Sim, realizamos backups periódicos.",
    "O site pode ser hackeado?": "Trabalhamos para minimizar riscos.",
    "Vocês protegem contra ataques?": "Sim, usamos medidas de segurança.",
    "Vocês fazem marketing digital?": "Sim, oferecemos estratégias digitais.",
    "Vocês fazem tráfego pago?": "Sim, gerenciamos anúncios.",
    "Vocês fazem redes sociais?": "Sim, podemos cuidar das suas redes.",
    "Vocês fazem SEO?": "Sim, otimizamos para Google.",
    "Aumenta vendas?": "Sim, nosso foco é gerar resultados.",
    "Vocês têm CNPJ?": "Sim, somos uma empresa registrada.",
    "Onde estão localizados?": "Atendemos online para todo o Brasil.",
    "Vocês têm clientes?": "Sim, atendemos diversos clientes.",
    "Posso ver trabalhos?": "Sim, temos portfólio.",
    "Vocês têm avaliações?": "Sim, temos feedbacks positivos.",
    "Quais tecnologias usam?": "Usamos tecnologias modernas.",
    "Usam HTML, CSS e JS?": "Sim, utilizamos essas linguagens.",
    "Usam IA?": "Sim, utilizamos inteligência artificial.",
    "O sistema é rápido?": "Sim, otimizamos desempenho.",
    "É compatível com todos navegadores?": "Sim, garantimos compatibilidade.",
    "Posso escolher o design?": "Sim, totalmente personalizável.",
    "Vocês seguem minha ideia?": "Sim, adaptamos ao seu projeto.",
    "Posso mudar depois?": "Sim, mudanças são possíveis.",
    "Vocês fazem layout moderno?": "Sim, seguimos tendências atuais.",
    "Fazem design minimalista?": "Sim, se for sua preferência.",
    "Tem integração com pagamento?": "Sim, integramos sistemas de pagamento.",
    "Tem login de usuário?": "Sim, podemos implementar.",
    "Tem painel administrativo?": "Sim, incluímos painel de controle.",
    "Dá pra cadastrar produtos?": "Sim, tipo loja virtual.",
    "Tem relatórios?": "Sim, relatórios personalizados.",
    "Vocês fazem loja online?": "Sim, desenvolvemos e-commerce.",
    "Aceita cartão?": "Sim, com integração.",
    "Tem carrinho?": "Sim, funcionalidade completa.",
    "Calcula frete?": "Sim, podemos integrar.",
    "Gerencia pedidos?": "Sim, com painel administrativo.",
    "Posso falar com humano?": "Sim, é só solicitar.",
    "Vocês demoram pra responder?": "Tentamos responder rápido.",
    "Tem atendimento automático?": "Sim, via chatbot.",
    "Posso agendar reunião?": "Sim, podemos marcar.",
    "Vocês ligam?": "Sim, se necessário.",
    "Vocês fazem manutenção?": "Sim, manutenção contínua.",
    "Atualizam sistemas?": "Sim, sempre que necessário.",
    "Fazem integração com API?": "Sim, trabalhamos com APIs.",
    "Dá pra escalar o sistema?": "Sim, planejamos para crescimento.",
    "Vocês trabalham com startups?": "Sim, adoramos projetos novos.",
    "Como contratar?": "É só falar com a gente.",
    "Preciso assinar contrato?": "Sim, para segurança.",
    "Tem garantia?": "Sim, garantimos qualidade.",
    "Começam rápido?": "Sim, após aprovação.",
    "Posso cancelar?": "Depende do contrato.",
    "Você é um robô?": "Sou um assistente virtual.",
    "Você usa inteligência artificial?": "Sim, utilizo IA.",
    "Você aprende com o tempo?": "Sim, posso ser atualizado.",
    "Você substitui humanos?": "Não, eu ajudo no atendimento.",
    "Você erra?": "Posso errar, mas estou sempre melhorando.",
    "Vocês são confiáveis?": "Sim, prezamos pela transparência.",
    "Vocês têm experiência?": "Sim, temos experiência no mercado.",
    "Posso confiar meu projeto?": "Sim, cuidamos com responsabilidade.",
    "Vocês cumprem prazo?": "Sim, seguimos cronograma.",
    "Vocês dão suporte depois?": "Sim, continuamos ajudando.",
    "Obrigado!": "De nada! 😊",
    "Até mais!": "Até breve!",
    "Você ajuda muito!": "Fico feliz em ajudar!",
    "Preciso de mais informações": "Claro! Me diga o que você precisa.",
    "Quero começar agora": "Perfeito! Vamos iniciar seu projeto"
};

function enterChat() {
const userInput = document.getElementById("username");
username = userInput.value.trim();
if (!username) {
    alert("Por favor, digite seu nome.");
    return;
}
document.getElementById("login-screen").classList.remove("active");
document.getElementById("chat-screen").classList.add("active");
addMessage(`Olá, ${username}! Como posso ajudar você hoje?`, "bot");
}

function addMessage(text, sender) {
const chatBox = document.getElementById("chat-box");

const msg = document.createElement("div");
msg.classList.add("message", sender);
msg.innerText = text;
msg.setAttribute("aria-live", "assertive");

chatBox.appendChild(msg);
chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para buscar resposta no FAQ (case-insensitive e busca parcial)
function findFAQAnswer(userText) {
const userLower = userText.toLowerCase().trim();

// Busca exata (case-insensitive)
for (let [question, answer] of Object.entries(faq)) {
    if (question.toLowerCase() === userLower) {
        return answer;
    }
}

// Busca parcial: verifica se contém palavras-chave
for (let [question, answer] of Object.entries(faq)) {
    const questionLower = question.toLowerCase();
    if (questionLower.includes(userLower) || userLower.includes(questionLower)) {
        return answer;
    }
}

return null;
}

async function sendMessage() {
const input = document.getElementById("user-input");
const text = input.value.trim();

if (!text) return;

addMessage(text, "user");
input.value = "";
input.disabled = true;
document.querySelector("footer button").disabled = true;

// PRIMEIRO: Verificar se há resposta no FAQ
const faqAnswer = findFAQAnswer(text);
if (faqAnswer) {
    addMessage(faqAnswer, "bot");
    generateSuggestions(faqAnswer);
    showEndConversationOptions();
    input.disabled = false;
    document.querySelector("footer button").disabled = false;
    input.focus();
    return;
}

// Adicionar indicador de loading
const loadingMsg = document.createElement("div");
loadingMsg.classList.add("message", "bot", "loading");
loadingMsg.innerText = "Pensando...";
loadingMsg.setAttribute("aria-live", "polite");
document.getElementById("chat-box").appendChild(loadingMsg);

try {
    let reply;
    if (useAPI) {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "Você é um assistente profissional de atendimento ao cliente para empresas. Seja útil, cortês e eficiente." },
                    { role: "user", content: text }
                ],
                max_tokens: 150
            })
        });

        if (!response.ok) {
            throw new Error("Erro na API: " + response.statusText);
        }

        const data = await response.json();
        reply = data.choices[0].message.content;
    } else {
        // Modo de teste: respostas simuladas
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay
        const responses = [
            "Entendi sua pergunta. Como posso ajudar mais?",
            "Obrigado por entrar em contato. Estou aqui para ajudar.",
            "Essa é uma boa questão. Vamos resolver isso juntos.",
            "Posso fornecer mais detalhes sobre nossos serviços.",
            "Ótima pergunta! Deixe-me ajudá-lo.",
            "Adorei essa pergunta. Posso elaborar mais sobre isso."
        ];
        reply = responses[Math.floor(Math.random() * responses.length)];
    }

    // Remover loading
    document.getElementById("chat-box").removeChild(loadingMsg);

    addMessage(reply, "bot");
    generateSuggestions(reply);
    showEndConversationOptions();
} catch (error) {
    // Remover loading
    document.getElementById("chat-box").removeChild(loadingMsg);
    addMessage("Desculpe, ocorreu um erro. Tente novamente.", "bot");
    console.error(error);
} finally {
    input.disabled = false;
    document.querySelector("footer button").disabled = false;
    input.focus();
}
}

function showEndConversationOptions() {
    const chatBox = document.getElementById("chat-box");
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options-container");

    // Seleciona 3 perguntas aleatórias do FAQ para sugerir
    const allQuestions = Object.keys(faq);
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const selectedSuggestions = shuffled.slice(0, 3);

    let buttonsHtml = selectedSuggestions.map(q => 
        `<button class="option-btn" onclick="sendPredefinedMessage('${q}', this)">${q}</button>`
    ).join('');

    buttonsHtml += `<button class="option-btn end" onclick="endChat()">Encerrar Chat</button>`;

    optionsDiv.innerHTML = buttonsHtml;
    chatBox.appendChild(optionsDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendPredefinedMessage(text, btn) {
    btn.parentElement.remove();
    document.getElementById("user-input").value = text;
    sendMessage();
}

function endChat() {
    if (confirm("Deseja realmente encerrar o atendimento?")) {
        location.reload(); // Recarrega a página para voltar ao login
    }
}

function generateSuggestions(text) {
const results = document.getElementById("results");
const suggestions = [
    "Agendar uma reunião",
    "Informações sobre produtos",
    "Suporte técnico",
    "Feedback sobre serviços"
];
results.innerHTML = `<p>Baseado na conversa:</p><ul>${suggestions.map(s => `<li>${s}</li>`).join('')}</ul>`;
// Comentado: Descomente se quiser navegar automaticamente para tela de resultados
// document.getElementById("chat-screen").classList.remove("active");
// document.getElementById("result-screen").classList.add("active");
}

function backToChat() {
document.getElementById("result-screen").classList.remove("active");
document.getElementById("chat-screen").classList.add("active");
}

// Função para alternar tema claro/escuro
function toggleTheme() {
const html = document.documentElement;
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");

body.classList.toggle("dark-mode");

// Salvar preferência no localStorage
if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
} else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
}
}

// Carregar tema salvo ao abrir página
window.addEventListener("DOMContentLoaded", function() {
const savedTheme = localStorage.getItem("theme") || "light";
const themeToggle = document.getElementById("theme-toggle");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}
});

// Permitir envio com Enter
document.getElementById("user-input").addEventListener("keypress", function(e) {
if (e.key === "Enter") {
    sendMessage();
}
});