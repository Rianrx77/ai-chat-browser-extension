const statusEl = document.getElementById("status");
const responseEl = document.getElementById("response");

document.getElementById("saveKey").addEventListener("click", () => {
  const key = document.getElementById("apiKey").value;

  if (!key) {
    statusEl.textContent = "Please enter a valid API key.";
    return;
  }

  chrome.storage.local.set({ groqApiKey: key }, () => {
    statusEl.textContent = "API key saved.";
  });
});

document.getElementById("send").addEventListener("click", () => {
  const userInput = document.getElementById("input").value.trim();

  if (!userInput) {
    responseEl.textContent = "Please enter a question.";
    return;
  }

  statusEl.textContent = "Hmmm... thinking...";
  responseEl.textContent = "";

  chrome.runtime.sendMessage(
    { type: "CHAT", message: userInput },
    (response) => {
      // Handle missing response object
      if (!response || !response.reply) {
        responseEl.textContent = "No response received.";
        statusEl.textContent = "Done";
        return;
      }

      responseEl.textContent = response.reply;
      statusEl.textContent = "Done";
    }
  );
});
