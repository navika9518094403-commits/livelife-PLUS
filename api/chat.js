export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Use POST only" });
  }

  const body = req.body;

  const response = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROK_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "grok-2",
      messages: [
        { role: "user", content: body.message }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
