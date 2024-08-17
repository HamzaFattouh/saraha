import nodemailer from "nodemailer";

export async function sendEmail(to, subject, html){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDEMAILEMAIL,
            pass: process.env.SENDEMAILPASSWORD,
        }
    });

    const info = await transporter.sendMail({
        from: process.env.SENDEMAILEMAIL,
        to,
        subject,
        html,
    });

}