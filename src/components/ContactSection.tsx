import { useState, useRef, useEffect } from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactInfoOpen, setIsContactInfoOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
          {/* Título, descrição e formulário */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isMobile ? 'col-span-1' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-iberico-800">
              Entre em Contacto
            </h2>
            <div className="h-1 w-20 bg-iberico-500 mb-6"></div>
            
            <p className="text-iberico-700 mb-8">
              Tem alguma questão ou deseja solicitar um orçamento? Preencha o formulário e entraremos em contacto
              consigo brevemente, ou utilize um dos nossos outros canais de comunicação.
            </p>

            {/* Formulário de contacto */}
            <div 
              className={`transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <ContactForm />
            </div>

            {/* Contact Info colapsável para todos os dispositivos */}
            <div className="mt-8">
              <Collapsible
                open={isContactInfoOpen}
                onOpenChange={setIsContactInfoOpen}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-iberico-50 text-iberico-800 hover:bg-iberico-100 transition-colors">
                  <span className="text-lg font-medium">Ver outras formas de contacto</span>
                  {isContactInfoOpen ? (
                    <ChevronUp className="h-5 w-5 text-iberico-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-iberico-600" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white">
                  <ContactInfo />
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
