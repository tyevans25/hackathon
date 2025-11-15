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

    // NEW recommended OpenAI call
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: req.body.message,
      max_output_tokens: 200,
    });

    const reply = response.output_text || "No response.";

    console.log("🚨 DEBUG — AI reply:", reply);

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("🚨 DEBUG — OpenAI ERROR:", error);
    return res.status(500).json({ error: error.message });
  }
}
