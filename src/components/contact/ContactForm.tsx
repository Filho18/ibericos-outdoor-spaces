"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-iberico-800">
        Contacte-nos
      </h3>

      <Alert variant="destructive" className="mb-6 border-amber-500 bg-amber-50">
        <AlertTriangle className="h-5 w-5 text-amber-600" />
        <AlertTitle className="text-amber-800 font-semibold">
          Formulário Temporariamente Indisponível
        </AlertTitle>
        <AlertDescription className="text-amber-700">
          O contacto por formulário de email está temporariamente indisponível. 
          Por favor, contacte-nos através de chamada telefónica ou WhatsApp.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <a
          href="tel:+351917851628"
          className="flex items-center gap-3 p-4 bg-iberico-50 hover:bg-iberico-100 rounded-lg border border-iberico-200 transition-colors"
        >
          <div className="bg-iberico-600 p-3 rounded-full">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-semibold text-iberico-800">Chamada Telefónica</p>
            <p className="text-iberico-600">+351 917 851 628</p>
          </div>
        </a>

        <a
          href="https://wa.me/351917851628?text=Olá! Gostaria de pedir um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors"
        >
          <div className="bg-green-600 p-3 rounded-full">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-semibold text-green-800">WhatsApp</p>
            <p className="text-green-600">Enviar mensagem</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
