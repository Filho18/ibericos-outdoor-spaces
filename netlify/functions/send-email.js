import nodemailer from "nodemailer"; // Correção para ESM (type: module)

exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const body = JSON.parse(event.body);
    
    // Mapeamento exato dos campos enviados pelo ContactForm.tsx
    const { nome, email, telefone, assunto, mensagem } = body;

    // Validação dos campos obrigatórios conforme o formulário
    if (!nome || !email || !mensagem) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Campos obrigatórios em falta." }),
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
      replyTo: email, // Permite responder diretamente ao cliente
      subject: assunto || `Novo Contacto Site - ${nome}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #b01515;">Nova Mensagem - CT Ibéricos</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone || "Não fornecido"}</p>
          <p><strong>Assunto:</strong> ${assunto || "Geral"}</p>
          <p><strong>Mensagem:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${mensagem.replace(/\n/g, "<br>")}
          </div>
          <hr>
          <p style="font-size: 12px; color: #666;">Enviado via formulário ctibericos.xyz</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: "Email enviado com sucesso!" }),
    };

  } catch (error) {
    console.error("Erro na função:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Erro interno", details: error.message }),
    };
  }
};
