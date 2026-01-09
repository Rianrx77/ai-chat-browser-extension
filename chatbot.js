import OpenAI from "openai";
import readline from "readline";

// Create OpenAI client (Groq-compatible)
const client = new OpenAI({
  apiKey: "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",
  baseURL: "https://api.groq.com/openai/v1"
});

// Readline interface for terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Type 'quit', 'exit', or 'bye' to stop.\n");

const systemPrompt = `
You are a knowledgeable, helpful, and friendly AI assistant. Respond clearly and thoughtfully
to a wide range of questions across different topics. Provide accurate, concise, and relevant
answers, explain concepts in an easy-to-understand manner when needed, and adapt your level
of detail to the user’s question. If a question is ambiguous, ask for clarification. If you are
unsure about something, say so honestly rather than guessing.
`;

async function chat() {
  rl.question("You: ", async (userInput) => {
    if (["quit", "exit", "bye"].includes(userInput.toLowerCase())) {
      console.log("Bot: Goodbye!");
      rl.close();
      return;
    }

    try {
      const response = await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userInput }
        ]
      });

      console.log("Bot:", response.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error.message);
    }

    chat(); // Loop again
  });
}

chat();
