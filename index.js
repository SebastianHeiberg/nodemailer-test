"use strict";
import nodemailer from 'nodemailer'

//for at få en mail brug https://ethereal.email/

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'verla5@ethereal.email',
        pass: 'yJkHbtrC7NU7Ry6MeW'
    }
});

async function main() {
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

}

main().catch(console.error);