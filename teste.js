import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: "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"
});

async function testar() {

    try {

        const resposta =
        await groq.chat.completions.create({

            messages: [
                {
                    role: "user",
                    content: "Olá"
                }
            ],

            model: "llama3-70b-8192"

        });

        console.log(resposta.choices[0].message.content);

    } catch(error){

        console.log(error);

    }

}

testar();