import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, ArrowLeft } from "lucide-react";

const ToldosOrcamento = () => {
  const [selectedChannel, setSelectedChannel] = useState<"whatsapp" | "email" | null>(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    assunto: "Toldos",
    mensagem: "",
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto-toldo");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedChannel === "whatsapp") {
      const message = `Olá! Gostaria de pedir um orçamento para Toldos.%0A%0ANome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0ACidade: ${formData.cidade}%0AAssunto: ${formData.assunto}%0AMensagem: ${formData.mensagem}`;
      window.open(`https://wa.me/351962703371?text=${message}`, "_blank");
    } else {
      // Email handling
      const mailtoLink = `mailto:geral@ibericos.pt?subject=Orçamento - ${formData.assunto}&body=Nome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0ACidade: ${formData.cidade}%0A%0AMensagem:%0A${formData.mensagem}`;
      window.location.href = mailtoLink;
    }
  };

  const testimonials = [
    {
      name: "António Ferreira",
      location: "Lisboa",
      text: "Excelente serviço! A equipa foi muito profissional e o toldo ficou perfeito. Recomendo a todos!",
    },
    {
      name: "Carla Sousa",
      location: "Faro",
      text: "Adorei o atendimento personalizado. Explicaram-me tudo ao detalhe e o resultado superou as minhas expectativas.",
    },
    {
      name: "Miguel Santos",
      location: "Leiria",
      text: "Muito satisfeito com o investimento. O toldo é de excelente qualidade e a instalação foi rápida.",
    },
    {
      name: "Teresa Oliveira",
      location: "Oeiras",
      text: "Profissionalismo do início ao fim. O orçamento foi claro e não houve surpresas. Muito obrigada!",
    },
  ];

  const toldoTypes = [
    {
      title: "Toldo Extensível",
      description: "Solução versátil que se adapta às suas necessidades, perfeito para varandas e terraços.",
      image: "https://i.imgur.com/3MST0ep.jpeg",
    },
    {
      title: "Toldo Cofre",
      description: "Proteção total com sistema de recolha em cofre, ideal para maior durabilidade.",
      image: "https://i.imgur.com/3MST0ep.jpeg",
    },
    {
      title: "Toldo Vertical",
      description: "Controlo de luminosidade e privacidade para janelas e áreas exteriores.",
      image: "https://i.imgur.com/3MST0ep.jpeg",
    },
    {
      title: "Toldo Ponto Reto",
      description: "Design elegante e moderno, perfeito para janelas e montras comerciais.",
      image: "https://i.imgur.com/3MST0ep.jpeg",
    },
    {
      title: "Toldo Capota",
      description: "Charme clássico que adiciona personalidade à fachada do seu espaço.",
      image: "https://i.imgur.com/3MST0ep.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ToldoCtaSection - Hero/CTA */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://i.imgur.com/kDwg1Sf.jpeg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
              Peça orçamento do seu <span className="text-iberico-300">Toldo</span>
            </h1>
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

      {/* ToldoInfoSection - Benefícios */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-iberico-700 text-lg mb-8">
              A nossa equipa está treinada para prestar serviço de atendimento das 9h às 20h de 
              segunda a sexta-feira e das 9h às 14h aos sábados.
            </p>
            <div className="border-b border-gray-300 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="p-6 md:p-8 md:border-r border-gray-300">
                <p className="text-iberico-700 text-center">
                  Atendimento gratuito com uma equipa treinada para tirar as tuas dúvidas
                </p>
              </div>
              <div className="p-6 md:p-8 md:border-r border-gray-300">
                <p className="text-iberico-700 text-center">
                  Clareza de quanto custará o projeto incluindo a instalação
                </p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-iberico-700 text-center">
                  Em troca queremos ganhar reconhecimento e relacionamento dentro da Comunidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ToldoTestimonialsSection - Testemunhos */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-12">
            Conquistamos Corações e Projetos
          </h2>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/4">
                  <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm italic mb-4">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* ToldoTypesSection - Tipos de Toldo */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Toldos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubra as diferentes opções disponíveis para transformar o seu espaço exterior
            </p>
          </div>
          <Carousel opts={{ align: "center", loop: true }} className="max-w-4xl mx-auto">
            <CarouselContent>
              {toldoTypes.map((type, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[300px] md:h-[450px] rounded-xl overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {type.title}
                      </h3>
                      <p className="text-white/90">{type.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
            <div className="flex justify-center gap-2 mt-6">
              {toldoTypes.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30"
                ></div>
              ))}
            </div>
          </Carousel>
        </div>
      </section>

      {/* ToldoContactSection - Formulário de Contacto */}
      <section className="py-16 md:py-20 bg-gray-50" id="contacto-toldo">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            {!selectedChannel ? (
              // Seleção de Canal
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  Onde preferes ser contactado?
                </h2>
                <p className="text-gray-600 mb-12">
                  Escolha o seu método de contacto preferido
                </p>
                <div className="space-y-4">
                  <Button
                    onClick={() => setSelectedChannel("whatsapp")}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg relative"
                  >
                    WhatsApp
                    <span className="absolute top-2 right-2 bg-green-400 text-green-900 text-xs px-2 py-1 rounded-full font-semibold">
                      Recomendado
                    </span>
                  </Button>
                  <Button
                    onClick={() => setSelectedChannel("email")}
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-6 text-lg"
                  >
                    Email
                  </Button>
                </div>
              </div>
            ) : (
              // Formulário
              <div>
                <button
                  onClick={() => setSelectedChannel(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Alterar método de contacto
                </button>
                <div className="flex justify-center mb-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      selectedChannel === "whatsapp"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {selectedChannel === "whatsapp" ? "WhatsApp" : "Email"}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center">
                  Entraremos em contacto em breve
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iberico-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iberico-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Número de Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iberico-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Cidade *</label>
                    <input
                      type="text"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iberico-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Assunto *</label>
                    <input
                      type="text"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iberico-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Mensagem *</label>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iberico-600 focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className={`w-full py-6 text-lg ${
                      selectedChannel === "whatsapp"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white`}
                  >
                    {selectedChannel === "whatsapp" ? "Enviar por WhatsApp" : "Enviar por Email"}
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

export default ToldosOrcamento;

