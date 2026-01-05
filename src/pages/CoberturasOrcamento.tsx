import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CoberturasOrcamento = () => {
  const [selectedChannel, setSelectedChannel] = useState<"whatsapp" | "email" | null>(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    assunto: "Coberturas",
    mensagem: "",
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto-cobertura");
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
      const message = `Olá! Gostaria de pedir um orçamento para Coberturas.%0A%0ANome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0ACidade: ${formData.cidade}%0AAssunto: ${formData.assunto}%0AMensagem: ${formData.mensagem}`;
      window.open(`https://wa.me/351962703371?text=${message}`, "_blank");
    } else {
      // Email handling
      const mailtoLink = `mailto:geral@ibericos.pt?subject=Orçamento - ${formData.assunto}&body=Nome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0ACidade: ${formData.cidade}%0A%0AMensagem:%0A${formData.mensagem}`;
      window.location.href = mailtoLink;
    }
  };

  const solucoes = [
    {
      title: "Cobertura para Estacionamento",
      description: "Proteja o seu veículo do sol e da chuva. Soluções disponíveis: Pérgolas Bioclimáticas, Toldos Extensíveis ou Estruturas em Alumínio com Policarbonato.",
      image: "https://i.imgur.com/kDwg1Sf.jpeg",
    },
    {
      title: "Cobertura para Quintal",
      description: "Aproveite o seu espaço exterior em qualquer estação. Soluções disponíveis: Pérgolas Bioclimáticas, Toldos Cofre ou Pérgolas com Cortinas de Vidro.",
      image: "https://i.imgur.com/iUieITm.jpeg",
    },
    {
      title: "Cobertura para Terraço",
      description: "Transforme o seu terraço num espaço confortável e versátil. Soluções disponíveis: Pérgolas Bioclimáticas, Toldos Verticais ou Cortinas de Vidro.",
      image: "https://i.imgur.com/3MST0ep.jpeg",
    },
    {
      title: "Cobertura para Varanda",
      description: "Maximize o uso da sua varanda com proteção solar e térmica. Soluções disponíveis: Toldos Ponto Reto, Toldos Capota ou Cortinas de Vidro.",
      image: "https://i.imgur.com/kDwg1Sf.jpeg",
    },
    {
      title: "Cobertura para Jardim",
      description: "Crie zonas de sombra e conforto no seu jardim. Soluções disponíveis: Pérgolas Autoportantes, Toldos Extensíveis ou Pérgolas com Iluminação LED.",
      image: "https://i.imgur.com/iUieITm.jpeg",
    },
    {
      title: "Cobertura para Área de Lazer",
      description: "Espaços de convívio protegidos para toda a família. Soluções disponíveis: Pérgolas Bioclimáticas, Pérgolas com Cortinas de Vidro ou Toldos Cofre.",
      image: "https://i.imgur.com/3MST0ep.jpeg",
    },
    {
      title: "Cobertura para Estabelecimento Comercial",
      description: "Valorize o seu negócio com soluções profissionais. Soluções disponíveis: Toldos Comerciais, Pérgolas Bioclimáticas, Toldos Cofre Motorizados ou Estruturas em Alumínio.",
      image: "https://i.imgur.com/kDwg1Sf.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* CoberturaCtaSection - Hero/CTA */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-iberico-800 mb-8 text-center">
              Te ajudamos a orçamentar a <span className="text-iberico-600">cobertura ideal</span>, de acordo a sua necessidade.
            </h1>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-semibold text-iberico-800 mb-4 text-center">
                Descreva a sua necessidade
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

      {/* CoberturaInfoSection - Benefícios */}
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

      {/* CoberturaSolucoesSection - Soluções por Necessidade */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Qual é a sua necessidade?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Selecione o contexto do seu projeto e descubra as melhores soluções
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solucoes.map((solucao, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <img
                  src={solucao.image}
                  alt={solucao.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {solucao.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {solucao.description}
                  </p>
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-iberico-600 hover:bg-iberico-700 text-white py-3 text-sm font-medium rounded-lg"
                  >
                    Pedir orçamento
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CoberturaContactSection - Formulário de Contacto */}
      <section className="py-16 md:py-20 bg-gray-50" id="contacto-cobertura">
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

export default CoberturasOrcamento;

