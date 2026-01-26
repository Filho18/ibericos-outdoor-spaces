import nodemailer from "nodemailer";

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
    const { nome, email, telefone, assunto, mensagem } = body;

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
      replyTo: email,
      // Alterei o assunto para combinar com o novo título
      subject: `Mais um futuro cliente Valmir - ${nome}`, 
      html: `
        <div style="font-family: sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #b01515; margin-bottom: 20px;">Mais um futuro cliente Valmir - Boa venda</h2>
          
          <div style="font-size: 16px;">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone || "Não fornecido"}</p>
            <p><strong>Assunto:</strong> ${assunto || "Geral"}</p>
            <p><strong>Mensagem:</strong></p>
            <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              ${mensagem.replace(/\n/g, "<br>")}
            </div>
          </div>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          
          <p style="font-size: 11px; color: #555; margin: 0;">
            <strong>manager:</strong> Dorivaldo Filho
          </p>
          
          <p style="font-size: 10px; color: #999; margin-top: 5px;">
            Enviado via formulário ctibericos.xyz
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: "Email enviado!" }),
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
