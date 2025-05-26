
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EmailButton from "@/components/EmailButton";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Zap, Shield, Settings, Smartphone } from "lucide-react";

const ToldosCofresMotorizados = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Motorização Silenciosa",
      description: "Motores de alta qualidade com funcionamento extremamente silencioso e eficiente."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proteção Total",
      description: "Sistema de cofre que protege completamente a lona quando recolhida."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Fácil Operação",
      description: "Controlo simples através de comando remoto ou interruptor de parede."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Automação Inteligente",
      description: "Opção de integração com sistemas domóticos e sensores automáticos."
    }
  ];

  const benefits = [
    "Instalação rápida e profissional",
    "Garantia de 5 anos no motor",
    "Tecidos de alta resistência UV",
    "Manutenção mínima necessária",
    "Economia de energia no verão",
    "Design moderno e elegante",
    "Proteção contra vento e chuva",
    "Valorização do imóvel"
  ];

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-iberico-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-iberico-800 mb-6">
                Toldos Cofres Motorizados
              </h1>
              <p className="text-xl text-iberico-700 mb-8 leading-relaxed">
                A solução mais moderna e prática para proteger os seus espaços do sol. 
                Com motorização silenciosa e sistema de cofre que garante máxima durabilidade, 
                desfrute de conforto com apenas um toque de botão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-iberico-600 hover:bg-iberico-700 text-white px-8 py-6 text-lg"
                >
                  Pedir Orçamento Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-iberico-600 text-iberico-600 hover:bg-iberico-50 px-8 py-6 text-lg"
                >
                  <a href="tel:214450284">Ligar Agora: 214 450 284</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Toldo Cofre Motorizado"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-iberico-800 mb-6">
              Tecnologia Avançada em Toldos
            </h2>
            <p className="text-xl text-iberico-600 max-w-3xl mx-auto">
              Combinamos a tradição da proteção solar com a mais moderna tecnologia de motorização, 
              oferecendo praticidade e durabilidade excepcionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-iberico-50 rounded-lg">
                <div className="text-iberico-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-iberico-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-iberico-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
                alt="Detalhe do Sistema de Cofre"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-iberico-800 mb-8">
                Sistema de Cofre Inteligente
              </h2>
              <p className="text-lg text-iberico-700 mb-6">
                O nosso sistema de cofre oferece proteção total para a lona quando recolhida, 
                aumentando significativamente a vida útil do toldo e mantendo sempre uma 
                aparência impecável.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-iberico-800 mb-2">Proteção Completa</h3>
                  <p className="text-iberico-700">
                    Cofre em alumínio que protege a lona de poeiras, folhas e intempéries.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-iberico-800 mb-2">Design Elegante</h3>
                  <p className="text-iberico-700">
                    Linhas modernas que se integram perfeitamente na arquitetura da sua casa.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-iberico-800 mb-2">Instalação Limpa</h3>
                  <p className="text-iberico-700">
                    Todos os componentes ficam ocultos, criando um visual minimalista e sofisticado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-iberico-800 mb-6">
              Vantagens dos Nossos Toldos Motorizados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-iberico-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-iberico-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={scrollToContact}
              className="bg-iberico-600 hover:bg-iberico-700 text-white px-8 py-6 text-lg"
            >
              Solicitar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-iberico-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
            Modernize o Seu Espaço Exterior
          </h2>
          <p className="text-xl text-iberico-100 mb-8 max-w-2xl mx-auto">
            Transforme a sua varanda ou terraço num espaço de conforto absoluto. 
            Contacte-nos para uma avaliação gratuita e sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              variant="secondary"
              className="bg-white text-iberico-600 hover:bg-iberico-50 px-8 py-6 text-lg"
            >
              Pedir Orçamento Gratuito
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-iberico-600 px-8 py-6 text-lg"
            >
              <a href="https://wa.me/351962703371" target="_blank" rel="noopener noreferrer">
                WhatsApp: 962 703 371
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <EmailButton />
      <WhatsAppButton />
    </div>
  );
};

export default ToldosCofresMotorizados;
