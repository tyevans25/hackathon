import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("🚨 DEBUG — handler hit. Request body:", req.body);

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: req.body.message }
      ],
      max_tokens: 200,
    });

    const reply =
      completion.choices?.[0]?.message?.content || "No AI response.";

    console.log("🚨 DEBUG — AI Response:", reply);

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("🚨 DEBUG — OpenAI ERROR:", error);
    return res.status(500).json({ error: error.message });
  }
}
