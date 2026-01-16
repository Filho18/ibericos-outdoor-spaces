"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      telefone: formData.get("telefone") as string,
      assunto: formData.get("assunto") as string,
      mensagem: formData.get("mensagem") as string,
    };

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        window.location.href = "https://ctibericos.netlify.app";
      } else {
        alert(result.message || "Ocorreu um erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
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

      <Alert variant="destructive" className="mb-6 border-amber-500 bg-amber-50">
        <AlertTriangle className="h-5 w-5 text-amber-600" />
        <AlertTitle className="text-amber-800 font-semibold">
          ⚠️ Formulário em Manutenção
        </AlertTitle>
        <AlertDescription className="text-amber-700">
          O formulário está temporariamente indisponível. Recomendamos contactar por chamada ou WhatsApp.
        </AlertDescription>
      </Alert>

      <div className="flex gap-3 mb-6">
        <a
          href="tel:+351917851628"
          className="flex-1 flex items-center justify-center gap-2 p-3 bg-iberico-50 hover:bg-iberico-100 rounded-lg border border-iberico-200 transition-colors"
        >
          <Phone className="h-5 w-5 text-iberico-600" />
          <span className="text-sm font-medium text-iberico-700">Ligar</span>
        </a>
        <a
          href="https://wa.me/351917851628?text=Olá! Gostaria de pedir um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 p-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors"
        >
          <MessageCircle className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-green-700">WhatsApp</span>
        </a>
      </div>

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
