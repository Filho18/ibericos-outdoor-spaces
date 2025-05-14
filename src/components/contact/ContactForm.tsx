
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-iberico-800">Peça um Orçamento</h3>
      
      <form action="https://formsubmit.co/el/jegaso" method="POST" className="space-y-4">
        <input type="hidden" name="_next" value="https://meusite.com/sucesso" />
        <input type="hidden" name="_captcha" value="false" />
        <Input type="text" name="nome" placeholder="Seu nome" required />
        <Input type="email" name="email" placeholder="Seu e-mail" required />
        <Textarea name="mensagem" placeholder="Sua mensagem" required />
        <Button 
          type="submit" 
          className="w-full bg-iberico-600 hover:bg-iberico-700 text-white py-6"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
