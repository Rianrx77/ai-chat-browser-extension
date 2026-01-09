// General-purpose system prompt for the AI assistant
const systemPrompt = `
You are a knowledgeable, helpful, and friendly AI assistant. Respond clearly and thoughtfully
to a wide range of questions across different topics. Provide accurate, concise, and relevant
answers, explain concepts in an easy-to-understand manner when needed, and adapt your level
of detail to the user’s question. If a question is ambiguous, ask for clarification. If you are
unsure about something, say so honestly rather than guessing.
`;

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Retrieve API key from Chrome local storage
  chrome.storage.local.get("groqApiKey", async ({ groqApiKey }) => {
    if (!groqApiKey) {
      sendResponse({ reply: "API key not set." });
      return;
    }

    try {
      // Call Groq's OpenAI-compatible Chat Completions API
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${groqApiKey}`
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: request.message }
            ]
          })
        }
      );

      const data = await res.json();

      // Handle API-level errors (e.g., invalid key, rate limits)
      if (data.error) {
        sendResponse({ reply: data.error.message });
        return;
      }

      // Extract model response safely
      const reply = data?.choices?.[0]?.message?.content;

      sendResponse({
        reply: reply || "No response received."
      });

    } catch (error) {
      // Network or unexpected runtime errors
      sendResponse({ reply: "No response received." });
    }
  });

  // Required to keep the message channel open for async responses
  return true;
});