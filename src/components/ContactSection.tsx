
import { useState, useRef, useEffect } from 'react';
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contacto brevemente.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-iberico-800">
              Entre em Contacto
            </h2>
            <div className="h-1 w-20 bg-iberico-500 mb-6"></div>
            
            <p className="text-iberico-700 mb-8">
              Tem alguma questão ou deseja solicitar um orçamento? Preencha o formulário e entraremos em contacto
              consigo brevemente, ou utilize um dos nossos outros canais de comunicação.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-iberico-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iberico-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-iberico-800">Morada</h3>
                  <p className="text-iberico-700">
                    Rua do Relógio de Sol, 71<br />
                    Bairro Monte do Trigo<br />
                    São Domingos de Rana, Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-iberico-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iberico-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-iberico-800">Telefones</h3>
                  <p className="text-iberico-700">
                    214 450 284<br />
                    214 450 233
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-iberico-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iberico-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-iberico-800">Email</h3>
                  <a href="mailto:casadostoldos@gmail.com" className="text-iberico-600 hover:text-iberico-800 transition-colors">
                    casadostoldos@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-iberico-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-iberico-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-iberico-800">Horário de Funcionamento</h3>
                  <p className="text-iberico-700">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              <div>
                <Button
                  asChild 
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                >
                  <a 
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
          </div>

          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-iberico-800">Peça um Orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-iberico-800 mb-1">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="O seu nome"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-iberico-800 mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="O seu email"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-iberico-800 mb-1">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="O seu telefone"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-iberico-800 mb-1">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o seu projeto ou dúvida"
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-iberico-600 hover:bg-iberico-700 text-white py-6"
                >
                  {isSubmitting ? "A Enviar..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
