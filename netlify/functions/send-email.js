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
    const { nome, email, telefone, assunto, mensagem } = body;

    // Validação básica
    if (!nome || !email || !mensagem) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Campos obrigatórios: nome, email e mensagem" }),
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
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // E-mail de destino
      subject: `Nova mensagem de ${nome} - ${assunto || "Ibericos Outdoor Spaces"}`,
      html: `
        <h2>Nova mensagem do site Ibericos Outdoor Spaces</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ""}
        ${assunto ? `<p><strong>Assunto:</strong> ${assunto}</p>` : ""}
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Mensagem enviada através do formulário de contato do site.</em></p>
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


