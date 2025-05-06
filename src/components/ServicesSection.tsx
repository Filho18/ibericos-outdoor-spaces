
import { useState, useRef, useEffect } from 'react';
import { Umbrella, Tent, Blinds, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Toldos",
    description: "Soluções elegantes e duráveis de proteção solar para terraços, varandas e jardins, disponíveis em diversos modelos e materiais.",
    icon: Umbrella,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 2,
    title: "Pérgolas Bioclimáticas",
    description: "Estruturas inovadoras que se adaptam às condições climatéricas, criando espaços exteriores confortáveis durante todo o ano.",
    icon: Tent,
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 3,
    title: "Cortinas de Vidro",
    description: "Sistemas de fechamento em vidro que protegem espaços exteriores sem obstruir a vista, perfeitos para varandas e terraços.",
    icon: Blinds,
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 4,
    title: "Estores de Rolo",
    description: "Proteção solar elegante e funcional para interiores e exteriores, com opções de automação e diversos tecidos e designs.",
    icon: Blinds,
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="services" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-semibold mb-4 text-iberico-800 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Os Nossos Serviços
          </h2>
          <div 
            className={`h-1 w-20 bg-iberico-500 mb-6 mx-auto transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          ></div>
          <p 
            className={`text-iberico-700 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Oferecemos uma gama completa de soluções para melhorar e proteger os seus espaços exteriores, 
            combinando funcionalidade, estética e durabilidade em cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            className={`lg:col-span-1 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-iberico-600 text-white shadow-md'
                      : 'bg-white hover:bg-iberico-50 border border-gray-100 shadow-sm'
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full ${
                      activeService === service.id ? 'bg-white/20' : 'bg-iberico-50'
                    } mr-4`}>
                      <service.icon className={`h-5 w-5 ${
                        activeService === service.id ? 'text-white' : 'text-iberico-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-medium mb-1 ${
                        activeService === service.id ? 'text-white' : 'text-iberico-800'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm ${
                        activeService === service.id ? 'text-white/90' : 'text-iberico-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className={`lg:col-span-2 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeService === service.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white text-2xl font-semibold mb-2">{service.title}</h3>
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-fit bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                    >
                      <a href="#contact">
                        Peça um Orçamento
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
