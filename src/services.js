const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("./config/smtp");

const mailService = (recipient) => {
  const userName = process.env.USER_NAME;
  const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  
  const message = {
    html: `Embedded image: <img src="cid:${SMTP_CONFIG.user}"/>`,
    attachments: [{
        filename: 'image.png',
        path: 'src/assets/Exemplo.png',
        cid: SMTP_CONFIG.user
    }]
  }
  
  return transporter.sendMail({
    text: "Texto do E-mail",
    subject: "Assunto do E-mail",
    from: `${userName} <${SMTP_CONFIG.user}>`,
    to: recipient,
    ...message
  });
};

module.exports = { mailService };