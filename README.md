# 🤖 Groq AI Browser Extension

> A modern, dark-themed browser extension that lets you chat with an AI assistant directly from your browser toolbar — powered by Groq’s OpenAI‑compatible API.

---

## ✨ What is this?

The **Groq AI Browser Extension** is a lightweight Chrome (Manifest V3) extension designed to make AI assistance instantly accessible while browsing.

It focuses on:

* Clean and minimal UI 🌙
* Secure handling of user-provided API keys 🔐
* Reliable, fast responses ⚡
* Beginner‑friendly but production‑style architecture

This project is ideal for **learning**, **portfolio building**, and **real‑world browser extension development**.

---

## 🧭 How it works (Quick Flow)

```text
User → Extension Popup → Background Service Worker → Groq API → Response → UI
```

1. User enters their **Groq API key** (stored locally)
2. User asks a question in the popup
3. The popup sends a message to the background service worker
4. The service worker calls Groq’s LLM API
5. The response is returned and displayed instantly

> 🔒 API keys are never hardcoded or committed to this repository.

---

## 🎯 Features

* 🌙 Dark-themed, modern UI
* 🤖 General-purpose AI assistant (not domain‑restricted)
* 🔐 Secure local API key storage using `chrome.storage`
* 🛡️ Graceful error handling (no blank UI states)
* 📦 Manifest V3 compliant
* 🧠 Clean async messaging architecture

---

## 🛠️ Tech Stack

* **JavaScript (ES6+)**
* **HTML / CSS**
* **Chrome Extensions API (Manifest V3)**
* **Groq OpenAI-Compatible Chat API**

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/groq-ai-browser-extension.git
```

### 2️⃣ Load the extension in Chrome

1. Open `chrome://extensions`
2. Enable **Developer Mode** (top‑right)
3. Click **Load unpacked**
4. Select the project folder

### 3️⃣ Use the extension

* Click the extension icon
* Enter your **Groq API key**
* Ask a question and get an instant response 🎉

---

## 🔐 Security & Privacy

### API Keys

* No API keys are stored in source code
* Users provide their own Groq API key at runtime
* Keys are stored locally using `chrome.storage`
* Keys are never transmitted anywhere except directly to Groq’s API


---

## 🧪 Error Handling

The extension safely handles:

* Missing API keys
* Invalid or expired API keys
* Network failures
* API rate limits
* Empty or malformed model responses

Users always receive clear feedback instead of silent failures.

---

## 📸 Screenshots / Demo

<p align="center">
  <img src="screenshots/Grok Chatbot 1.png" width="300">
  <img src="screenshots/Grok Chatbot 2.png" width="300">
</p>

<p align="center">
  <em>Extension popup • AI response display</em>
</p>

---

## 🎓 Why this project?

This project was built to:

* Learn real‑world browser extension development
* Understand API integration & async communication
* Practice secure client‑side patterns
* Build a clean, portfolio‑ready project

---

## 📄 License

MIT License

---

## 🙌 Final Note

If you’re reviewing this as a recruiter, mentor, or fellow developer — feedback and suggestions are always welcome!
