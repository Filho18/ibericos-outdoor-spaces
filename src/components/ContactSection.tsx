
import { useState, useRef, useEffect } from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactSection = () => {
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

            <ContactInfo />
          </div>

          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
