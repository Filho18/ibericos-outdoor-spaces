
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactItem from "./ContactItem";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <ContactItem 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iberico-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
        title="Morada"
      >
        <p className="text-iberico-700">
          Rua do Relógio de Sol, 71<br />
          Bairro Monte do Trigo<br />
          São Domingos de Rana, Portugal
        </p>
      </ContactItem>

      <ContactItem
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iberico-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        }
        title="Telefones"
      >
        <p className="text-iberico-700">
          214 450 284<br />
          214 450 233
        </p>
      </ContactItem>

      <ContactItem
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iberico-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
        title="Email"
      >
        <a href="mailto:casadostoldos@gmail.com" className="text-iberico-600 hover:text-iberico-800 transition-colors">
          casadostoldos@gmail.com
        </a>
      </ContactItem>

      <ContactItem
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iberico-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
        title="Horário de Funcionamento"
      >
        <p className="text-iberico-700">
          Segunda a Sexta: 9h às 18h<br />
          Sábado: 9h às 13h<br />
          Domingo: Fechado
        </p>
      </ContactItem>

      <div>
        <Button
          asChild 
          variant="default"
          className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
        >
          <a 
            id="botao-whatsapp"
            href="https://wa.me/351962703371" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
            Fale Connosco via WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
