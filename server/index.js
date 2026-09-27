import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Server is running" });
});

app.post("/api/chat", async (req, res) => {
  const { message, history = [] } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const pollinationsUrl = `https://text.pollinations.ai/openai?model=openai` +
      `&messages=${encodeURIComponent(JSON.stringify([
        ...history,
        { role: "user", content: message }
      ]))}`;

    const response = await fetch(pollinationsUrl, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Pollinations request failed: ${response.status}`);
    }

    const data = await response.json();

    const reply =
      typeof data === "string"
        ? data
        : data?.choices?.[0]?.message?.content ||
          data?.output ||
          "No response returned.";

    return res.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return res.status(500).json({
      error: "Failed to generate response from Pollinations.ai",
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
