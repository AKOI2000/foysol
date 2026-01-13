import { Resend } from "resend";



export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).end();
    }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, phone, description } = req.body;

  if (!name || !email || !phone || !description) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const result = await resend.emails.send({
      from: "Testing <consult@foysolconsulting.com>",
      to: ["consult@foysolconsulting.com"],
      reply_to: email,
      subject: `FOYSOL CONSULTATION LEAD`,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Phone:</strong> ${phone}<br/><br/>
        <strong>Description:</strong>${description}
      `,
    });

    console.log("Resend result:", result);

    if (result.data === null) {
        return res.status(200).json({ message: "retry cause it didn't work" });
    } else {
        return res.status(200).json({ success: true }); 
    }
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }

  // return res.json({email,phone, name, message, subject })
}
