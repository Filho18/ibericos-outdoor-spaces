
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EmailButton from "@/components/EmailButton";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Thermometer, Droplets, Sun, Wind } from "lucide-react";

const PergolasBioclimaticas = () => {
  const features = [
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Controlo de Temperatura",
      description: "Sistema de lâminas orientáveis que permite regular a temperatura ambiente de forma natural."
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Proteção contra Chuva",
      description: "Lâminas estanques que oferecem proteção total contra intempéries."
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Controlo de Luminosidade",
      description: "Ajuste perfeito da entrada de luz solar conforme suas necessidades."
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Ventilação Natural",
      description: "Sistema que promove a circulação de ar de forma eficiente e natural."
    }
  ];

  const benefits = [
    "Durabilidade superior com materiais de alta qualidade",
    "Instalação profissional com garantia",
    "Baixa manutenção necessária",
    "Aumento do valor do imóvel",
    "Eficiência energética melhorada",
    "Controlo total do ambiente exterior"
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
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
                Pérgolas Bioclimáticas
              </h1>
              <p className="text-xl text-iberico-700 mb-8 leading-relaxed">
                Transforme o seu espaço exterior numa zona de conforto perfeita durante todo o ano. 
                As nossas pérgolas bioclimáticas oferecem controlo total sobre o ambiente, 
                combinando design moderno com funcionalidade avançada.
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
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Pérgola Bioclimática Moderna"
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
              Tecnologia Bioclimática Avançada
            </h2>
            <p className="text-xl text-iberico-600 max-w-3xl mx-auto">
              Sistema inteligente que se adapta às condições climáticas, 
              proporcionando o máximo conforto em qualquer estação do ano.
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

      {/* Benefits Section */}
      <section className="py-20 bg-iberico-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-iberico-800 mb-8">
                Porque Escolher as Nossas Pérgolas?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-iberico-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                onClick={scrollToContact}
                className="mt-8 bg-iberico-600 hover:bg-iberico-700 text-white px-8 py-6 text-lg"
              >
                Solicitar Visita Técnica
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
                alt="Pérgola com Sistema de Lâminas"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-iberico-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
            Pronto para Transformar o Seu Espaço?
          </h2>
          <p className="text-xl text-iberico-100 mb-8 max-w-2xl mx-auto">
            Contacte-nos hoje para uma consulta gratuita. Os nossos especialistas 
            irão ajudá-lo a encontrar a solução perfeita para o seu projeto.
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

      <ContactSection />
      <Footer />
      <EmailButton />
      <WhatsAppButton />
    </div>
  );
};

export default PergolasBioclimaticas;
