import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, ArrowLeft, Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PergolasLanding = () => {
  const [selectedChannel, setSelectedChannel] = useState<'whatsapp' | 'email' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: 'Pérgolas Bioclimáticas',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const testimonials = [
    {
      name: "António Ferreira",
      location: "Lisboa",
      text: "Excelente serviço! A pérgola ficou fantástica e a equipa foi muito profissional. Recomendo vivamente a CT Ibéricos."
    },
    {
      name: "Carla Sousa",
      location: "Faro",
      text: "Desde o primeiro contacto até à instalação, tudo correu perfeitamente. Qualidade superior e preço justo."
    },
    {
      name: "Miguel Santos",
      location: "Leiria",
      text: "Transformaram completamente o nosso terraço. Agora podemos usá-lo todo o ano, independentemente do tempo."
    },
    {
      name: "Teresa Oliveira",
      location: "Oeiras",
      text: "Atendimento impecável e produto de alta qualidade. A pérgola bioclimática superou as nossas expectativas."
    }
  ];

  const pergolaTypes = [
    {
      title: "Pérgola Autoportante",
      description: "Estrutura independente, ideal para jardins e espaços amplos. Não necessita de apoio em paredes.",
      image: "https://i.imgur.com/iUieITm.jpeg"
    },
    {
      title: "Pérgola Adossada",
      description: "Fixada à parede da casa, perfeita para terraços e varandas. Integra-se harmoniosamente com a construção.",
      image: "https://i.imgur.com/kDwg1Sf.jpeg"
    },
    {
      title: "Pérgola com Cortinas de Vidro",
      description: "Proteção total contra vento e chuva. Transforma o espaço num ambiente fechado quando necessário.",
      image: "https://i.imgur.com/iUieITm.jpeg"
    },
    {
      title: "Pérgola Motorizada",
      description: "Lâminas orientáveis controladas por motor. Ajuste perfeito da luz e ventilação com um toque.",
      image: "https://i.imgur.com/kDwg1Sf.jpeg"
    },
    {
      title: "Pérgola com Iluminação LED",
      description: "Sistema de iluminação integrado para noites perfeitas. Crie ambientes únicos no seu espaço exterior.",
      image: "https://i.imgur.com/iUieITm.jpeg"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto-pergola');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (selectedChannel === 'whatsapp') {
      const message = encodeURIComponent(
        `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nCidade: ${formData.city}\nAssunto: ${formData.subject}\nMensagem: ${formData.message}`
      );
      window.open(`https://wa.me/351962703371?text=${message}`, '_blank');
      setIsSubmitting(false);
    } else {
      try {
        const response = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            channel: 'email',
          }),
        });

        if (response.ok) {
          alert('Mensagem enviada com sucesso!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            city: '',
            subject: 'Pérgolas Bioclimáticas',
            message: ''
          });
          setSelectedChannel(null);
        } else {
          alert('Erro ao enviar mensagem. Por favor, tente novamente.');
        }
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('Erro ao enviar mensagem. Por favor, tente novamente.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* PergolaCtaSection - Hero/CTA */}
      <section 
        className="relative pt-32 pb-12 md:pt-40 md:pb-16"
        style={{
          backgroundImage: 'url(https://i.imgur.com/iUieITm.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Peça orçamento de <span className="text-iberico-300">Pérgola Bioclimática</span>
              </h1>
              <p className="text-xl text-white/90">Sem compromisso</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-iberico-800 mb-4 text-center">
                Receba um orçamento personalizado
              </h2>
              <p className="text-iberico-600 text-center mb-8">
                e saiba exatamente qual é o valor de investimento do teu projeto
              </p>
              <Button 
                onClick={scrollToContact}
                className="w-full bg-iberico-600 hover:bg-iberico-700 text-white py-6 text-lg font-medium"
              >
                Peça o seu orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PergolaInfoSection - Benefícios */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-iberico-700 text-lg mb-8">
              A nossa equipa foi treinada para prestar serviço de atendimento das <strong>06 às 22h</strong>, <strong>7 dias por semana</strong> até 31 de dezembro
            </p>
            
            <div className="border-b border-gray-300 mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="p-6 md:p-8 md:border-r border-gray-300">
                <p className="text-iberico-700 text-center">
                  Atendimento gratuito com uma equipa treinada para tirar as tuas dúvidas
                </p>
              </div>
              <div className="p-6 md:p-8 md:border-r border-gray-300 border-t md:border-t-0">
                <p className="text-iberico-700 text-center">
                  Clareza de quanto custará o projeto incluindo a instalação
                </p>
              </div>
              <div className="p-6 md:p-8 border-t md:border-t-0">
                <p className="text-iberico-700 text-center">
                  Em troca queremos ganhar reconhecimento e relacionamento dentro da Comunidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PergolaTestimonialsSection - Testemunhos */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-12">
            Conquistamos Corações e Projetos
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                  <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 h-full">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* PergolaTypesSection - Tipos de Pérgola */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Pérgola Bioclimática
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubra as diferentes opções disponíveis para transformar o seu espaço exterior
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {pergolaTypes.map((type, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="relative h-[300px] md:h-[450px] rounded-xl overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {type.title}
                      </h3>
                      <p className="text-white/90">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
            
            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-6">
              {pergolaTypes.map((_, index) => (
                <div 
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30"
                />
              ))}
            </div>
          </Carousel>
        </div>
      </section>

      {/* PergolaContactSection - Formulário de Contacto */}
      <section id="contacto-pergola" className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            {!selectedChannel ? (
              <div className="text-center animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  Onde preferes ser contactado?
                </h2>
                <p className="text-gray-600 mb-12">
                  Escolha o seu método de contacto preferido
                </p>
                
                <div className="flex flex-col gap-4">
                  <Button
                    onClick={() => setSelectedChannel('whatsapp')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-medium relative"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Recomendado
                    </span>
                  </Button>
                  
                  <Button
                    onClick={() => setSelectedChannel('email')}
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-6 text-lg font-medium"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <button
                  onClick={() => setSelectedChannel(null)}
                  className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Alterar método de contacto
                </button>
                
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    selectedChannel === 'whatsapp' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {selectedChannel === 'whatsapp' ? 'WhatsApp' : 'Email'}
                  </span>
                </div>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Entraremos em contacto em breve
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nome"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="teuemail@email.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Telefone *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder=""
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cidade *
                    </label>
                    <Input
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Tua cidade"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <Input
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-gray-100"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreve o teu projeto ou tua necessidade..."
                      className="w-full"
                      rows={4}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-6 text-lg font-medium ${
                      selectedChannel === 'whatsapp'
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      'A enviar...'
                    ) : selectedChannel === 'whatsapp' ? (
                      'Enviar por WhatsApp'
                    ) : (
                      'Enviar por Email'
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PergolasLanding;
