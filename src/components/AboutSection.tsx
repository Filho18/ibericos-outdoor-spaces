
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
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
    <section id="about" className="bg-iberico-50 section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative h-[400px] md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="C.T.Ibéricos installation project" 
                className="absolute inset-0 w-full h-full object-cover rounded-tl-3xl rounded-br-3xl shadow-lg"
              />
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-iberico-800">
              Sobre a C.T.Ibéricos
            </h2>
            <div className="h-1 w-20 bg-iberico-500 mb-6"></div>
            
            <p className="text-iberico-700 mb-6">
              Com mais de 40 anos de experiência, a C.T.Ibéricos tornou-se um nome de confiança
              na instalação de soluções para espaços exteriores em Portugal.
            </p>
            
            <p className="text-iberico-700 mb-6">
              A nossa dedicação à qualidade e inovação garante que cada cliente receba soluções 
              personalizadas que transformam os seus espaços exteriores em áreas funcionais e elegantes, 
              independentemente das condições climatéricas.
            </p>
            
            <p className="text-iberico-700 mb-8">
              Trabalhamos com os melhores materiais e tecnologias do mercado, oferecendo soluções 
              duradouras que valorizam a sua propriedade e melhoram o seu estilo de vida.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-iberico-600 mb-2">40+</div>
                <div className="text-sm text-iberico-700">Anos de Experiência</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-iberico-600 mb-2">1000+</div>
                <div className="text-sm text-iberico-700">Projetos Concluídos</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-iberico-600 mb-2">100%</div>
                <div className="text-sm text-iberico-700">Satisfação Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
