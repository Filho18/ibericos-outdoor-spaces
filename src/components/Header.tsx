
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="text-2xl font-heading font-semibold">
          <a href="/" className="flex items-center">
            <img 
              src="https://i.imgur.com/E6AwRuY.png" 
              alt="C.T.Ibéricos Logo" 
              className="h-10 mr-2"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#home" className="hover-underline font-medium text-iberico-700">Home</a>
          <a href="/#about" className="hover-underline font-medium text-iberico-700">Sobre Nós</a>
          <a href="/#services" className="hover-underline font-medium text-iberico-700">Serviços</a>
          <a href="/pergolas-bioclimaticas" className="hover-underline font-medium text-iberico-700">Pérgolas</a>
          <a href="/toldos-cofres-motorizados" className="hover-underline font-medium text-iberico-700">Toldos</a>
          <a href="/#testimonials" className="hover-underline font-medium text-iberico-700">Testemunhos</a>
          <a href="/#contact" className="hover-underline font-medium text-iberico-700">Contacto</a>
        </nav>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle menu"
            className="text-iberico-700"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a 
                href="/#home" 
                className="px-4 py-2 hover:bg-muted rounded-md" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/#about" 
                className="px-4 py-2 hover:bg-muted rounded-md" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a 
                href="/#services" 
                className="px-4 py-2 hover:bg-muted rounded-md" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="/pergolas-bioclimaticas" 
                className="px-4 py-2 hover:bg-muted rounded-md" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Pérgolas
              </a>
              <a 
                href="/toldos-cofres-motorizados" 
                className="px-4 py-2 hover:bg-muted rounded-md" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Toldos
              </a>
              <a 
                href="/#testimonials" 
                className="px-4 py-2 hover:bg-muted rounded-md" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Testemunhos
              </a>
              <a 
                href="/#contact" 
                className="px-4 py-2 hover:bg-muted rounded-md" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
