import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
});

app.post("/chat", async (req, res) => {

    try {

        const { message } = req.body;

        console.log("Mensagem:", message);

        const completion =
        await groq.chat.completions.create({

            messages: [

                {
                    role: "system",
                    content:
                    "Você é um assistente empresarial moderno, amigável e inteligente."
                },

                {
                    role: "user",
                    content: message
                }

            ],

            model: "llama-3.3-70b-versatile"

        });

        const reply =
        completion.choices[0].message.content;

        console.log("Resposta:", reply);

        res.json({
            reply
        });

    } catch(error){

        console.log(error);

        res.status(500).json({
            error: "Erro interno"
        });

    }

});

app.listen(3000, ()=>{

    console.log(
        "Servidor rodando em http://localhost:3000"
    );

});