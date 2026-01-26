import nodemailer from "nodemailer"; // Alterado para import devido ao type: module

exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Método não permitido" }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    // Adicionei 'name' e 'email' para garantir compatibilidade com o que vejo na imagem
    const { name, firstName, lastName, email, phone, city, message, channel, subject } = body;

    // Log para você ver exatamente o que a função está recebendo do site
    console.log("Dados recebidos:", body);

    // Validação mais flexível: aceita 'name' completo ou 'firstName'
    const finalFirstName = firstName || (name ? name.split(' ')[0] : "");
    const finalLastName = lastName || (name ? name.split(' ').slice(1).join(' ') : "");

    if (!finalFirstName || !phone || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Campos obrigatórios: nome, telefone e mensagem" }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email || "", // Agora as respostas vão para o e-mail do cliente
      subject: subject || `Orçamento Pérgola - ${finalFirstName} ${finalLastName}`,
      html: `
        <h2>Nova solicitação de orçamento - CT Ibéricos</h2>
        <p><strong>Nome:</strong> ${finalFirstName} ${finalLastName}</p>
        <p><strong>E-mail:</strong> ${email || "Não informado"}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        ${city ? `<p><strong>Cidade:</strong> ${city}</p>` : ""}
        <p><strong>Canal preferido:</strong> ${channel === 'whatsapp' ? 'WhatsApp' : 'Email'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Enviado via Landing Page CT Ibéricos.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: "E-mail enviado com sucesso!" 
      }),
    };

  } catch (error) {
    console.error("ERRO DETALHADO:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: "Erro interno", 
        details: error.message 
      }),
    };
  }
};
