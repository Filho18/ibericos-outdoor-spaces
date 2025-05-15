"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzzryezk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "https://ctibericos.netlify.app/";
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (error) {
      alert("Erro de rede. Verifique a sua conexão.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-iberico-800">
        Peça um Orçamento Ou Escreva a Sua Dúvida
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="nome"
          placeholder="Seu nome completo"
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Seu melhor e-mail"
          required
        />
        <Input
          type="tel"
          name="telefone"
          placeholder="Número de telefone (opcional)"
        />
        <Input
          type="text"
          name="assunto"
          placeholder="Assunto da mensagem"
        />
        <Textarea
          name="mensagem"
          placeholder="Escreva sua mensagem ou pedido de orçamento"
          required
        />

        <Button
          type="submit"
          className="w-full bg-iberico-600 hover:bg-iberico-700 text-white py-6"
          disabled={isSending}
        >
          {isSending ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;


