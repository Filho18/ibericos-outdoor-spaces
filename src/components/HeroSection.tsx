
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-iberico-800">
              Transforme o Seu <span className="text-iberico-600">Espaço Exterior</span>
            </h1>
            <p className="text-lg md:text-xl text-iberico-600 mb-8 max-w-lg">
              Soluções exclusivas de sombreamento e proteção para a sua casa ou negócio com 
              mais de 40 anos de experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-iberico-600 hover:bg-iberico-700 text-white px-8 py-6"
              >
                <a href="#contact">
                  Peça um Orçamento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-iberico-600 text-iberico-600 hover:bg-iberico-50 px-8 py-6"
              >
                <a href="#services">
                  Os Nossos Serviços
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[450px] animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://i.imgur.com/hVxOJ5Q.jpeg" 
                alt="C.T.Ibéricos outdoor installation example" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
