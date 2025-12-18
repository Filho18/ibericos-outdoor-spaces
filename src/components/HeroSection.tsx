
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-40 md:pb-24 min-h-[600px] md:min-h-[700px] flex items-center"
      style={{
        backgroundImage: 'url(https://i.imgur.com/kDwg1Sf.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
            Transforme o Seu <span className="text-iberico-300">Espaço Exterior</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
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
              className="border-white text-white hover:bg-white/10 px-8 py-6"
            >
              <a href="#services">
                Os Nossos Serviços
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
