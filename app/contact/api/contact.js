import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, phone, service, description } =
      req.body;

    // Create a Nodemailer transporter using your email service and credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", // use your email service
      auth: {
        user: "mohamed.amine.slimani@horizon-tech.com",
        pass: "A.m.i.n.e1",
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "slimaniamin76@gmail.com",
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      text: `
        First Name: ${firstname}
        Last Name: ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Description: ${description}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
