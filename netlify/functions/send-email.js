const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  // Configurar CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Responder a requisições OPTIONS (preflight)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Apenas aceitar métodos POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Método não permitido" }),
    };
  }

  try {
    // Parse do corpo da requisição
    const body = JSON.parse(event.body);
    const { firstName, lastName, phone, city, message, channel, subject } = body;

    // Validação básica
    if (!firstName || !lastName || !phone || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Campos obrigatórios: nome, sobrenome, telefone e mensagem" }),
      };
    }

    // Configurar o transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou outro provedor
      auth: {
        user: process.env.EMAIL_USER, // Seu e-mail
        pass: process.env.EMAIL_PASS, // Sua senha de aplicativo
      },
    });

    // Configurar o e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: process.env.EMAIL_USER,
      subject: subject || `Orçamento Pérgola Bioclimática - ${firstName} ${lastName}`,
      html: `
        <h2>Nova solicitação de orçamento - Pérgola Bioclimática</h2>
        <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        ${city ? `<p><strong>Cidade:</strong> ${city}</p>` : ""}
        <p><strong>Canal preferido:</strong> ${channel === 'whatsapp' ? 'WhatsApp' : 'Email'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Solicitação enviada através da landing page de pérgolas bioclimáticas.</em></p>
      `,
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: "E-mail enviado com sucesso!",
        redirect: "https://ctibericos.netlify.app"
      }),
    };

  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: "Erro interno do servidor",
        message: "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."
      }),
    };
  }
};
