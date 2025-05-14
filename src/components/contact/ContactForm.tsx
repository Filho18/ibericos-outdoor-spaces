import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-iberico-800">Peça um Orçamento Ou Escreva a Sua Dúvida</h3>
      
      <form 
        action="https://formspree.io/f/mzzryezk" 
        method="POST" 
        className="space-y-4"
      >
        {/* Campo oculto para redirecionar após envio (opcional, configurar via dashboard Formspree) */}
        {/* <input type="hidden" name="_redirect" value="https://seusite.com/obrigado" /> */}

        {/* Campos do formulário */}
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

        {/* Botão de envio */}
        <Button 
          type="submit" 
          className="w-full bg-iberico-600 hover:bg-iberico-700 text-white py-6"
        >
          Enviar Mensagem
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
